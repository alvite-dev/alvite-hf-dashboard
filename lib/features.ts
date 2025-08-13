// Feature flags para controle de funcionalidades
export const FEATURES = {
  IMOVEIS: true,
  LIA: true, 
  VIABILIDADES: true,
  VISITAS: true,
  SCRAPING: false,        // Ativar depois
  NOTICIAS: false,        // Ativar depois
  PROJETOS_REFORMA: false, // Fase 5
  FINANCEIRO: false,      // Fase 6
} as const

export type FeatureKey = keyof typeof FEATURES

export function isFeatureEnabled(feature: FeatureKey): boolean {
  return FEATURES[feature] === true
}