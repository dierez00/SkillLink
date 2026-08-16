import transporter from "../config/emailConfig.js";
export const enviarCorreoDeBienvenida = async ({ name, email }) => {
  await transporter.sendMail({
      from: `"SkillLink" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `¡Bienvenido a SkillLink, ${name}!`,
      template: 'welcome',
      context: {
        name,
        year: new Date().getFullYear(),
      },
  });
};

export const enviarCorreoRecuperacion = async ({ email, token }) => {
  const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
      from: `"SkillLink" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Recupera tu contraseña - SkillLink",
      template: 'recover', 
      context: {
        link,
        year: new Date().getFullYear()
      }
  });
};
