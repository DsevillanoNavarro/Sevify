"use client"

import { usePathname } from "next/navigation"

export function UltraAdvancedSEO() {
  const pathname = usePathname()

  return (
    <>
      {/* Meta tags básicos optimizados */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Idioma y región */}
      <meta name="language" content="Spanish" />
      <meta name="geo.region" content="ES-AN" />
      <meta name="geo.placename" content="Sevilla" />

      {/* Open Graph optimizado */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      {/* Performance optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sevify",
            description: "Agencia de diseño web profesional en Sevilla",
            url: "https://sevify.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Calle Sierpes 48",
              addressLocality: "Sevilla",
              postalCode: "41004",
              addressCountry: "ES",
            },
            email: "administracion@sevify.es",
            areaServed: "Sevilla",
            serviceType: "Diseño Web",
          }),
        }}
      />
    </>
  )
}
