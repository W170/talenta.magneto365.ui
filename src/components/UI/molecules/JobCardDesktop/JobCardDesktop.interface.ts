import { IJobCard } from '../JobCard/JobCard.interface'

export interface ICardJobDesktop extends IJobCard {
  workSeen?: string
  /**
   * this property can change style in the texts when the job is open
   */
  jobOpen?: string
  /**
   * this property can change style in the texts when the job is open
   */
}
