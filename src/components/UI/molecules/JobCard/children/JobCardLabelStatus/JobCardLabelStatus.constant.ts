import { Checked, UrgentYellowBold, WarningYellowBold } from '@constants/icons.constants'
import { JobsCardLabelStatusEnum } from './JobCardLabelStatus.interface'

export const JOB_CARD_LABEL_STATUS_COLOR: Record<JobsCardLabelStatusEnum, string> = {
  [JobsCardLabelStatusEnum.APPLIED]: Checked,
  [JobsCardLabelStatusEnum.PENDING]: WarningYellowBold,
  [JobsCardLabelStatusEnum.REQUIRED]: UrgentYellowBold
}
