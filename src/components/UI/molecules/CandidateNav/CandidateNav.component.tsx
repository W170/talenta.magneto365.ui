import React from 'react'
import { ICandidateNav } from './CandidateNav.interface'
import * as context from './CandidateNav.context'
import { classNames } from '@shared/utils/common'
import styles from './CandidateNav.module.scss'
import * as children from './children'

const cs = classNames.bind(styles)

const Component: React.FC<ICandidateNav> = ({ children, className, onShow, ...props }) => {
  return (
    <context.Provider onShow={onShow}>
      <div className={cs('magneto-ui-candidate-nav', className)} {...props}>
        {children}
      </div>
    </context.Provider>
  )
}

/**
 *  Molecule UI component of Candidate Nav
 */
export const CandidateNav = Object.assign(Component, { ...children, ...context })
