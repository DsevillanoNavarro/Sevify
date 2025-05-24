"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Sparkles, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Interactive elements
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<number>(0)

  const tabs = [
    { label: "Nuestra Historia", value: 0 },
    { label: "Nuestra Misión", value: 1 },
    { label: "Nuestros Valores", value: 2 },
  ]

  const tabContent = [
    {
      title: "Una historia de pasión y creatividad",
      content:
        "Fundada por un equipo de diseñadores y desarrolladores apasionados, Sevify nació con la misión de transformar la forma en que las empresas se presentan en el mundo digital. Desde nuestros inicios, nos hemos dedicado a crear experiencias web excepcionales que combinan diseño innovador, tecnología avanzada y estrategias efectivas.",
      image: "./images/about1.webp",
      stats: [
        { label: "Webs", value: "Modernas" },
        { label: "Entrega", value: "Rápida" },
        { label: "Soporte", value: "Directo" }
      ],
    },
    {
      title: "Transformar ideas en experiencias digitales",
      content:
        "Nuestra misión es ayudar a empresas de todos los tamaños a destacar en el mundo digital a través de soluciones web personalizadas que no solo se ven increíbles, sino que también generan resultados. Nos esforzamos por combinar creatividad, tecnología y estrategia para crear sitios web que cautiven a los usuarios y cumplan con los objetivos de negocio de nuestros clientes.",
      image: "./images/about2.webp",
      stats: [
        { label: "Tasa de conversión", value: "+40%" },
        { label: "Tiempo de carga", value: "<2s" },
        { label: "Satisfacción", value: "98%" },
      ],
    },
    {
      title: "Los principios que guían nuestro trabajo",
      content:
        "En Sevify, nos guiamos por valores fundamentales que definen nuestra forma de trabajar y relacionarnos con nuestros clientes. Creemos en la excelencia, la innovación constante, la transparencia en cada etapa del proceso y el compromiso con los resultados. Estos valores nos permiten ofrecer un servicio excepcional y construir relaciones duraderas con nuestros clientes.",
      image: "./images/about3.webp",
      stats: [
        { label: "Innovación", value: "Constante" },
        { label: "Compromiso", value: "Total" },
        { label: "Calidad", value: "Premium" },
      ],
    },
  ]

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "5+",
      label: "Años de experiencia",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "100+",
      label: "Clientes satisfechos",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "200+",
      label: "Proyectos completados",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      value: "24/7",
      label: "Soporte técnico",
    },
  ]

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Sobre Nosotros
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Transformamos ideas en <span className="text-gradient">experiencias digitales</span> excepcionales
          </h2>

          <p className="text-muted-foreground text-lg">
            Conoce más sobre nuestra agencia, nuestra historia y los valores que nos impulsan a crear soluciones web
            innovadoras.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.value}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300",
                  activeTab === tab.value ? "bg-primary text-white" : "bg-accent/20 hover:bg-accent/30 text-foreground",
                )}
                onClick={() => setActiveTab(tab.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">{tabContent[activeTab].title}</h3>
              <p className="text-muted-foreground">{tabContent[activeTab].content}</p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {tabContent[activeTab].stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button className="mt-4 group" onClick={() => window.open("https://sevify.com/about", "_blank")}>
                Descubre más
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border shadow-lg">
                <Image
                  src={tabContent[activeTab].image || "/placeholder.svg"}
                  alt={tabContent[activeTab].title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white">{tabContent[activeTab].title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card
                className={cn(
                  "border-none shadow-md transition-all duration-300",
                  activeCard === i ? "bg-primary text-white" : "card-hover",
                )}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className={cn(
                      "mb-4 p-3 rounded-full transition-colors duration-300",
                      activeCard === i ? "bg-white/20" : "bg-primary/10",
                    )}
                  >
                    <div className={activeCard === i ? "text-white" : "text-primary"}>{stat.icon}</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                  <p className={activeCard === i ? "text-white/80" : "text-muted-foreground"}>{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
