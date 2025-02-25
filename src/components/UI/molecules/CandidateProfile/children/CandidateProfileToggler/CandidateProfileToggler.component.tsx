import React, { useCallback } from 'react'
import { TCandidateProfileToggler } from './CandidateProfileToggler.interface'
import { useCandidateProfile } from '../../CandidateProfile.context'
import { ArrowDownGreen } from '@constants/icons.constants'
import styles from './CandidateProfileToggler.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileToggler> = ({ className, onClick, ...props }) => {
  const { isOpen, onChangeOpen } = useCandidateProfile()

  const handleOnClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) onClick(evt)
      onChangeOpen(!isOpen)
    },
    [isOpen, onChangeOpen, onClick]
  )

  return (
    <button
      {...props}
      className={cx('magneto-ui-candidate-profile-toggler', className, {
        'magneto-ui-candidate-profile-toggler--open': isOpen
      })}
      onClick={handleOnClick}
    >
      <IconItem icon={ArrowDownGreen} hover={false} />
    </button>
  )
}

export const CandidateProfileToggler = Component
