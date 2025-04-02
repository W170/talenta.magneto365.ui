import React, { useCallback } from 'react'
import { ICandidateNavButton } from './CandidateNavButton.interface'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavButton.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC<ICandidateNavButton> = ({ children, className, toggler, onClick, variant, ...props }) => {
  const { onChangeOpen } = useCandidateNav()

  const handlerOnClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      if (toggler) {
        evt.stopPropagation()
        onChangeOpen()
      }
      onClick?.(evt)
    },
    [toggler, onChangeOpen, onClick]
  )

  return (
    <button
      {...props}
      className={cs(
        'magneto-ui-candidate-nav-button',
        {
          [`magneto-ui-candidate-nav-button--${variant}`]: !!variant
        },
        className
      )}
      onClick={handlerOnClick}
    >
      {children}
    </button>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavButton = Component
