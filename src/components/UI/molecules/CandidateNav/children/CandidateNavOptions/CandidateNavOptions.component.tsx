import { classNames } from '@shared/utils/common'
import React from 'react'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavOptions.module.scss'
const cs = classNames.bind(styles)

const Component: React.FC = ({ children }) => {
  const { showOptions } = useCandidateNav()

  return (
    <div
      className={cs('magneto-ui-candidate-nav-options', {
        'magneto-ui-candidate-nav-options--visible': showOptions
      })}
    >
      <div
        className={cs('magneto-ui-candidate-nav-options__container', {
          'magneto-ui-candidate-nav-options__container--visible': showOptions
        })}
      >
        <div
          className={cs('magneto-ui-candidate-nav-options__content', {
            'magneto-ui-candidate-nav-options__content--visible': showOptions
          })}
        >
          <ul className={cs('magneto-ui-candidate-nav-options__list')}>{children}</ul>
        </div>
      </div>
    </div>
  )
}

export const CandidateNavOptions = Component
