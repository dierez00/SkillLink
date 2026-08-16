package com.skilllink.backend.messaging;

import com.skilllink.backend.config.RabbitMQConfig;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.HashMap;

@Service
public class PasswordResetPublisher {

    private final RabbitTemplate rabbitTemplate;

    public PasswordResetPublisher(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    public void sendResetLink(String email, String token) {
        Map<String, String> message = new HashMap<>();
        message.put("type", "recover");
        message.put("email", email);
        message.put("token", token);

        rabbitTemplate.convertAndSend(
            RabbitMQConfig.EXCHANGE, 
            RabbitMQConfig.ROUTING_KEY, 
            message
        );
    }
}
