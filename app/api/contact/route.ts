import { type NextRequest, NextResponse } from "next/server"

// Forzar el uso de Node.js runtime en lugar de Edge Runtime
export const runtime = "nodejs"

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

    // Email de destino fijo
    const destinationEmail = "administracion@sevify.es"

    // Verificar que las variables de entorno estén configuradas
    const requiredEnvVars = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"]
    const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

    if (missingVars.length > 0) {
      console.error("Variables de entorno faltantes:", missingVars)
      return NextResponse.json({ error: "Configuración de email no disponible" }, { status: 500 })
    }

    // Usar nodemailer con configuración específica para Node.js runtime
    const nodemailer = await import("nodemailer")

    // Corregido: createTransport en lugar de createTransporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Configuración específica para evitar problemas de DNS
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Email principal
    const mailOptions = {
      from: process.env.SMTP_FROM || `"Formulario Sevify" <${process.env.SMTP_USER}>`,
      to: destinationEmail,
      subject: `🔔 Nuevo mensaje de contacto: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #D86217 0%, #FF8A50 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Sevify</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Nuevo mensaje de contacto</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 12px; margin: 20px 0; border-left: 5px solid #D86217;">
              <h3 style="margin-top: 0; color: #333; font-size: 18px;">📋 Información del contacto</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">👤 Nombre:</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">📧 Email:</td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #D86217; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">📝 Asunto:</td>
                  <td style="padding: 8px 0; color: #333;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border-radius: 12px; border: 2px solid #f0f0f0; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333; font-size: 18px;">💬 Mensaje</h3>
              <div style="line-height: 1.6; color: #555; font-size: 16px; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}?subject=Re: ${subject}" 
                 style="background: linear-gradient(135deg, #D86217 0%, #FF8A50 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        font-weight: bold;
                        display: inline-block;">
                📧 Responder Directamente
              </a>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 14px; margin: 0;">
              📅 Enviado el ${new Date().toLocaleString("es-ES", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p style="color: #888; font-size: 12px; margin: 5px 0 0 0;">
              Este mensaje fue enviado desde el formulario de contacto de sevify.com
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Email de confirmación
    const confirmationMailOptions = {
      from: process.env.SMTP_FROM || `"Sevify" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "✅ Hemos recibido tu mensaje - Sevify",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #D86217 0%, #FF8A50 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Sevify</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Confirmación de mensaje</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #D86217; margin-top: 0;">¡Gracias por contactarnos, ${name}! 🎉</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo <strong>en las próximas 24 horas</strong>.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #D86217;">
              <h3 style="margin-top: 0; color: #333; font-size: 16px;">📋 Resumen de tu mensaje</h3>
              <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject}</p>
              <p style="margin: 10px 0;"><strong>Mensaje:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 8px; font-style: italic; color: #666;">
                "${message.length > 200 ? message.substring(0, 200) + "..." : message}"
              </div>
            </div>
            
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 12px; margin: 25px 0;">
              <h3 style="margin-top: 0; color: #2d5a2d; font-size: 16px;">🚀 Mientras tanto...</h3>
              <p style="color: #2d5a2d; margin: 10px 0;">
                Puedes seguirnos en nuestras redes sociales para estar al día de nuestros proyectos y novedades.
              </p>
              <div style="text-align: center; margin-top: 15px;">
                <a href="https://www.instagram.com/sevifyweb/" style="color: #D86217; text-decoration: none; margin: 0 10px;">📱 Instagram</a>
                <a href="https://www.tiktok.com/@sevifyweb" style="color: #D86217; text-decoration: none; margin: 0 10px;">🎵 TikTok</a>
              </div>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 25px; text-align: center; border-top: 1px solid #eee;">
            <p style="color: #D86217; font-weight: bold; font-size: 18px; margin: 0;">Equipo Sevify</p>
            <p style="color: #888; font-size: 14px; margin: 10px 0 0 0;">
              📍 Sevilla, España<br>
              📧 administracion@sevify.es
            </p>
          </div>
        </div>
      `,
    }

    try {
      // Enviar email principal
      console.log("📤 Enviando email principal a:", destinationEmail)
      const mainEmailResult = await transporter.sendMail(mailOptions)
      console.log("✅ Email principal enviado:", mainEmailResult.messageId)

      // Enviar email de confirmación
      console.log("📤 Enviando confirmación a:", email)
      const confirmationResult = await transporter.sendMail(confirmationMailOptions)
      console.log("✅ Email de confirmación enviado:", confirmationResult.messageId)

      return NextResponse.json(
        {
          message: "Email enviado correctamente",
          sentTo: "administracion@sevify.es",
          messageId: mainEmailResult.messageId,
        },
        { status: 200 },
      )
    } catch (emailError) {
      console.error("❌ Error al enviar email:", emailError)
      return NextResponse.json(
        {
          error: "Error al enviar el email. Por favor, inténtalo de nuevo más tarde.",
          details: process.env.NODE_ENV === "development" ? emailError.message : undefined,
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("❌ Error en el procesamiento del formulario:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor. Por favor, inténtalo de nuevo.",
      },
      { status: 500 },
    )
  }
}
