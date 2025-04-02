import React from 'react'
import { TCandidateProfile } from './CandidateProfile.interface'
import styles from './CandidateProfile.module.scss'
import { classNames } from '@shared/utils/common'
import { Collapse } from '@components/UI/atoms'
import * as children from './children'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfile> = ({
  children,
  className,
  defaultOpen = true,
  onChangeOpen,
  open,
  ...props
}) => {
  return (
    <Collapse.Provider defaultOpen={defaultOpen} open={open} onChangeOpen={onChangeOpen}>
      <article className={cx('magneto-ui-candidate-profile', className)} {...props}>
        {children}
      </article>
    </Collapse.Provider>
  )
}

/**
 * Molecule UI component of candidate profile
 */
export const CandidateProfile = Object.assign(Component, children)
