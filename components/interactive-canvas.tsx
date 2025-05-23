"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setDimensions({ width, height })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Optimizar el canvas para mejor rendimiento
    // Reducir la cantidad de partículas en dispositivos móviles

    // Particles array
    const particles: Particle[] = []
    // Ajustar la cantidad de partículas según el ancho de la pantalla
    const isMobile = dimensions.width < 768
    const particleCount = isMobile
      ? Math.min(Math.floor(dimensions.width / 30), 40)
      : Math.min(Math.floor(dimensions.width / 15), 100)

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: getRandomColor(),
        velocity: {
          x: Math.random() * 0.5 - 0.25,
          y: Math.random() * 0.5 - 0.25,
        },
      })
    }

    function getRandomColor() {
      const colors = ["rgba(216, 98, 23, 0.7)", "rgba(205, 106, 46, 0.7)", "rgba(170, 170, 169, 0.5)"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Mouse position
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100,
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Añadir contador de frames para optimización
    let frameCount = 0
    let animationFrameId: number

    // Optimizar la animación para reducir lag
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Reducir la frecuencia de cálculos de conexiones entre partículas
      const shouldDrawConnections = !isMobile && frameCount % 2 === 0
      frameCount = (frameCount + 1) % 1000

      particles.forEach((particle) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }

        // Mouse interaction - solo si el mouse está activo
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouse.radius - distance) / mouse.radius

            particle.velocity.x -= Math.cos(angle) * force * 0.2
            particle.velocity.y -= Math.sin(angle) * force * 0.2
          }
        }

        // Connect particles - solo en ciertos frames para mejorar rendimiento
        if (shouldDrawConnections) {
          for (let i = particles.indexOf(particle) + 1; i < particles.length; i++) {
            const otherParticle = particles[i]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(216, 98, 23, ${0.2 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        }
      })
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [dimensions])

  // Reducir la altura en móviles para mejor rendimiento
  return (
    <motion.div
      ref={containerRef}
      className="w-full h-[120px] md:h-[150px] relative overflow-hidden interactive-canvas-container"
      style={{ opacity }}
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <canvas ref={canvasRef} className="w-full h-full" aria-label="Partículas interactivas" />
      </motion.div>
    </motion.div>
  )
}

interface Particle {
  x: number
  y: number
  radius: number
  color: string
  velocity: {
    x: number
    y: number
  }
}
