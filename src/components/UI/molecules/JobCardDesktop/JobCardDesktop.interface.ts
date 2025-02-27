import React from 'react'
import { IJobCard } from '../JobCard/JobCard.interface'

export interface ICardJobDesktop extends IJobCard {
  /**
   * this property can change style in the texts when the job is open
   */
  jobOpen?: string
  /**
   *
   */
  renderRight?: () => React.ReactNode
}
