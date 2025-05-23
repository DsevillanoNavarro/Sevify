"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "#", name: "Facebook" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, url: "#", name: "Instagram" },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.11a2.92 2.92 0 01-2.92 2.92 2.92 2.92 0 01-2.92-2.92V2H6.82v5.11a4.83 4.83 0 01-3.77 4.25v1.75a6.59 6.59 0 002.08.33 6.59 6.59 0 005.94-3.72 6.59 6.59 0 005.94 3.72 6.59 6.59 0 002.08-.33V6.69z" />
        </svg>
      ),
      url: "#",
      name: "TikTok",
    },
  ]

  const links = {
    company: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "Servicios", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Tecnologías", href: "#technologies" },
      { name: "Soluciones", href: "#creative" },
    ],
    services: [
      { name: "Diseño Web", href: "#services" },
      { name: "Desarrollo Web", href: "#services" },
      { name: "E-Commerce", href: "#services" },
      { name: "SEO", href: "#services" },
      { name: "Mantenimiento Web", href: "#services" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "/privacy" },
      { name: "Términos y Condiciones", href: "/terms" },
      { name: "Política de Cookies", href: "/cookies" },
      { name: "Aviso Legal", href: "/legal" },
    ],
  }

  return (
    <footer className="w-full bg-card text-card-foreground border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="Sevify Logo" width={120} height={50} className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground">
              Creamos experiencias digitales excepcionales que transforman ideas en realidades impactantes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  onClick={(e) => {
                    e.preventDefault()
                    if (
                      social.name === "Facebook" ||
                      social.name === "LinkedIn" ||
                      social.name === "Instagram" ||
                      social.name === "TikTok"
                    ) {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Visitar nuestro perfil de ${social.name}`}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Sevify. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap gap-4 text-sm">
            {links.legal.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target={link.href.startsWith("/") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
