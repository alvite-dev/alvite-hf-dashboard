import { Header } from "@/components/layout/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">
            House Flipping Pro
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Sistema completo para gestão de investimentos imobiliários
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Gestão de Imóveis</h3>
              <p className="text-sm text-muted-foreground">
                CRUD completo com análises e histórico
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">LIA - Análise de Mercado</h3>
              <p className="text-sm text-muted-foreground">
                Filtros avançados e cálculo de preço/m²
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Calculadora de Viabilidade</h3>
              <p className="text-sm text-muted-foreground">
                ROI, custos e projeções financeiras
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
              ✅ Setup inicial concluído - Pronto para desenvolvimento
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
