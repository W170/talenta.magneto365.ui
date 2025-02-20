import React from 'react'
import styles from './candidateRatings.module.scss'
import { classNames } from '@shared/utils/common'
import { TextArea } from '../TextArea'

const Component: React.FC<any> = () => {

  const cx = classNames.bind(styles)
  
  return (
    <div className={cx("candidateRatings")}>
      <TextArea
        error="Campo requerido"
        hasCounter
        maxCounterValue={150}
        name="text-area"
        onChange={() => {}}
        placeholder="Write something"
        value="Text area value"
        />
    </div>
  )
}
/**
 *  Molecule UI component of Candidate Ratings
 */
export const CandidateRatings = Component
