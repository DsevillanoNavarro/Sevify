"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight, X, Layers, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeProject, setActiveProject] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [showProjectDetails, setShowProjectDetails] = useState(false)

  const projects = [
    {
      title: "Peluquería Moderna",
      description: "Diseño web para una peluquería con sistema de reservas online",
      image: "./images/peluqueria1.webp",
      tags: ["Diseño Web", "Reservas", "SEO"],
      color: "from-pink-500/20 to-purple-500/20",
      url: "https://peluqueriasevify.netlify.app", // Añadir esta línea
      details: {
        challenge:
          "La peluquería necesitaba una presencia online moderna que reflejara su estilo y permitiera a los clientes reservar citas fácilmente.",
        solution:
          "Desarrollamos un sitio web elegante y funcional con un sistema de reservas integrado que se sincroniza con el calendario del negocio.",
        features: [
          "Sistema de reservas online con confirmación automática",
          "Galería de trabajos realizados con filtros por categoría",
          "Perfiles de estilistas con especialidades y disponibilidad",
          "Blog con consejos de belleza y tendencias",
          "Integración con redes sociales",
        ],
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Vercel"],
        results: [
          "Aumento del 40% en reservas mensuales",
          "Reducción del 60% en tiempo dedicado a gestionar citas",
          "Incremento del 25% en clientes nuevos",
        ],
        screenshots: [
          "./images/peluqueria2.webp",
          "./images/peluqueria3.webp",
          "./images/peluqueria4.webp",
        ],
      },
    },
    {
      title: "Papelería Creativa",
      description: "Sitio web para papelería con catálogo digital y sistema de reservas de productos",
      image: "./images/papeleriamagica1.webp",
      tags: ["Catálogo Online", "Diseño Web", "Negocio Local"],
      color: "from-emerald-400/20 to-yellow-300/20",
      url: "https://papeleriasevify.netlify.app/", // Añadir esta línea
      details: {
        challenge:
          "La papelería necesitaba digitalizar su catálogo de productos y permitir a los clientes reservar artículos para recogida en tienda.",
        solution:
          "Diseñamos un sitio web visualmente atractivo con un catálogo digital interactivo, sistema de reservas y sección de promociones semanales.",
        features: [
          "Catálogo digital con categorías y buscador inteligente",
          "Sistema de reserva de productos con horarios de recogida",
          "Sección de productos destacados y promociones",
          "Panel administrativo para gestión de productos y reservas",
          "Formulario de contacto y localización mediante Google Maps",
        ],
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Firebase", "EmailJS"],
        results: [
          "Aumento del 40% en consultas y reservas a través del sitio web",
          "Reducción del tiempo de atención en tienda",
          "Mayor visibilidad local gracias al SEO y diseño responsive",
        ],
        screenshots: [
          "./images/papeleriamagica2.webp",
          "./images/papeleriamagica3.webp",
          "./images/papeleriamagica4.webp",
        ],
      },
    },
    
    {
      title: "Autoescuela Sevilla",
      description: "Plataforma web para autoescuela con área de estudiantes",
      image: "./images/autoescuelapro1.webp",
      tags: ["Plataforma Web", "Área Privada", "Responsive"],
      color: "from-blue-500/20 to-cyan-500/20",
      url: "https://autoescuelasevify.netlify.app/", // Añadir esta línea
      details: {
        challenge:
          "La autoescuela necesitaba digitalizar sus procesos de enseñanza y ofrecer a sus alumnos recursos online para complementar las clases presenciales.",
        solution:
          "Desarrollamos una plataforma educativa completa con área privada para estudiantes, tests interactivos y seguimiento de progreso.",
        features: [
          "Área privada para estudiantes con progreso personalizado",
          "Más de 2000 preguntas de test con explicaciones detalladas",
          "Simulacros de examen cronometrados",
          "Vídeos explicativos de maniobras y señales",
          "Sistema de reserva de clases prácticas",
          "Estadísticas de progreso y áreas de mejora",
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS"],
        results: [
          "Tasa de aprobados incrementada en un 20%",
          "Reducción del 30% en tiempo de estudio necesario",
          "Aumento del 25% en nuevas matriculaciones",
        ],
        screenshots: [
          "./images/autoescuelapro2.webp",
          "./images/autoescuelapro3.webp",
          "./images/autoescuelapro4.webp",
        ],
      },
    },
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" ref={ref} className="w-full py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestro Portfolio
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Proyectos <span className="text-gradient">destacados</span> que hemos realizado
          </h2>

          <p className="text-muted-foreground text-lg">
            Explora algunos de nuestros trabajos más recientes y descubre cómo hemos ayudado a nuestros clientes a
            destacar en el mundo digital.
          </p>
        </motion.div>

        {/* Interactive Portfolio Showcase */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl border"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Background gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500",
                projects[activeProject].color,
                isHovering ? "opacity-50" : "opacity-30",
              )}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`project-${activeProject}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12"
              >
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {projects[activeProject].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-primary text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold">{projects[activeProject].title}</h3>
                    <p className="text-muted-foreground">{projects[activeProject].description}</p>

                    <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-3 portfolio-buttons">
                      <Button
                        onClick={() => setShowProjectDetails(true)}
                        aria-label={`Ver detalles del proyecto ${projects[activeProject].title}`}
                        className="w-full sm:w-auto"
                      >
                        Ver detalles <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => window.open(projects[activeProject].url, "_self")}
                        aria-label={`Visitar la web de ${projects[activeProject].title}`}
                        className="w-full sm:w-auto"
                      >
                        Visitar web <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        aria-label={`Contactar sobre el proyecto ${projects[activeProject].title}`}
                        className="w-full sm:w-auto"
                      >
                        Contactar
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={projects[activeProject].image || "/placeholder.svg"}
                    alt={projects[activeProject].title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeProject === index ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  onClick={() => setActiveProject(index)}
                  aria-label={`Ver proyecto ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows - Fixed */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prevProject()
              }}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg border transition-transform hover:scale-110 z-20"
              aria-label="Ver proyecto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Proyecto anterior</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                nextProject()
              }}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg border transition-transform hover:scale-110 z-20"
              aria-label="Ver proyecto siguiente"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Proyecto siguiente</span>
            </button>
          </div>
        </div>

        {/* Project thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              id={`portfolio-${index}`} // Añadir esta línea
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative rounded-lg overflow-hidden cursor-pointer border transition-all",
                activeProject === index ? "ring-2 ring-primary" : "",
              )}
              onClick={() => setActiveProject(index)}
            >
              <div className="aspect-[16/9] relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3",
                    activeProject === index ? "opacity-100" : "opacity-70",
                  )}
                >
                  <h4 className="text-white text-sm font-medium truncate">{project.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles del proyecto */}
        <AnimatePresence>
          {showProjectDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="project-details-modal"
              onClick={() => setShowProjectDetails(false)}
            >
              <motion.div className="project-details-content" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 md:p-8 relative">
                  <button
                    className="absolute right-4 top-4 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                    onClick={() => setShowProjectDetails(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{projects[activeProject].title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[activeProject].tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-primary text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Tabs defaultValue="overview">
                    <TabsList className="mb-6 tabs-list grid grid-cols-2 w-full max-w-md mx-auto">
                      <TabsTrigger value="overview" className="tabs-trigger">
                        Visión general
                      </TabsTrigger>
                      <TabsTrigger value="features" className="tabs-trigger">
                        Características
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <Layers className="h-5 w-5 text-primary" />
                            El desafío
                          </h3>
                          <p className="text-muted-foreground">{projects[activeProject].details.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5 text-primary" />
                            Nuestra solución
                          </h3>
                          <p className="text-muted-foreground">{projects[activeProject].details.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {projects[activeProject].details.screenshots.map((screenshot, i) => (
                          <div key={i} className="rounded-lg overflow-hidden border">
                            <div className="relative aspect-[4/3]">
                              <Image
                                src={screenshot || "/placeholder.svg"}
                                alt={`${projects[activeProject].title} screenshot ${i + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="features">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Características principales
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects[activeProject].details.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-accent/5">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                            <p>{feature}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                  <div className="mt-8 flex justify-end">
                    <Button onClick={() => setShowProjectDetails(false)}>Cerrar</Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
