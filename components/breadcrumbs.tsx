"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname()

  // Generar breadcrumbs automáticamente si no se proporcionan
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")
    const breadcrumbs: BreadcrumbItem[] = [{ name: "Inicio", url: "/" }]

    let currentPath = ""
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const name = segment.charAt(0).toUpperCase() + segment.slice(1)
      breadcrumbs.push({ name, url: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbItems = items || generateBreadcrumbs()

  // No mostrar breadcrumbs en la página principal
  if (pathname === "/" || breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground py-4", className)}
    >
      <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.url}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />

            {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}

            {index < breadcrumbItems.length - 1 ? (
              <Link href={item.url} className="hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name" aria-current="page">
                {item.name}
              </span>
            )}

            {index < breadcrumbItems.length - 1 && <ChevronRight className="h-4 w-4 mx-2" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
