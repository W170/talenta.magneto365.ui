import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink'
import { JobDetails as JobDetailsRaw } from './JobDetails.component'
import { JobDetailsSummary } from './children/JobDetailsSummary'
import { JobDetailsHeader } from './children/JobDetailsHeader'
import { JobDetailsFraud } from './children/JobDetailsFraud'

export const JobDetails = Object.assign(JobDetailsRaw, {
  Header: JobDetailsHeader,
  Summary: JobDetailsSummary,
  Fraud: Object.assign(JobDetailsFraud, {
    Link: JobDetailsFraudLink
  })
})
