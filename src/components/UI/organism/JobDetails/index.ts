import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink'
import { JobDetails as JobDetailsRaw } from './JobDetails.component'
import { JobDetailsSummary } from './children/JobDetailsSummary'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { JobDetailsSkills } from './children/JobDetailsSkills'
import { JobDetailsFraud } from './children/JobDetailsFraud'
import { JobDetailsSuggested } from './children/JobDetailsSuggested'
import { JobDetailsDrawer } from '../JobDetailsDrawer'
import { JobDetailsAction } from './children/JobDetailsAction'
import { JobDetailsSubTitle } from './children/JobDetailsSubTitle'

export const JobDetails = Object.assign(JobDetailsRaw, {
  Header: JobDetailsHeader,
  JobsSuggested: JobDetailsSuggested,
  Summary: JobDetailsSummary,
  Skills: JobDetailsSkills,
  Fraud: Object.assign(JobDetailsFraud, {
    Link: JobDetailsFraudLink
  }),
  Action: JobDetailsAction,
  Subtitle: JobDetailsSubTitle,
  Drawer: JobDetailsDrawer
})
