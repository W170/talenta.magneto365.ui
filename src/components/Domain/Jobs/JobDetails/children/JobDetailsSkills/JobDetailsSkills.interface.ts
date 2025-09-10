import { ISkill } from '@components/UI/atoms'

type Skill = ISkill & { id: number | string }

export interface IJobDetailsSkills {
  className?: string
  children?: React.ReactNode
  skills: Skill[]
}
