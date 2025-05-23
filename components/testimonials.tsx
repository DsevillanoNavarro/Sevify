"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const testimonials = [
    {
      name: "María García",
      role: "Propietaria de Peluquería Moderna",
      content:
        "Sevify transformó por completo nuestra presencia online. El diseño es moderno, elegante y perfectamente adaptado a nuestra marca. El sistema de reservas ha aumentado nuestros clientes en un 40%.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      role: "Chef de Restaurante Gourmet",
      content:
        "Estamos encantados con nuestra nueva web. El diseño es impresionante y el sistema de pedidos online funciona a la perfección. Desde el lanzamiento, nuestros pedidos a domicilio han aumentado significativamente.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      role: "Directora de Autoescuela Sevilla",
      content:
        "La plataforma que Sevify desarrolló para nuestra autoescuela ha revolucionado la forma en que enseñamos. Los estudiantes pueden acceder a materiales y realizar tests online, lo que ha mejorado significativamente su experiencia.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Antonio Fernández",
      role: "Propietario de Tienda de Moda",
      content:
        "Nuestra tienda online ha superado todas nuestras expectativas. El diseño es atractivo y la experiencia de compra es fluida. Las ventas online han crecido un 60% desde el lanzamiento.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
    {
      name: "Elena Sánchez",
      role: "Directora de Clínica Dental",
      content:
        "Sevify entendió perfectamente nuestras necesidades y creó un sitio web que refleja la profesionalidad de nuestra clínica. El sistema de citas online ha simplificado enormemente nuestro proceso de gestión.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      name: "Javier López",
      role: "Gerente de Agencia Inmobiliaria",
      content:
        "El portal inmobiliario que Sevify desarrolló para nosotros ha transformado nuestro negocio. La búsqueda avanzada de propiedades y el diseño intuitivo han mejorado significativamente la experiencia de nuestros clientes.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="testimonials" ref={ref} className="w-full py-20 md:py-32 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">Testimonios</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Lo que nuestros <span className="text-gradient">clientes</span> dicen sobre nosotros
          </h2>

          <p className="text-muted-foreground text-lg">
            Descubre por qué nuestros clientes confían en Sevify para sus proyectos digitales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-md card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                      {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-muted" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
