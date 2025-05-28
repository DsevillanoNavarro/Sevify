export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sevify",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sevify.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sevify.com"}/logo.png`,
    sameAs: [
      "https://twitter.com/sevify",
      "https://www.instagram.com/sevify/",
      "https://www.linkedin.com/company/sevify/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "",
      contactType: "customer service",
      email: "contacto@sevify.com",
      availableLanguage: ["Spanish", "English"],
    },
    description:
      "Sevify crea experiencias digitales con diseño web minimalista, interfaces intuitivas y alto rendimiento. Inspirado en la estética y la usabilidad.",
  }
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: "Sevify",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://sevify.com"}/logo.png`,
      },
    },
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseño y Desarrollo Web",
    provider: {
      "@type": "Organization",
      name: "Sevify",
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    description: "Servicios de diseño web moderno, minimalista y funcional con enfoque en la experiencia de usuario.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
    },
  }
}
