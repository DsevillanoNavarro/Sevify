"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Zap, Palette, Code, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function CreativeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("web")

  const creativeTabs = [
    {
      id: "web",
      title: "Diseño Web",
      description:
        "Creamos sitios web a medida que combinan estética y funcionalidad para ofrecer experiencias digitales excepcionales.",
      image: "./images/solucion1.webp",
      features: [
        "Diseño UI/UX personalizado",
        "Experiencias interactivas",
        "Diseño responsive",
        "Optimización de rendimiento",
        "Accesibilidad web",
        "Animaciones y transiciones",
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description:
        "Desarrollamos tiendas online que convierten visitantes en clientes, con diseños atractivos y funcionalidades avanzadas.",
      image: "./images/solucion2.webp",
      features: [
        "Catálogos de productos",
        "Pasarelas de pago seguras",
        "Gestión de inventario",
        "Experiencia de compra optimizada",
        "Integración con CRM",
        "Análisis de conversión",
      ],
    },
    {
      id: "apps",
      title: "Aplicaciones Web",
      description:
        "Creamos aplicaciones web personalizadas que automatizan procesos y mejoran la eficiencia de tu negocio.",
      image: "./images/solucion3.webp",
      features: [
        "Desarrollo a medida",
        "Interfaces intuitivas",
        "Integración con APIs",
        "Escalabilidad",
        "Seguridad avanzada",
        "Mantenimiento continuo",
      ],
    },
  ]

  const creativeSolutions = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Ideas Innovadoras",
      description: "Transformamos conceptos en soluciones digitales creativas que destacan en el mercado.",
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Diseño Único",
      description: "Creamos experiencias visuales atractivas que reflejan la identidad de tu marca.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Desarrollo Avanzado",
      description: "Implementamos tecnologías de vanguardia para crear sitios web de alto rendimiento.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Optimización Continua",
      description: "Mejoramos constantemente tu presencia digital para maximizar resultados.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Experiencias Interactivas",
      description: "Diseñamos interacciones que sorprenden y cautivan a tus usuarios.",
    },
  ]

  return (
    <section id="creative" ref={ref} className="w-full py-16 md:py-24 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Soluciones Creativas
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Soluciones <span className="text-gradient">innovadoras</span> para tu negocio digital
          </h2>

          <p className="text-muted-foreground text-lg">
            Combinamos creatividad y tecnología para desarrollar soluciones digitales que transforman la presencia
            online de tu empresa.
          </p>
        </motion.div>

        {/* Creative Solutions Tabs */}
        <Tabs defaultValue="web" value={activeTab} onValueChange={setActiveTab} className="w-full mb-16">
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {creativeTabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {creativeTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{tab.title}</h3>
                  <p className="text-muted-foreground">{tab.description}</p>

                  <ul className="space-y-3 mt-6">
                    {tab.features.map((feature, i) => (
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
                    className="mt-6 group"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden border shadow-lg"
                  >
                    <Image
                      src={tab.image || "/placeholder.svg"}
                      alt={tab.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white">{tab.title}</h4>
                        <p className="text-white/80 text-sm">{tab.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Creative Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {creativeSolutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card
                className={cn(
                  "h-full border-none shadow-md overflow-hidden transition-all duration-300",
                  activeCard === i ? "bg-gradient-to-br from-primary to-secondary text-white" : "card-hover",
                )}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "mb-4 p-3 rounded-full transition-colors duration-300",
                      activeCard === i ? "bg-white/20" : "bg-primary/10",
                    )}
                  >
                    <div className={activeCard === i ? "text-white" : ""}>{solution.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{solution.title}</h4>
                  <p className={activeCard === i ? "text-white/80" : "text-muted-foreground"}>{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
