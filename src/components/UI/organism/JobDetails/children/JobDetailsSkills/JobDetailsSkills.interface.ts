import { ISkill } from '@components/UI/atoms'

export interface IJobDetailsSkills {
  className?: string
  children?: React.ReactNode
  skills: ISkill[]
}
