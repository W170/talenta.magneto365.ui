import { JobDetailsFraudLink } from './children/JobDetailsFraud/JobDetailsFraudLink'
import { JobDetails as JobDetailsRaw } from './JobDetails.component'
import { JobDetailsSummary } from './children/JobDetailsSummary'
import { JobDetailsFraud } from './children/JobDetailsFraud'

export const JobDetails = Object.assign(JobDetailsRaw, {
  Summary: JobDetailsSummary,
  Fraud: Object.assign(JobDetailsFraud, {
    Link: JobDetailsFraudLink
  })
})
