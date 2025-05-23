import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validar los datos
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Configurar el transportador de email
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D86217;">Nuevo mensaje de contacto desde Sevify</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #D86217; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto de sevify.com</p>
            <p>Fecha: ${new Date().toLocaleString("es-ES")}</p>
          </div>
        </div>
      `,
      // Email de respuesta automática al usuario
      replyTo: email,
    }

    // Email de confirmación al usuario
    const confirmationMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Hemos recibido tu mensaje - Sevify",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D86217;">¡Gracias por contactarnos, ${name}!</h2>
          
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Resumen de tu mensaje:</h3>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          </div>
          
          <p>Mientras tanto, puedes seguirnos en nuestras redes sociales o visitar nuestro sitio web para conocer más sobre nuestros servicios.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #D86217; font-weight: bold;">Equipo Sevify</p>
            <p style="color: #888; font-size: 14px;">
              Sevilla, España<br>
              info@sevify.com<br>
              +34 954 123 456
            </p>
          </div>
        </div>
      `,
    }

    // Enviar ambos emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(confirmationMailOptions)

    return NextResponse.json({ message: "Email enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
