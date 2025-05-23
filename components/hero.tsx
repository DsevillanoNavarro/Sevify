"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 100 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  // Floating elements
  const floatingElements = [
    { size: 60, x: -20, y: -15, delay: 0, color: "bg-primary/10" },
    { size: 120, x: 25, y: 20, delay: 0.1, color: "bg-secondary/10" },
    { size: 40, x: 15, y: -25, delay: 0.2, color: "bg-primary/5" },
    { size: 80, x: -15, y: 10, delay: 0.3, color: "bg-secondary/5" },
    { size: 30, x: 20, y: 5, delay: 0.4, color: "bg-primary/10" },
  ]

  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], [30, -30])
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], [30, -30])
  const imageRotateY = useTransform(mouseXSpring, [-0.5, 0.5], [5, -5])
  const imageRotateX = useTransform(mouseYSpring, [-0.5, 0.5], [-5, 5])

  const floatingElementXValues = floatingElements.map((el) => {
    return {
      x: el.x * -20,
      y: el.y * -20,
    }
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      setMousePosition({ x, y })
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5" />

        {/* Floating elements that react to mouse movement */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${el.color} blur-xl opacity-70`}
            style={{
              width: el.size,
              height: el.size,
              left: `${50 + el.x}%`,
              top: `${50 + el.y}%`,
              x: floatingElementXValues[i].x * mouseXSpring.get(),
              y: floatingElementXValues[i].y * mouseYSpring.get(),
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ delay: el.delay, duration: 0.8 }}
          />
        ))}

        {/* Subtle animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="subtle-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
          </defs>
          <motion.rect width="100%" height="100%" fill="url(#subtle-grid)" style={{ y, opacity }} />
        </svg>
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 py-8 md:py-16 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 md:gap-6 max-w-2xl hero-content"
        >
          <div className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Diseño Web Creativo
            </motion.span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Creamos <span className="text-gradient">experiencias digitales</span> que cautivan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-muted-foreground"
          >
            Somos un equipo joven de diseñadores y desarrolladores apasionados por crear sitios web únicos, modernos y
            funcionales que destacan en el mundo digital.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Ver nuestros servicios"
            >
              Nuestros Servicios
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Ver nuestro portfolio"
            >
              Ver Portfolio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0"
          style={{
            x: imageX,
            y: imageY,
            rotateY: imageRotateY,
            rotateX: imageRotateX,
          }}
        >
          <div className="relative w-full aspect-square">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl md:blur-2xl opacity-50" />
            <Image
              src="/images/logo.png"
              alt="Sevify Logo"
              width={500}
              height={500}
              className="w-full h-auto object-contain relative z-10 p-4 sm:p-6 md:p-0"
              priority
            />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="mt-2"
        >
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  )
}
