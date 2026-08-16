import amqp from 'amqplib';
import dotenv from 'dotenv';
import {
  enviarCorreoDeBienvenida,
  enviarCorreoRecuperacion
} from '../controllers/emailController.js';

dotenv.config();

const queue = process.env.RABBITMQ_QUEUE || 'emailQueue';
const url = process.env.CLOUDAMQP_URL;
const retryDelay = Number(process.env.RABBITMQ_RETRY_DELAY_MS || 5000);

const consumeMessages = async () => {
  try {
    const conn = await amqp.connect(url);
    const channel = await conn.createChannel();
    await channel.assertQueue(queue, { durable: true });
    await channel.prefetch(1);

    console.log(`Esperando mensajes en la cola '${queue}'...`);

    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        try {
          const data = JSON.parse(msg.content.toString());

          if (data.type === 'welcome') {
            await enviarCorreoDeBienvenida({ name: data.name, email: data.email });
          } else if (data.type === 'recover') {
            await enviarCorreoRecuperacion({ email: data.email, token: data.token });
          } else {
            console.warn("Tipo de mensaje no reconocido");
          }

          channel.ack(msg);
        } catch (error) {
          console.error('No se pudo procesar el mensaje de email:', error.message);
          channel.nack(msg, false, true);
        }
      }
    });
  } catch (err) {
    console.error('Error conectando a RabbitMQ:', err);
    setTimeout(consumeMessages, retryDelay);
  }
};

export default consumeMessages;
