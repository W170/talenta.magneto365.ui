import {
  LinkedinSolid,
  FacebookSolid,
  Mobile,
  DocumentUploadGrayOutline,
  SMSGrayOutline
} from '@constants/icons.constants'
import { CandidateOverviewSummary, CandidateOverviewSkills, CandidateOverviewTags } from './children'
import { TCandidateOverviewData, ECandidateOverviewData } from './CandidateOverview.interface'

const candidateOverviewTypes = {
  [ECandidateOverviewData.SUMMARY]: CandidateOverviewSummary,
  [ECandidateOverviewData.SKILLS]: CandidateOverviewSkills,
  [ECandidateOverviewData.TAGS]: CandidateOverviewTags
}

export const getCandidateOverviewComponent = <T extends TCandidateOverviewData>(type: T) => {
  return candidateOverviewTypes[type as keyof typeof candidateOverviewTypes]
}

export const candidateOverviewIcons: { [key: string]: string } = {
  email: SMSGrayOutline,
  facebook: FacebookSolid,
  hv: DocumentUploadGrayOutline,
  linkedIn: LinkedinSolid,
  phone: Mobile
}
