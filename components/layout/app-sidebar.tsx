"use client"

import {
  Home,
  Building2,
  Calculator,
  Calendar,
  BarChart3,
  Newspaper,
  Settings,
  ChevronUp,
  User2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { APP_NAME } from "@/lib/constants"
import { isFeatureEnabled } from "@/lib/features"

const navigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Imóveis",
    url: "/imoveis",
    icon: Building2,
    feature: "IMOVEIS" as const,
  },
  {
    title: "LIA - Análise",
    url: "/lia",
    icon: BarChart3,
    feature: "LIA" as const,
  },
  {
    title: "Viabilidades",
    url: "/viabilidades",
    icon: Calculator,
    feature: "VIABILIDADES" as const,
  },
  {
    title: "Visitas",
    url: "/visitas",
    icon: Calendar,
    feature: "VISITAS" as const,
  },
  {
    title: "Notícias",
    url: "/noticias",
    icon: Newspaper,
    feature: "NOTICIAS" as const,
  },
]

export function AppSidebar() {
  const enabledNavigation = navigation.filter(
    (item) => !item.feature || isFeatureEnabled(item.feature)
  )

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
            <Home className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{APP_NAME}</span>
            <span className="text-xs text-muted-foreground">House Flipping</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {enabledNavigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/config">
                    <Settings />
                    <span>Configurações</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Alvite Dev
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}