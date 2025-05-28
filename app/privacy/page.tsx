import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | Sevify",
  description: "Política de privacidad de Sevify - Cómo protegemos y utilizamos tu información personal",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Política de Privacidad | Sevify",
    description: "Política de privacidad de Sevify - Cómo protegemos y utilizamos tu información personal",
    url: "https://sevify.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup
        title="Política de Privacidad | Sevify"
        description="Política de privacidad de Sevify - Cómo protegemos y utilizamos tu información personal"
      />
      <div className="container py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-muted-foreground">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
            <p className="mb-4">En Sevify, recopilamos información que nos proporcionas directamente cuando:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Te pones en contacto con nosotros a través de nuestros formularios</li>
              <li>Solicitas información sobre nuestros servicios</li>
              <li>Te suscribes a nuestras comunicaciones</li>
              <li>Interactúas con nuestro sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Cómo utilizamos tu información</h2>
            <p className="mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a tus consultas y solicitudes</li>
              <li>Proporcionarte información sobre nuestros servicios</li>
              <li>Mejorar nuestro sitio web y servicios</li>
              <li>Cumplir con nuestras obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra el acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartir información</h2>
            <p className="mb-4">
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
              excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Tus derechos</h2>
            <p className="mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p className="mb-4">
              Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación. Puedes consultar más
              información en nuestra{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de nuestro formulario
              de contacto en el sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
