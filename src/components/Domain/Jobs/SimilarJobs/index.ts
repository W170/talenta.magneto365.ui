import SimilarJobsRaw from './SimilarJobs.component'
import { SimilarJobsCard } from './children/SimilarJobsCard'
import SimilarJobsLink from './children/SimilarJobsLink/SimilarJobsLink.componente'

export const SimilarJobs = Object.assign(SimilarJobsRaw, {
  Link: SimilarJobsLink,
  Card: SimilarJobsCard
})
