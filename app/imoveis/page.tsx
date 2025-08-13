import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Building2, MapPin, Calendar, TrendingUp } from "lucide-react"

export default function ImoveisPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Imóveis</h1>
          <p className="text-muted-foreground">
            Gerencie sua carteira de investimentos imobiliários
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Cadastrar Imóvel
        </Button>
      </div>

      {/* Lista de imóveis */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Em Análise</Badge>
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-lg">Casa São Bento</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              São Bento do Sul, SC
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Valor Anúncio:</span>
              <span className="font-medium">R$ 180.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Área:</span>
              <span className="font-medium">120m²</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ROI Estimado:</span>
              <span className="font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                25.4%
              </span>
            </div>
            <div className="pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Ver Detalhes
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <Calendar className="w-3 h-3 mr-2" />
                Agendar Visita
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="default">Aprovado</Badge>
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-lg">Apartamento Vila Nova</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Joinville, SC
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Valor Compra:</span>
              <span className="font-medium">R$ 95.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Área:</span>
              <span className="font-medium">65m²</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ROI Projetado:</span>
              <span className="font-medium text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                28.7%
              </span>
            </div>
            <div className="pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Ver Detalhes
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <Calendar className="w-3 h-3 mr-2" />
                Próxima Visita: 15/08
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline">Prospectando</Badge>
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-lg">Casa Centro Histórico</CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Blumenau, SC
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Valor Anúncio:</span>
              <span className="font-medium">R$ 320.000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Área:</span>
              <span className="font-medium">200m²</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-medium text-orange-600">Aguardando análise</span>
            </div>
            <div className="pt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                Ver Detalhes
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                Calcular Viabilidade
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}