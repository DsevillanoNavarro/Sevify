"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Optimizar la detección de sección activa con throttling
      if (!scrollThrottleTimeout.current) {
        scrollThrottleTimeout.current = setTimeout(() => {
          scrollThrottleTimeout.current = null

          // Update active section based on scroll position
          const sections = ["hero", "about", "services", "process", "portfolio", "creative", "technologies", "contact"]
          let currentSection = activeSection

          for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              // Ajustar el umbral para mejor detección
              if (rect.top <= 150 && rect.bottom >= 100) {
                currentSection = section
                break
              }
            }
          }

          if (currentSection !== activeSection) {
            setActiveSection(currentSection)
          }
        }, 100) // Throttle a 100ms
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollThrottleTimeout.current) {
        clearTimeout(scrollThrottleTimeout.current)
      }
    }
  }, [scrolled, activeSection])

  // Añadir la referencia para el throttling
  const scrollThrottleTimeout = useRef<NodeJS.Timeout | null>(null)

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Proceso", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Soluciones", href: "#creative" },
    { name: "Tecnologías", href: "#technologies" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-3",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Sevify Logo"
              width={120}
              height={50}
              className="h-8 md:h-10 w-auto header-logo"
              priority
            />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  activeSection === item.href.substring(1) ? "text-primary" : "hover:text-primary",
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contacto
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú de navegación">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] px-6">
              <nav aria-label="Navegación móvil" className="mobile-nav">
                <div className="flex flex-col gap-6 mt-10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors py-2",
                        activeSection === item.href.substring(1) ? "text-primary" : "hover:text-primary",
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                        // Cerrar el menú después de hacer clic
                        document
                          .querySelector('[data-state="open"]')
                          ?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4 w-full" asChild>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        // Cerrar el menú después de hacer clic
                        document
                          .querySelector('[data-state="open"]')
                          ?.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }))
                      }}
                    >
                      Contacto
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
