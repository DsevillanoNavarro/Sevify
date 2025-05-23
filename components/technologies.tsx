"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "Todas" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Diseño" },
    { id: "tools", name: "Herramientas" },
  ]

  const technologies = [
    {
      name: "React",
      description: "Biblioteca JavaScript para construir interfaces de usuario interactivas",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend"],
    },
    {
      name: "TypeScript",
      description: "Superset de JavaScript con tipado estático",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend", "backend"],
    },
    {
      name: "Tailwind CSS",
      description: "Framework CSS utilitario para diseño rápido y responsivo",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend", "design"],
    },
    {
      name: "Bootstrap",
      description: "Framework CSS para crear sitios web responsivos y móviles",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend", "design"],
    },
    {
      name: "Figma",
      description: "Herramienta de diseño de interfaces y prototipado colaborativo",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["design"],
    },
    {
      name: "PostgreSQL",
      description: "Sistema de gestión de bases de datos relacional",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["backend"],
    },
    {
      name: "MongoDB",
      description: "Base de datos NoSQL orientada a documentos",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["backend"],
    },
    {
      name: "Docker",
      description: "Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["tools"],
    },
    {
      name: "Git",
      description: "Sistema de control de versiones distribuido",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["tools"],
    },
    {
      name: "Vercel",
      description: "Plataforma para despliegue y alojamiento de aplicaciones web",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["tools"],
    },
    {
      name: "JavaScript",
      description: "Lenguaje de programación interpretado para desarrollo web",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend", "backend"],
    },
    {
      name: "HTML",
      description: "Lenguaje de marcado para la estructura de páginas web",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend"],
    },
    {
      name: "CSS",
      description: "Lenguaje de estilos para el diseño visual de páginas web",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["frontend", "design"],
    },
    {
      name: "Django",
      description: "Framework de desarrollo web de alto nivel en Python",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["backend"],
    },
    {
      name: "Python",
      description: "Lenguaje de programación interpretado, de alto nivel y propósito general",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["backend"],
    },
    {
      name: "Java",
      description: "Lenguaje de programación orientado a objetos de propósito general",
      icon: "/placeholder.svg?height=80&width=80",
      categories: ["backend"],
    },
  ]

  const filteredTechnologies =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.categories.includes(activeCategory))

  return (
    <section id="technologies" ref={ref} className="w-full py-12 md:py-16 lg:py-24 bg-accent/5">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-4">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestras Tecnologías
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Herramientas <span className="text-gradient">avanzadas</span> para soluciones modernas
          </h2>

          <p className="text-muted-foreground text-base md:text-lg">
            Utilizamos las tecnologías más innovadoras y eficientes para desarrollar soluciones digitales de alta
            calidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={cn(
                "px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-300 text-sm",
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-accent/20 hover:bg-accent/30 text-foreground",
              )}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              aria-label={`Filtrar por ${category.name}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${activeCategory}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-3 md:mb-4 p-2 md:p-3 rounded-full bg-primary/10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8 md:w-12 md:h-12"
                    />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm mb-4 flex-grow">{tech.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center mt-auto">
                    {tech.categories.map((category) => (
                      <Badge key={category} variant="outline" className="capitalize text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
