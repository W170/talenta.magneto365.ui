import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink'
import { JobDetails as JobDetailsRaw } from './JobDetails.component'
import { JobDetailsSummary } from './children/JobDetailsSummary'
import { JobDetailsDrawer } from './children/JobDetailsDrawer'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { JobDetailsSkills } from './children/JobDetailsSkills'
import { JobDetailsFraud } from './children/JobDetailsFraud'
import { JobDetailsActions } from './children/JobDetailsActions'
import { JobDetailsSuggested } from './children/JobDetailsSuggested'

export const JobDetails = Object.assign(JobDetailsRaw, {
  Header: JobDetailsHeader,
  Actions: JobDetailsActions,
  JobsSuggested: JobDetailsSuggested,
  Summary: JobDetailsSummary,
  Skills: JobDetailsSkills,
  Fraud: Object.assign(JobDetailsFraud, {
    Link: JobDetailsFraudLink
  }),
  Drawer: JobDetailsDrawer
})
