import React, { useCallback } from 'react'
import { TCandidateNavOption } from './CandidateNavOption.interface'
import { useCandidateNav } from '../../CandidateNav.context'
import styles from './CandidateNavOption.module.scss'
import { classNames } from '@shared/utils/common'

const cs = classNames.bind(styles)

const Component: React.FC<TCandidateNavOption> = ({ children, className, onClick, ...props }) => {
  const { onChangeOpen } = useCandidateNav()

  const handlerOnClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      onChangeOpen(false)
      onClick?.(evt)
    },
    [onClick, onChangeOpen]
  )

  return (
    <li className={cs('magneto-ui-candidate-nav-option')}>
      <button {...props} className={cs('magneto-ui-candidate-nav-option__button', className)} onClick={handlerOnClick}>
        {children}
      </button>
    </li>
  )
}

/**
 * Molecule UI component child of Candidate Nav
 */
export const CandidateNavOption = Component
