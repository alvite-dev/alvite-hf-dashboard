import { IMOVEL_STATUS, VISITA_STATUS } from './constants'

// Tipos principais da aplicação
export type ImovelStatus = typeof IMOVEL_STATUS[keyof typeof IMOVEL_STATUS]
export type VisitaStatus = typeof VISITA_STATUS[keyof typeof VISITA_STATUS]

export interface Imovel {
  id: string
  titulo: string
  endereco_completo: string
  bairro: string
  cidade: string
  cep: string
  m2_terreno: number | null
  
  // Dados originais (prospecção)
  quartos_original: number | null
  banheiros_original: number | null
  vagas_original: number | null
  m2_util_original: number | null
  link_anuncio_original: string | null
  valor_anuncio: number | null
  fonte_prospeccao: string | null
  
  // Dados pós-reforma
  quartos_final: number | null
  banheiros_final: number | null
  vagas_final: number | null
  m2_util_final: number | null
  
  // Dados financeiros
  valor_compra: number | null
  valor_compra_total: number | null
  data_compra: string | null
  valor_venda: number | null
  data_venda: string | null
  
  // Controle de processo
  status_processo: ImovelStatus
  observacoes: string | null
  
  created_at: string
  updated_at: string
}

export interface Viabilidade {
  id: string
  imovel_id: string
  valor_compra_estimado: number
  custo_reforma_estimado: number
  valor_venda_estimado: number
  roi_percentual: number
  roi_valor: number
  tempo_estimado_meses: number
  observacoes: string | null
  aprovado: boolean | null
  created_at: string
}

export interface Visita {
  id: string
  imovel_id: string
  data_hora: string
  status: VisitaStatus
  observacoes_pre: string | null
  created_at: string
}

export interface AvaliacaoVisita {
  id: string
  visita_id: string
  imovel_id: string
  estado_geral: number
  acabamentos: number
  localizacao: number
  potencial_reforma: number
  problemas_estruturais: string | null
  pontos_positivos: string | null
  pontos_negativos: string | null
  fotos_visita: string[]
  recomenda_compra: boolean | null
  created_at: string
}