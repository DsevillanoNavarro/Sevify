import { seoConfig } from "./seo-config"

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.siteUrl}#localbusiness`,
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    email: "administracion@sevify.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Sierpes 48",
      addressLocality: "Sevilla",
      postalCode: "41004",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.3886",
      longitude: "-5.9945",
    },
    sameAs: [seoConfig.social.instagram, seoConfig.social.tiktok, seoConfig.social.linkedin],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      {
        "@type": "Country",
        name: "España",
      },
      {
        "@type": "State",
        name: "Andalucía",
      },
      {
        "@type": "City",
        name: "Sevilla",
      },
    ],
    knowsAbout: [
      "Diseño Web",
      "Desarrollo Web",
      "UI/UX Design",
      "E-commerce",
      "SEO",
      "Frontend Development",
      "Backend Development",
      "Responsive Design",
      "Web Performance",
      "Digital Marketing",
    ],
    slogan: "Diseño web moderno, minimalista y funcional",
    foundingDate: "2020",
    numberOfEmployees: "2-10",
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}#website`,
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    inLanguage: "es-ES",
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    publisher: {
      "@type": "Organization",
      "@id": `${seoConfig.siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${seoConfig.siteUrl}#organization`,
    },
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}#organization`,
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${seoConfig.siteUrl}/logo.png`,
      width: "512",
      height: "512",
    },
    image: {
      "@type": "ImageObject",
      url: `${seoConfig.siteUrl}/og-image.jpg`,
      width: "1200",
      height: "630",
    },
    sameAs: [seoConfig.social.instagram, seoConfig.social.tiktok, seoConfig.social.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "administracion@sevify.es",
      availableLanguage: ["Spanish", "English"],
      areaServed: "ES",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Sierpes 48",
      addressLocality: "Sevilla",
      postalCode: "41004",
      addressRegion: "Andalucía",
      addressCountry: "ES",
    },
    foundingDate: "2020",
    numberOfEmployees: "2-10",
    knowsAbout: [
      "Web Design",
      "Web Development",
      "User Experience Design",
      "User Interface Design",
      "E-commerce Development",
      "Search Engine Optimization",
      "Frontend Development",
      "Backend Development",
      "Responsive Web Design",
      "Web Performance Optimization",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diseño Web Moderno",
          description: "Creación de sitios web modernos y atractivos",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desarrollo Web",
          description: "Desarrollo de aplicaciones web a medida",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce",
          description: "Tiendas online profesionales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Optimización SEO",
          description: "Mejora del posicionamiento en buscadores",
        },
      },
    ],
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema() {
  const faqs = [
    {
      question: "¿Qué servicios de diseño web ofrece Sevify?",
      answer:
        "Ofrecemos diseño web moderno y minimalista, desarrollo frontend y backend, creación de tiendas online (e-commerce), optimización SEO profesional, diseño responsive para todos los dispositivos, y servicios de hosting y mantenimiento web.",
    },
    {
      question: "¿Cuánto tiempo tarda en completarse un proyecto web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web corporativo básico puede completarse en 2-3 semanas, mientras que proyectos más complejos como e-commerce o aplicaciones web pueden tomar entre 6-12 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar.",
    },
    {
      question: "¿Los sitios web son responsive y optimizados para móviles?",
      answer:
        "Absolutamente. Todos nuestros diseños son completamente responsive y están optimizados para dispositivos móviles, tablets y escritorio. Utilizamos las últimas tecnologías y mejores prácticas para garantizar una experiencia perfecta en cualquier dispositivo.",
    },
    {
      question: "¿Incluyen optimización SEO en sus servicios?",
      answer:
        "Sí, todos nuestros sitios web incluyen optimización SEO técnica básica: estructura semántica, meta tags, sitemap, robots.txt, y optimización de velocidad. También ofrecemos servicios de SEO avanzado y marketing digital como servicios adicionales.",
    },
    {
      question: "¿Ofrecen soporte técnico después del lanzamiento?",
      answer:
        "Sí, proporcionamos soporte técnico continuo y servicios de mantenimiento para asegurar que tu sitio web funcione perfectamente. Incluimos actualizaciones de seguridad, copias de seguridad regulares, y soporte para resolver cualquier incidencia técnica.",
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo web?",
      answer:
        "Utilizamos las tecnologías más modernas y eficientes: React, Next.js, TypeScript, Tailwind CSS para el frontend, y Node.js para el backend. También trabajamos con sistemas de gestión de contenido como WordPress cuando es necesario.",
    },
    {
      question: "¿Pueden ayudar con el hosting y dominio?",
      answer:
        "Sí, ofrecemos servicios completos de hosting profesional, registro de dominios, configuración de SSL, y gestión técnica completa. Nos encargamos de todos los aspectos técnicos para que tú puedas centrarte en tu negocio.",
    },
    {
      question: "¿Trabajan con empresas de toda España?",
      answer:
        "Sí, aunque estamos ubicados en Sevilla, trabajamos con clientes de toda España y también internacionalmente. Realizamos reuniones virtuales y gestionamos proyectos de forma completamente remota cuando es necesario.",
    },
  ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema() {
  const services = [
    {
      name: "Diseño Web Moderno",
      description:
        "Creamos diseños web atractivos, modernos y funcionales que cautivan a tus visitantes y mejoran la experiencia de usuario.",
      serviceType: "Web Design",
      category: "Design",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
    {
      name: "Desarrollo Web Frontend",
      description:
        "Desarrollamos interfaces de usuario modernas y responsive utilizando las últimas tecnologías como React y Next.js.",
      serviceType: "Frontend Development",
      category: "Development",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
    {
      name: "Desarrollo Web Backend",
      description:
        "Creamos sistemas backend robustos y escalables para aplicaciones web complejas con Node.js y bases de datos modernas.",
      serviceType: "Backend Development",
      category: "Development",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
    {
      name: "E-Commerce Profesional",
      description:
        "Desarrollamos tiendas online que convierten visitantes en clientes con funcionalidades avanzadas y diseño optimizado.",
      serviceType: "E-commerce Development",
      category: "E-commerce",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
    {
      name: "Optimización SEO",
      description:
        "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda con técnicas SEO avanzadas y contenido optimizado.",
      serviceType: "SEO Optimization",
      category: "Marketing",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
    {
      name: "Diseño UI/UX",
      description:
        "Creamos experiencias de usuario excepcionales con interfaces intuitivas y diseños centrados en el usuario.",
      serviceType: "UI/UX Design",
      category: "Design",
      provider: "Sevify",
      areaServed: "España",
      audience: "Business",
    },
  ]

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    category: service.category,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${seoConfig.siteUrl}#localbusiness`,
      name: service.provider,
    },
    areaServed: {
      "@type": "Country",
      name: service.areaServed,
    },
    audience: {
      "@type": "Audience",
      audienceType: service.audience,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Diseño Web",
      itemListElement: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        seller: {
          "@type": "Organization",
          "@id": `${seoConfig.siteUrl}#organization`,
        },
      },
    },
  }))
}

