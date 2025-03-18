import React, { useCallback } from 'react'
import { TCandidateProfileToggler } from './CandidateProfileToggler.interface'
import { ArrowDownGreen } from '@constants/icons.constants'
import styles from './CandidateProfileToggler.module.scss'
import { IconItem, Collapse } from '@components/UI/atoms'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileToggler> = ({ className, onClick, ...props }) => {
  const { open, onChangeOpen } = Collapse.useCollapse()

  const handleOnClick = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(evt)
      onChangeOpen(!open)
    },
    [open, onChangeOpen, onClick]
  )

  return (
    <Collapse.Toggler
      {...props}
      className={cx('magneto-ui-candidate-profile-toggler', className, {
        'magneto-ui-candidate-profile-toggler--open': open
      })}
      onClick={handleOnClick}
    >
      <IconItem icon={ArrowDownGreen} hover={false} />
    </Collapse.Toggler>
  )
}

/**
 * Molecule UI component child of candidate profile
 */
export const CandidateProfileToggler = Component
