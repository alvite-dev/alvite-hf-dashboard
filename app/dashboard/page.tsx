import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Calculator, 
  Calendar, 
  BarChart3, 
  TrendingUp,
  Plus,
  ArrowUpRight,
  DollarSign
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header da página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral dos seus investimentos imobiliários
          </p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Novo Imóvel
        </Button>
      </div>

      {/* Cards de métricas principais */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Imóveis Ativos
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              +1 desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              ROI Médio
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Investido
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 450k</div>
            <p className="text-xs text-muted-foreground">
              +R$ 50k este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Próximas Visitas
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              3 agendadas para esta semana
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cards de funcionalidades */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <CardTitle className="text-base">Gestão de Imóveis</CardTitle>
            </div>
            <CardDescription>
              CRUD completo com análises e histórico detalhado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">3 ativos</Badge>
              <Button variant="ghost" size="sm">
                Ver todos
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <CardTitle className="text-base">LIA - Análise de Mercado</CardTitle>
            </div>
            <CardDescription>
              Filtros avançados e cálculo de preço/m² automatizado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">12 análises</Badge>
              <Button variant="ghost" size="sm">
                Analisar
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              <CardTitle className="text-base">Calculadora de Viabilidade</CardTitle>
            </div>
            <CardDescription>
              ROI, custos e projeções financeiras detalhadas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">ROI 23.5%</Badge>
              <Button variant="ghost" size="sm">
                Calcular
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Atividades recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>
            Últimas atualizações nos seus projetos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Casa São Bento - Visita realizada</p>
                <p className="text-xs text-muted-foreground">há 2 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Apartamento Vila Nova - Novo cálculo de viabilidade</p>
                <p className="text-xs text-muted-foreground">há 4 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Casa Centro - Visita agendada para amanhã</p>
                <p className="text-xs text-muted-foreground">há 6 horas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}