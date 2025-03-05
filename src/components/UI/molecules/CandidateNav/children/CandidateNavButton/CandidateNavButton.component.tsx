import { classNames } from '@shared/utils/common'
import React, { useCallback } from 'react'
import styles from './CandidateNavButton.module.scss'
import { useCandidateNav } from '../../CandidateNav.context'
import { ICandidateNavButton } from './CandidateNavButton.interface'

const cs = classNames.bind(styles)

const Component: React.FC<ICandidateNavButton> = ({ children, toggler, onClick, variant, ...props }) => {
  const { onChangeOpen } = useCandidateNav()
  const handlerOnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (toggler) {
        onChangeOpen()
      }
      if (onClick) {
        onClick(e)
      }
    },
    [toggler, onChangeOpen, onClick]
  )

  return (
    <button
      className={cs('magneto-ui-candidate-nav-button', {
        [`magneto-ui-candidate-nav-button--${variant}`]: !!variant
      })}
      {...props}
      onClick={handlerOnClick}
    >
      {children}
    </button>
  )
}

export const CandidateNavButton = Component
