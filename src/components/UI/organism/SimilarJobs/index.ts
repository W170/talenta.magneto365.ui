import SimilarJobsRaw from './SimilarJobs.component'
import SimilarJobsLink from './children/SimilarJobsLink/SimilarJobsLink.componente'
import { SimilarJobsTitle } from './children/SimilarJobsTitle/SimilarJobsTitle.component'

export const SimilarJobs = Object.assign(SimilarJobsRaw, {
  Link: SimilarJobsLink,
  Title: SimilarJobsTitle
})
