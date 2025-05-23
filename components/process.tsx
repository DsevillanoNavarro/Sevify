"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageSquare, Lightbulb, Pencil, CodeIcon, Rocket, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Consulta Inicial",
      description: "Comenzamos con una reunión para entender tus necesidades, objetivos y visión para tu proyecto web.",
      details: [
        "Análisis de necesidades y objetivos",
        "Estudio de tu público objetivo",
        "Evaluación de competidores",
        "Definición de requisitos técnicos",
        "Establecimiento de plazos y presupuesto",
      ],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Estrategia y Planificación",
      description:
        "Desarrollamos una estrategia personalizada y un plan detallado para tu proyecto, definiendo alcance, plazos y presupuesto.",
      details: [
        "Creación de mapa del sitio",
        "Definición de la arquitectura de información",
        "Planificación de contenidos",
        "Selección de tecnologías adecuadas",
        "Establecimiento de KPIs",
      ],
    },
    {
      icon: <Pencil className="h-8 w-8" />,
      title: "Diseño",
      description:
        "Creamos wireframes y diseños visuales que reflejan la identidad de tu marca y ofrecen una experiencia de usuario excepcional.",
      details: [
        "Creación de wireframes y prototipos",
        "Diseño de interfaz de usuario (UI)",
        "Experiencia de usuario (UX)",
        "Selección de paleta de colores y tipografías",
        "Diseño responsive para todos los dispositivos",
      ],
    },
    {
      icon: <CodeIcon className="h-8 w-8" />,
      title: "Desarrollo",
      description:
        "Transformamos los diseños en código, construyendo tu sitio web con las tecnologías más adecuadas para tu proyecto.",
      details: [
        "Desarrollo frontend (HTML, CSS, JavaScript)",
        "Desarrollo backend y bases de datos",
        "Integración de CMS si es necesario",
        "Implementación de funcionalidades específicas",
        "Optimización de rendimiento",
      ],
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lanzamiento",
      description:
        "Realizamos pruebas exhaustivas y lanzamos tu sitio web, asegurándonos de que todo funcione perfectamente.",
      details: [
        "Testing en múltiples dispositivos y navegadores",
        "Optimización SEO on-page",
        "Configuración de analíticas",
        "Implementación de medidas de seguridad",
        "Migración y lanzamiento",
      ],
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Mantenimiento y Mejora",
      description:
        "Ofrecemos soporte continuo, actualizaciones y optimizaciones para mantener tu sitio web funcionando de manera óptima.",
      details: [
        "Monitorización de rendimiento",
        "Actualizaciones de seguridad",
        "Análisis de métricas y comportamiento de usuarios",
        "Implementación de mejoras continuas",
        "Soporte técnico",
      ],
    },
  ]

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setExpandedStep(expandedStep === index ? null : index)
  }

  return (
    <section id="process" ref={ref} className="w-full py-16 md:py-24 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestro Proceso
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Cómo <span className="text-gradient">trabajamos</span> para crear tu proyecto
          </h2>

          <p className="text-muted-foreground text-lg">
            Seguimos un proceso estructurado y transparente para convertir tus ideas en realidades digitales
            excepcionales.
          </p>
        </motion.div>

        {/* Creative Process Timeline */}
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          {/* Steps */}
          <div className="space-y-24 md:space-y-32 relative">
            {steps.map((step, index) => (
              <div key={index} id={`process-step-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      className={`space-y-4 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-lg`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`inline-flex items-center gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          Paso {index + 1}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="relative flex items-center justify-center z-10 cursor-pointer"
                    animate={
                      activeStep === index
                        ? {
                            scale: 1.2,
                            transition: { duration: 0.3, type: "spring" },
                          }
                        : { scale: 1 }
                    }
                    onClick={() => handleStepClick(index)}
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300",
                        activeStep === index || expandedStep === index
                          ? "bg-primary text-white"
                          : "bg-background border-4 border-primary/20",
                      )}
                    >
                      <div className={activeStep === index || expandedStep === index ? "text-white" : "text-primary"}>
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>

                  <div className="w-full md:w-1/2" />
                </motion.div>

                {/* Expanded details - Ahora se muestra al hacer clic en el icono */}
                <div
                  className={cn(
                    "process-step-content mt-8 md:mt-4 w-full md:w-3/4 mx-auto",
                    expandedStep === index ? "active" : "",
                  )}
                >
                  <div className="bg-card rounded-xl p-6 shadow-lg border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">{step.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
