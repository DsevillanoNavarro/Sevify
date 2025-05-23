"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Calendar, Briefcase, Award } from "lucide-react"
import { cn } from "@/lib/utils"

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const controls = useAnimation()

  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const team = [
    {
      name: "Alejandro Gómez",
      role: "Fundador & CEO",
      bio: "Experto en diseño web y estrategia digital con más de 8 años de experiencia en el sector.",
      avatar: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
      details: {
        location: "Sevilla, España",
        email: "alejandro@sevify.com",
        phone: "+34 654 321 987",
        experience: "8+ años en diseño web",
        education: "Máster en Diseño UX/UI",
        languages: "Español, Inglés",
        skills: ["Diseño UX/UI", "Estrategia Digital", "Gestión de Proyectos", "Marketing Digital"],
        awards: ["Premio Mejor Diseñador Web 2022", "Reconocimiento Innovación Digital 2021"],
      },
    },
    {
      name: "Laura Martínez",
      role: "Directora de Diseño",
      bio: "Diseñadora UX/UI apasionada por crear experiencias digitales intuitivas y atractivas.",
      avatar: "/placeholder.svg?height=300&width=300",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
      details: {
        location: "Sevilla, España",
        email: "laura@sevify.com",
        phone: "+34 654 789 123",
        experience: "6+ años en diseño UX/UI",
        education: "Grado en Diseño Gráfico",
        languages: "Español, Inglés, Francés",
        skills: ["Diseño UX/UI", "Prototipado", "Investigación de Usuarios", "Diseño de Interfaces"],
        awards: ["Premio Diseño Innovador 2023", "Finalista Mejor Portfolio Digital 2022"],
      },
    },
  ]

  return (
    <section id="team" ref={ref} className="w-full py-16 md:py-24 bg-accent/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Nuestro Equipo
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Conoce a los <span className="text-gradient">profesionales</span> detrás de Sevify
          </h2>

          <p className="text-muted-foreground text-lg">
            Un equipo joven y apasionado de expertos en diseño y desarrollo web comprometidos con la excelencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="perspective-1000"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={cn(
                  "relative transition-all duration-500 transform-style-3d cursor-pointer h-full",
                  flippedCard === index ? "rotate-y-180" : "",
                )}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                {/* Front of card */}
                <Card className="border-none shadow-lg overflow-hidden h-full backface-hidden">
                  <div className="relative group">
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Avatar className="h-full w-full rounded-none">
                        <AvatarImage
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <AvatarFallback className="rounded-none bg-primary/20 text-4xl">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      {/* Hover overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                        animate={activeCard === index ? { opacity: 1 } : { opacity: 0 }}
                      >
                        <div className="p-6 w-full">
                          <p className="text-white text-sm mb-4">Haz clic para ver más detalles</p>
                          <div className="flex justify-center gap-4">
                            <a
                              href={member.social.twitter}
                              className="text-white hover:text-primary/80 transition-colors"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                            <a
                              href={member.social.linkedin}
                              className="text-white hover:text-primary/80 transition-colors"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                              href={member.social.github}
                              className="text-white hover:text-primary/80 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold text-xl">{member.name}</h3>
                      <p className="text-primary text-sm mb-2">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </CardContent>
                  </div>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 border-none shadow-lg overflow-hidden h-full backface-hidden rotate-y-180 bg-primary text-white">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <h3 className="font-bold text-xl">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-white/70" />
                        <span>{member.details.location}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-white/70" />
                        <span>{member.details.email}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-white/70" />
                        <span>{member.details.phone}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Briefcase className="h-5 w-5 text-white/70" />
                        <span>{member.details.experience}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-white/70" />
                        <span>{member.details.education}</span>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Award className="h-5 w-5 text-white/70" />
                          Reconocimientos
                        </h4>
                        <ul className="space-y-1 text-sm text-white/80">
                          {member.details.awards.map((award, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-white/70 mt-1.5" />
                              <span>{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-6">
                      <a href={member.social.twitter} className="text-white hover:text-white/80 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-white hover:text-white/80 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-white hover:text-white/80 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
