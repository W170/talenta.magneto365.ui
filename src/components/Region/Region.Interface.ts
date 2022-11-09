export interface IRegionProps {
  lang: string
  locales: IRegionLocales
  onRegionChange: (lng: string) => void
}

export interface IRegion {
  lang: string
  name: string
  flag: string
}

export interface IRegionLocales {
  mainTitle: string
  selectTitle: string
  cancelText: string
  ok: string
}
