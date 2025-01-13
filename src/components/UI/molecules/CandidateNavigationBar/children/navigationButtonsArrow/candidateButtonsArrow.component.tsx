import React from 'react'
import styles from './CandidateButtonsArrow.module.scss'
import { classNames } from '@shared/utils/common'
import { ICandidateButtonsArrow } from './candidateButtonsArrow.interface'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'

const Component: React.FC<ICandidateButtonsArrow> = ({ onClickArrowLeft, onClickArrowRight, text }) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('candidateButtonsArrow__navigation')}>
      <div onClick={() => onClickArrowLeft?.()}>
        <IconItem icon={ArrowLeft2} />
      </div>
      <div className={cx('candidateButtonsArrow__navigation--center')}>{text}</div>
      <div onClick={() => onClickArrowRight?.()}>
        <IconItem icon={ArrowRight2} />
      </div>
    </div>
  )
}
/**
 *  Molecule UI component of Candidate Navigation Bar
 */
export const CandidateButtonsArrow = Component
