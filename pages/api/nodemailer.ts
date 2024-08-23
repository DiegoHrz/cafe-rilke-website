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
        html: `<div>
        <p>Has recibido un nuevo mensaje a través del formulario de contacto de la página de <strong>Cafe Rilke</strong>.</p>
        
        
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 5rem auto;">
      <h3 style="color: black; font-size: 1.4rem; margin: 0 auto;">Mensaje de Contacto</h3>
      <table width="100%" cellpadding="10" cellspacing="0" style="border: 2px dashed #ddd; margin-top: 2rem">
        <tr>
          <td width="15%" style="font-size: 1rem; font-weight: bold;">Nombre:</td>
          <td style="font-size: 0.8rem;">${nombre}</td>
        </tr>
        <tr>
          <td width="15%" style="font-size: 1rem; font-weight: bold;">Correo:</td>
          <td style="font-size: 0.8rem;">${correo}</td>
        </tr>
        <tr>
          <td width="15%" style="font-size: 1rem; font-weight: bold;">Asunto:</td>
          <td style="font-size: 0.8rem;">${asunto}</td>
        </tr>
        <tr>
          <td width="15%" style="font-size: 1rem; font-weight: bold;">Mensaje:</td>
          <td style="font-size: 0.8rem;">${mensaje}</td>
        </tr>
      </table>

      </div>
      <p>¡Que tengas un gran día!</p>
      
      <p style="color: #888;">Saludos,<br>El equipo de Cafe Rilke</p>
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
