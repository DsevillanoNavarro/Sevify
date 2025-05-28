"use client"

import { useEffect } from "react"

export function CoreWebVitals() {
  useEffect(() => {
    // Optimización de Core Web Vitals
    const optimizeWebVitals = () => {
      // Preload de imágenes críticas
      const criticalImages = ["/og-image.jpg", "/logo.png", "/hero-image.jpg"]
      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })

      // Optimización de LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
          }
        }
      })
      observer.observe({ entryTypes: ["largest-contentful-paint"] })

      // Optimización de CLS (Cumulative Layout Shift)
      let clsValue = 0
      const clsEntries = []
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsEntries.push(entry)
            clsValue += entry.value
          }
        }
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })

      // Optimización de FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log("FID:", entry.processingStart - entry.startTime)
        }
      })
      fidObserver.observe({ entryTypes: ["first-input"] })

      // Lazy loading para imágenes no críticas
      const images = document.querySelectorAll("img[data-src]")
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ""
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
          }
        })
      })
      images.forEach((img) => imageObserver.observe(img))

      // Prefetch de páginas importantes
      const importantPages = ["/privacy", "/terms", "/contact"]
      importantPages.forEach((page) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = page
        document.head.appendChild(link)
      })
    }

    // Ejecutar optimizaciones después de que la página esté cargada
    if (document.readyState === "complete") {
      optimizeWebVitals()
    } else {
      window.addEventListener("load", optimizeWebVitals)
    }

    return () => {
      window.removeEventListener("load", optimizeWebVitals)
    }
  }, [])

  return null
}
