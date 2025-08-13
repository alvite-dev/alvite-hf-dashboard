"use client"

import { Home } from "lucide-react"
import { APP_NAME } from "@/lib/constants"

export function Header() {
  return (
    <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo e Nome */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
            <Home className="w-4 h-4 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-semibold text-foreground">
            {APP_NAME}
          </h1>
        </div>

        {/* Navegação - será expandida futuramente */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/imoveis"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Imóveis
          </a>
        </nav>

        {/* Placeholder para user menu */}
        <div className="w-8 h-8 bg-muted rounded-full"></div>
      </div>
    </header>
  )
}