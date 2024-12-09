import { ICustomText } from '@components/UI/atoms/Text/Text.interface'
import { ISimilarCardData } from '@components/UI/molecules/SimilarCard'

export const similarJobTextAdapter = (job: ISimilarCardData) => {
  const text: ICustomText[] = [
    { value: job.title, fontWeight: 'bold', lineBreak: true },
    {
      value: job.contractType ? `${job.companyName} | ${job.contractType}` : String(job.companyName),
      fontWeight: 'normal',
      lineBreak: true
    },
    { value: job.salary || '', fontWeight: 'normal', lineBreak: true }
  ]
  return text
}