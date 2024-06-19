export interface ICitiesDetailDrawer {
  cities: ICityDetail[]
  isRemote: boolean
  textRemote?: string
}

export interface ICityDetail {
  name: string
  url: string | null
  title: string
}
