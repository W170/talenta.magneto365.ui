import React from 'react'
import { ICandidateNavStepProps } from './CandidateNavStep.interface'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'
import styles from './CandidateNavStep.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'

const cs = classNames.bind(styles)

const Component: React.FC<ICandidateNavStepProps> = ({ children, onChange, count }) => {
  const handleNext = () => {
    if (onChange && count !== undefined) {
      onChange(count + 1)
    }
  }

  const handlePrevious = () => {
    if (onChange && count !== undefined) {
      onChange(count - 1)
    }
  }

  return (
    <div className={cs('magneto-ui-candidate-nav-step')}>
      <button className={cs('magneto-ui-candidate-nav-step__button')} onClick={handlePrevious}>
        <IconItem size={20} icon={ArrowLeft2} />
      </button>
      {children}
      <button className={cs('magneto-ui-candidate-nav-step__button')} onClick={handleNext}>
        <IconItem size={20} icon={ArrowRight2} />
      </button>
    </div>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavStep = Component
