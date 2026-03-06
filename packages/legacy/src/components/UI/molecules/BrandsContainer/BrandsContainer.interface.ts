export interface IBrandsContainer {
  brands?: IBrands[]
  closeBrands?: () => void
  ourBrandsText: string
}

export interface IBrands {
  brandImg: string
  brandAlt: string
  brandTitle: string
  brandUrl: string
}
