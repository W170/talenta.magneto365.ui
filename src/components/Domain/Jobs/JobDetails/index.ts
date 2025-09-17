import { JobDetailsDrawerClose } from './children/JobDetailsDrawer/JobDetailsDrawerClose'
import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink'
import { JobDetails as JobDetailsRaw } from './JobDetails.component'
import { JobDetailsSummary } from './children/JobDetailsSummary'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { JobDetailsSkills } from './children/JobDetailsSkills'
import { JobDetailsFraud } from './children/JobDetailsFraud'
import { JobDetailsSuggested } from './children/JobDetailsSuggested'
import { JobDetailsAction } from './children/JobDetailsAction'
import { JobDetailsSubTitle } from './children/JobDetailsSubTitle'
import { JobDetailsSkeleton } from './children/JobDetailsSkeleton'
import { JobDetailsDrawer } from './children/JobDetailsDrawer'
import { JobSuggestedCard } from './children/JobSuggestedCard'
import { JobsFaqs } from './children/JobsFaqs'
import { JobsFaqsLink } from './children/JobsFaqs/JobsFaqsLink'
import { JobsFaqsQuestion } from './children/JobsFaqs/JobsFaqsQuestion'

export const JobDetails = Object.assign(JobDetailsRaw, {
  Header: JobDetailsHeader,
  JobsSuggested: JobDetailsSuggested,
  JobSuggestedCard: JobSuggestedCard,
  Summary: JobDetailsSummary,
  Faqs: Object.assign(JobsFaqs, {
    Question: JobsFaqsQuestion,
    Link: JobsFaqsLink
  }),
  Skills: JobDetailsSkills,
  Fraud: Object.assign(JobDetailsFraud, {
    Link: JobDetailsFraudLink
  }),
  Action: JobDetailsAction,
  Subtitle: JobDetailsSubTitle,
  Drawer: Object.assign(JobDetailsDrawer, {
    Close: JobDetailsDrawerClose
  }),
  Skeleton: JobDetailsSkeleton
})
