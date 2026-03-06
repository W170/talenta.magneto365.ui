export interface ISimilarJobsCard {
  id?: number | null
  title: string
  salary: string | null
  toAgree: boolean | null
  cities: string[]
  jobUrlSlug: string
  experience: string | null
  companyLogo: string | null
  companyName?: string | null
  hideLogo?: boolean
}
