"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { MapPin, Calendar, Palmtree, Sun, Utensils, Music } from "lucide-react"

export function SevillaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [activeImage, setActiveImage] = useState(0)

  const sevillaImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "La Giralda",
      title: "La Giralda",
      description: "El icónico campanario de la Catedral de Sevilla, símbolo de la ciudad.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Plaza de España",
      title: "Plaza de España",
      description:
        "Impresionante plaza semicircular con canales y puentes, construida para la Exposición Iberoamericana de 1929.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Real Alcázar",
      title: "Real Alcázar",
      description: "Palacio real con impresionantes jardines y arquitectura mudéjar.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Barrio de Santa Cruz",
      title: "Barrio de Santa Cruz",
      description: "Antiguo barrio judío con calles estrechas, plazas encantadoras y patios floridos.",
    },
  ]

  const sevillaFacts = [
    {
      icon: <Sun className="h-10 w-10 text-primary" />,
      title: "Ciudad del Sol",
      description: "Sevilla es una de las ciudades más soleadas de Europa, con más de 300 días de sol al año.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Cuna de las Tapas",
      description:
        "Sevilla es famosa por sus tapas, pequeñas porciones de comida que se sirven en bares y restaurantes.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Semana Santa y Feria",
      description: "La Semana Santa y la Feria de Abril son dos de las festividades más importantes de la ciudad.",
    },
    {
      icon: <Music className="h-10 w-10 text-primary" />,
      title: "Cuna del Flamenco",
      description:
        "Sevilla es considerada una de las cunas del flamenco, arte declarado Patrimonio Cultural Inmaterial de la Humanidad.",
    },
    {
      icon: <Palmtree className="h-10 w-10 text-primary" />,
      title: "Naranjos y Jacarandas",
      description:
        "Las calles de Sevilla están adornadas con naranjos y jacarandas que llenan la ciudad de color y aroma.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Ubicación Estratégica",
      description:
        "Situada a orillas del río Guadalquivir, Sevilla ha sido históricamente un importante puerto fluvial.",
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
    <section id="sevilla" ref={ref} className="w-full py-20 md:py-32 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestra Ciudad
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Sevilla, <span className="text-gradient">inspiración</span> de nuestro trabajo
          </h2>

          <p className="text-muted-foreground text-lg">
            Descubre la ciudad que nos inspira y que da nombre a nuestra agencia. Sevilla es arte, cultura, historia y
            pasión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />

            <div className="relative z-10 rounded-2xl overflow-hidden border shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                {sevillaImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={false}
                    animate={{
                      opacity: activeImage === index ? 1 : 0,
                      scale: activeImage === index ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    style={{ display: activeImage === index ? "block" : "none" }}
                  >
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </motion.div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{sevillaImages[activeImage].title}</h3>
                  <p className="text-white/80 text-sm">{sevillaImages[activeImage].description}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {sevillaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeImage === index ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">La ciudad que nunca deja de sorprender</h3>

            <p className="text-muted-foreground">
              Sevilla, capital de Andalucía, es una ciudad llena de historia, arte y cultura. Sus calles, monumentos y
              tradiciones han sido fuente de inspiración para artistas, escritores y creadores de todo el mundo.
            </p>

            <p className="text-muted-foreground">
              En Sevify, nos inspiramos en la rica herencia cultural de Sevilla para crear diseños web que combinan
              tradición y modernidad, elegancia y funcionalidad, pasión y precisión.
            </p>

            <p className="text-muted-foreground">
              Nuestro nombre y logo, inspirados en la emblemática Giralda, simbolizan nuestra conexión con la ciudad y
              nuestro compromiso con la excelencia y la creatividad.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contactar con nosotros
              </Button>
            </div>
          </motion.div>
        </div>

        <Tabs defaultValue="lugares" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="lugares">Lugares Emblemáticos</TabsTrigger>
              <TabsTrigger value="curiosidades">Curiosidades</TabsTrigger>
              <TabsTrigger value="gastronomia">Gastronomía</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="lugares" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "La Giralda",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Antiguo alminar de la mezquita de Sevilla, ahora campanario de la catedral.",
                },
                {
                  title: "Plaza de España",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Impresionante plaza semicircular con canales y puentes.",
                },
                {
                  title: "Real Alcázar",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Palacio real con impresionantes jardines y arquitectura mudéjar.",
                },
                {
                  title: "Torre del Oro",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Torre dodecagonal del siglo XIII situada junto al río Guadalquivir.",
                },
                {
                  title: "Barrio de Santa Cruz",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Antiguo barrio judío con calles estrechas y plazas encantadoras.",
                },
                {
                  title: "Parque de María Luisa",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Principal parque urbano de Sevilla, con jardines, fuentes y monumentos.",
                },
              ].map((place, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="overflow-hidden border-none shadow-md h-full card-hover">
                    <div className="relative h-48">
                      <Image src={place.image || "/placeholder.svg"} alt={place.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{place.title}</h3>
                      <p className="text-muted-foreground">{place.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="curiosidades" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {sevillaFacts.map((fact, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="h-full border-none shadow-md card-hover">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-primary/10">{fact.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                      <p className="text-muted-foreground">{fact.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="gastronomia" className="mt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Salmorejo",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Crema fría de tomate, pan, ajo y aceite de oliva.",
                },
                {
                  title: "Espinacas con Garbanzos",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Plato tradicional de espinacas con garbanzos y especias.",
                },
                {
                  title: "Serranito",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Sándwich caliente con lomo de cerdo, jamón serrano, pimiento verde y tomate.",
                },
                {
                  title: "Torrijas",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Postre típico de Semana Santa, similar al pan francés, con miel o azúcar y canela.",
                },
                {
                  title: "Cazón en Adobo",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Pescado marinado en una mezcla de especias y frito.",
                },
                {
                  title: "Montaditos",
                  image: "/placeholder.svg?height=300&width=400",
                  description: "Pequeños sándwiches con diversos ingredientes, perfectos para tapear.",
                },
              ].map((dish, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Card className="overflow-hidden border-none shadow-md h-full card-hover">
                    <div className="relative h-48">
                      <Image src={dish.image || "/placeholder.svg"} alt={dish.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{dish.title}</h3>
                      <p className="text-muted-foreground">{dish.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Sevilla es una ciudad que hay que vivir y sentir. Te invitamos a visitarla y descubrir por qué nos inspira
            cada día en nuestro trabajo.
          </p>
          <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Contactar con nosotros
          </Button>
        </div>
      </div>
    </section>
  )
}
