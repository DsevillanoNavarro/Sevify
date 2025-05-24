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
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.59 6.69C19.51 6.38 19.35 6.1 19.14 5.87C18.92 5.65 18.66 5.48 18.36 5.39C16.74 5 12 5 12 5C12 5 7.26 5 5.64 5.39C5.34 5.48 5.08 5.65 4.86 5.87C4.64 6.1 4.49 6.38 4.41 6.69C4.02 8.37 4.02 11.05 4.02 11.05C4.02 11.05 4.02 13.73 4.41 15.41C4.49 15.72 4.64 16 4.86 16.23C5.08 16.45 5.34 16.62 5.64 16.71C7.26 17.1 12 17.1 12 17.1C12 17.1 16.74 17.1 18.36 16.71C18.66 16.62 18.92 16.45 19.14 16.23C19.35 16 19.51 15.72 19.59 15.41C19.98 13.73 19.98 11.05 19.98 11.05C19.98 11.05 19.98 8.37 19.59 6.69Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 14.11V8L15 11.06L10 14.11Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
