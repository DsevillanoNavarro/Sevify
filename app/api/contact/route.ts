import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validar los datos
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Formato de email inválido" }, { status: 400 })
    }

    // Email de destino fijo: administracion@sevify.es
    const destinationEmail = "administracion@sevify.es"

    // Si no hay configuración SMTP, simular envío exitoso para desarrollo
    if (!process.env.SMTP_HOST) {
      console.log("📧 Mensaje de contacto recibido:", {
        name,
        email,
        subject,
        message,
        destinationEmail: "administracion@sevify.es", // Mostrar en consola a dónde se enviaría
      })
      return NextResponse.json(
        {
          message: "Mensaje recibido correctamente (modo desarrollo)",
          sentTo: "administracion@sevify.es",
        },
        { status: 200 },
      )
    }

    // Configurar nodemailer solo si las variables de entorno están disponibles
    const nodemailer = await import("nodemailer")

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465", // true para puerto 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email principal - siempre a administracion@sevify.es
    const mailOptions = {
      from: process.env.SMTP_FROM || `"Formulario Web" <noreply@sevify.es>`,
      to: destinationEmail, // Usar siempre este email
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
      replyTo: email, // Para que puedan responder directamente al remitente
    }

    // Email de confirmación al usuario
    const confirmationMailOptions = {
      from: process.env.SMTP_FROM || `"Sevify" <noreply@sevify.es>`,
      to: email,
      subject: "Hemos recibido tu mensaje - Sevify",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D86217;">¡Gracias por contactarnos, ${name}!</h2>
          
          <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Resumen de tu mensaje:</h3>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong> ${message.substring(0, 150)}${message.length > 150 ? "..." : ""}</p>
          </div>
          
          <p>Mientras tanto, puedes seguirnos en nuestras redes sociales o visitar nuestro sitio web para conocer más sobre nuestros servicios.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #D86217; font-weight: bold;">Equipo Sevify</p>
            <p style="color: #888; font-size: 14px;">
              Sevilla, España<br>
              administracion@sevify.es
            </p>
          </div>
        </div>
      `,
    }

    try {
      // Enviar email principal
      await transporter.sendMail(mailOptions)

      // Enviar email de confirmación
      await transporter.sendMail(confirmationMailOptions)

      return NextResponse.json(
        {
          message: "Email enviado correctamente",
          sentTo: "administracion@sevify.es",
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("Error al enviar email:", emailError)
      return NextResponse.json(
        {
          error: "Error al enviar el email. Por favor, inténtalo de nuevo más tarde.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error en el procesamiento del formulario:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor. Por favor, inténtalo de nuevo.",
      },
      { status: 500 },
    )
  }
}
