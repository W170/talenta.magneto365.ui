import React from 'react'
import { Button, Option, Options, Step } from './children'
import { TCandidateNav } from './CandidateNav.interface'
import * as context from './CandidateNav.context'
import { classNames } from '@shared/utils/common'
import styles from './CandidateNav.module.scss'

const cs = classNames.bind(styles)

const Component: React.FC<TCandidateNav> = ({ children, className, ...props }) => {
  return (
    <context.Provider>
      <div className={cs('magneto-ui-candidate-nav', className)} {...props}>
        {children}
      </div>
    </context.Provider>
  )
}

/**
 *  Molecule UI component of Candidate Nav
 */
export const CandidateNav = Object.assign(Component, {
  Button,
  Option,
  Options,
  Step,
  ...context
})
