"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, CheckCircle, X } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Dirección",
      details: "Calle Sierpes 48, 41004 Sevilla, España",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Teléfono",
      details: "+34 954 123 456",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "administracion@sevify.es",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Horario",
      details: "Lunes - Viernes: 9:00 - 18:00",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, url: "#", name: "Facebook" },
    { icon: <Linkedin className="h-6 w-6" />, url: "#", name: "LinkedIn" },
    { icon: <Instagram className="h-6 w-6" />, url: "#", name: "Instagram" },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.59 6.69C19.51 6.38 19.35 6.1 19.14 5.87C18.92 5.65 18.66 5.48 18.36 5.39C16.74 5 12 5 12 5C12 5 7.26 5 5.64 5.39C5.34 5.48 5.08 5.65 4.86 5.87C4.64 6.1 4.49 6.38 4.41 6.69C4.02 8.37 4.02 11.05 4.02 11.05C4.02 11.05 4.02 13.73 4.41 15.41C4.49 15.72 4.64 16 4.86 16.23C5.08 16.45 5.34 16.62 5.64 16.71C7.26 17.1 12 17.1 12 17.1C12 17.1 16.74 17.1 18.36 16.71C18.66 16.62 18.92 16.45 19.14 16.23C19.35 16 19.51 15.72 19.59 15.41C19.98 13.73 19.98 11.05 19.98 11.05C19.98 11.05 19.98 8.37 19.59 6.69Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14.11V8L15 11.06L10 14.11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      url: "#",
      name: "TikTok",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setFormStatus("success")
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState({ name: "", email: "", subject: "", message: "" })
          setFormStatus("idle")
        }, 3000)
      } else {
        setFormStatus("error")
        setTimeout(() => setFormStatus("idle"), 3000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  return (
    <section id="contact" ref={ref} className="w-full py-16 md:py-24 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Contacto</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para <span className="text-gradient">impulsar</span> tu presencia digital?
          </h2>

          <p className="text-muted-foreground text-lg">
            Contáctanos hoy mismo y cuéntanos sobre tu proyecto. Estaremos encantados de ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">{item.icon}</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reemplazado el mapa con una sección de redes sociales interactiva */}
            <div className="bg-card rounded-xl p-8 border shadow-md">
              <h3 className="text-xl font-bold mb-6">Síguenos en redes sociales</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-accent/10 transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-4 rounded-full bg-primary/10 text-primary contact-social-icon">{social.icon}</div>
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
              <div className="relative z-10 bg-card rounded-xl p-8 border shadow-md">
                <h3 className="text-xl font-bold mb-6">Envíanos un mensaje</h3>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">¡Mensaje enviado!</h4>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </motion.div>
                ) : null}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                      <X className="h-8 w-8 text-destructive" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Error al enviar</h4>
                    <p className="text-muted-foreground">
                      Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
                    </p>
                  </motion.div>
                )}
                {formStatus !== "success" && formStatus !== "error" ? (
                  <form className="space-y-6" onSubmit={handleSubmit} aria-label="Formulario de contacto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="contact-form-field">
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder=" "
                          required
                          aria-label="Nombre"
                          aria-required="true"
                        />
                        <label htmlFor="name">Nombre</label>
                      </div>
                      <div className="contact-form-field">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder=" "
                          required
                          aria-label="Email"
                          aria-required="true"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="contact-form-field">
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        placeholder=" "
                        required
                        aria-label="Asunto"
                        aria-required="true"
                      />
                      <label htmlFor="subject">Asunto</label>
                    </div>
                    <div className="contact-form-field">
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder=" "
                        className="min-h-[120px]"
                        required
                        aria-label="Mensaje"
                        aria-required="true"
                      />
                      <label htmlFor="message">Mensaje</label>
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={formStatus === "submitting"}
                      aria-label="Enviar mensaje de contacto"
                    >
                      {formStatus === "submitting" ? (
                        <span className="flex items-center gap-2" aria-hidden="true">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          <span>Enviando...</span>
                          <span className="sr-only">Enviando mensaje, por favor espere</span>
                        </span>
                      ) : (
                        <>
                          Enviar Mensaje <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
