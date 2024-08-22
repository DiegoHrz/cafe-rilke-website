import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { nombre, correo, asunto, mensaje } = req.body;

      // Create a transporter for Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "diegomania1999@gmail.com", // Replace with your Gmail email
          pass: "qwid fevi buvk soyc", // Replace with your Gmail app password
        },
      });

      // Define the email options
      const mailOptions = {
        from: `"Cafe Rilke Website" <your_email@gmail.com>`, // Replace with your Gmail email
        to: "diegomania1999@gmail.com", // Replace with the recipient's email
        subject: `Formulario de Contacto con Asunto: ${asunto}`,
        html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <p>Has recibido un nuevo mensaje a través del formulario de contacto de la página de <strong>Cafe Rilke</strong>.</p>
          
          <h3 style="color: #eb4d4b;">Detalles del mensaje:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Nombre:</strong> ${nombre}</li>
            <li><strong>Correo:</strong> ${correo}</li>
            <li><strong>Asunto:</strong> ${asunto}</li>
          </ul>
          
          <h3 style="color: #eb4d4b;">Mensaje:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <p>${mensaje}</p>
          </div>
          
          <p>¡Que tengas un gran día!</p>
          
          <p style="color: #888;">Saludos,<br>
          El equipo de Cafe Rilke</p>
        </div>
      `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}