export function generateHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo crear un sitio web moderno y profesional",
    description: "Guía paso a paso para desarrollar un sitio web moderno con Sevify",
    image: `${seoConfig.siteUrl}/how-to-image.jpg`,
    totalTime: "P4W",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "1500",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Dominio web",
      },
      {
        "@type": "HowToSupply",
        name: "Hosting profesional",
      },
      {
        "@type": "HowToSupply",
        name: "Contenido y recursos gráficos",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "React",
      },
      {
        "@type": "HowToTool",
        name: "Next.js",
      },
      {
        "@type": "HowToTool",
        name: "Tailwind CSS",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Análisis y planificación",
        text: "Analizamos tus necesidades y objetivos para crear una estrategia web personalizada.",
        image: `${seoConfig.siteUrl}/step1.jpg`,
      },
      {
        "@type": "HowToStep",
        name: "Diseño y prototipado",
        text: "Creamos diseños modernos y prototipos interactivos para validar la experiencia de usuario.",
        image: `${seoConfig.siteUrl}/step2.jpg`,
      },
      {
        "@type": "HowToStep",
        name: "Desarrollo y programación",
        text: "Desarrollamos tu sitio web utilizando las tecnologías más modernas y eficientes.",
        image: `${seoConfig.siteUrl}/step3.jpg`,
      },
      {
        "@type": "HowToStep",
        name: "Optimización y testing",
        text: "Optimizamos el rendimiento, SEO y realizamos pruebas exhaustivas en todos los dispositivos.",
        image: `${seoConfig.siteUrl}/step4.jpg`,
      },
      {
        "@type": "HowToStep",
        name: "Lanzamiento y soporte",
        text: "Lanzamos tu sitio web y proporcionamos soporte continuo para garantizar su funcionamiento óptimo.",
        image: `${seoConfig.siteUrl}/step5.jpg`,
      },
    ],
  }
}

export function generateArticleSchema(title: string, description: string, url: string, publishDate?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: publishDate || new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.png`,
        width: "512",
        height: "512",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: {
      "@type": "ImageObject",
      url: `${seoConfig.siteUrl}/article-image.jpg`,
      width: "1200",
      height: "630",
    },
    articleSection: "Web Development",
    wordCount: "1500",
    inLanguage: "es-ES",
    isAccessibleForFree: true,
    genre: "Technology",
    keywords: ["diseño web", "desarrollo web", "SEO", "UI/UX"],
  }
}
