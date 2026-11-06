export enum JobsCardLabelStatusEnum {
  APPLIED = 'applied',
  PENDING = 'pending',
  REQUIRED = 'required'
}

export interface IJobCardLabelStatus {
  text: string
  status: JobsCardLabelStatusType
}

export type JobsCardLabelStatusType = `${JobsCardLabelStatusEnum}`
