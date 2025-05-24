"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, ShoppingBag, Smartphone, Zap, Globe, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: "design",
      title: "Diseño Web",
      description:
        "Creamos diseños web atractivos, modernos y funcionales que cautivan a tus visitantes y reflejan la identidad de tu marca.",
      icon: <Palette className="h-10 w-10 text-primary" />,
      features: ["Diseño UI/UX personalizado", "Wireframes y prototipos", "Diseño responsive", "Identidad visual"],
      image: "./images/services1.webp",
    },
    {
      id: "development",
      title: "Desarrollo Web",
      description:
        "Desarrollamos sitios web a medida con las últimas tecnologías, garantizando un rendimiento óptimo y una experiencia de usuario excepcional.",
      icon: <Code className="h-10 w-10 text-primary" />,
      features: ["Desarrollo frontend y backend", "Sitios web corporativos", "Aplicaciones web", "Integraciones API"],
      image: "./images/services2.webp",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description:
        "Creamos tiendas online que convierten visitantes en clientes, con diseños atractivos y funcionalidades avanzadas de comercio electrónico.",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      features: [
        "Tiendas online personalizadas",
        "Integración de pasarelas de pago",
        "Gestión de inventario",
        "Experiencia de compra optimizada",
      ],
      image: "./images/services3.webp",
    },
    {
      id: "optimization",
      title: "Optimización Web",
      description:
        "Mejoramos el rendimiento y la visibilidad de tu sitio web para atraer más visitantes y convertirlos en clientes.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      features: [
        "Optimización SEO",
        "Mejora de velocidad",
        "Análisis de conversión",
        "Experiencia de usuario mejorada",
      ],
      image: "./images/services4.webp",
    },
    {
      id: "mobile",
      title: "Diseño Responsive",
      description:
        "Aseguramos que tu sitio web se vea y funcione perfectamente en todos los dispositivos, desde ordenadores de escritorio hasta smartphones.",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      features: [
        "Adaptación a todos los dispositivos",
        "Experiencia móvil optimizada",
        "Rendimiento rápido en móviles",
        "Diseño adaptativo",
      ],
      image: "./images/services4.webp",
    },
    {
      id: "performance",
      title: "Optimización de Rendimiento",
      description:
        "Mejoramos la velocidad y el rendimiento de tu sitio web para ofrecer una experiencia de usuario fluida y mejorar tu posicionamiento SEO.",
      icon: <Zap className="h-10 w-10 text-primary" />,
      features: ["Optimización de velocidad", "Compresión de imágenes", "Minificación de código", "Caché y CDN"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "hosting",
      title: "Hosting y Dominio",
      description:
        "Ofrecemos soluciones de alojamiento web seguras y fiables, así como registro y gestión de dominios para tu proyecto online.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      features: ["Hosting optimizado", "Registro de dominios", "Certificados SSL", "Copias de seguridad"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "analytics",
      title: "Analítica Web",
      description:
        "Implementamos herramientas de análisis para medir el rendimiento de tu sitio web y tomar decisiones basadas en datos reales.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      features: [
        "Configuración de Google Analytics",
        "Informes personalizados",
        "Análisis de conversiones",
        "Mapas de calor",
      ],
      image: "/placeholder.svg?height=600&width=800",
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
    <section id="services" ref={ref} className="w-full py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Soluciones digitales <span className="text-gradient">a medida</span> para tu negocio
          </h2>

          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de servicios de diseño y desarrollo web para ayudarte a destacar en el mundo
            digital.
          </p>
        </motion.div>

        {/* Servicios destacados con carrusel */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-30" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 relative z-10">
              <div className="space-y-6">
                <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">{services[activeService].icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold">{services[activeService].title}</h3>
                <p className="text-muted-foreground">{services[activeService].description}</p>

                <ul className="space-y-3 mt-6">
                  {services[activeService].features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className="mt-4"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Solicitar información sobre nuestros servicios"
                >
                  Solicitar información
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />

                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={services[activeService].image || "/placeholder.svg"}
                    alt={services[activeService].title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>

            {/* Navegación de servicios */}
            <div className="flex overflow-x-auto py-4 px-4 sm:px-8 gap-2 bg-background/80 backdrop-blur-sm border-t scrollbar-hide">
              {services.slice(0, 4).map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "px-4 py-2 rounded-full whitespace-nowrap transition-colors",
                    activeService === index
                      ? "bg-primary text-white"
                      : "bg-primary/10 hover:bg-primary/20 text-foreground",
                  )}
                  aria-pressed={activeService === index}
                  aria-label={`Ver servicio: ${service.title}`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios adicionales */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(4).map((service, i) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full border-none shadow-md card-hover">
                <CardHeader>
                  <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
