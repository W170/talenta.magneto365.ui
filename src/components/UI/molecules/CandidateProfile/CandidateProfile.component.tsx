import { Avatar } from '../../atoms/Avatar/Avatar.component'
import { classNames } from '@shared/utils/common'
import React, { useEffect, useState } from 'react'
import { ICandidateProfile } from './CandidateProfile.interface'
import styles from './CandidateProfile.module.scss'
import { ArrowDownGreen } from '@constants/icons.constants'
import { IconItem } from '../../atoms/Icon'
import { CandidateProfileQuickAccess } from './children/CandidateProfileQuickAccess'
import { CandidateProfileBasic } from './children/CandidateProfileBasic'
import { RatingBadge } from '../../atoms/RatingBadge/RatingBadge.component'
import { ExpandableInfo } from '@components/UI/molecules'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfile> = ({ data, details, className, expandableInfoProps, expandable }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (expandable !== undefined) {
      setIsOpen(expandable)
    }
  }, [expandable])

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState)
  }
  const quickAccessDetails = details.filter((data) => data.type === 'quick_access')
  const basicDetails = details.filter((data) => data.type === 'basic')

  return (
    <div className={cx('magneto-ui-candidate-profile')}>
      <div className={cx('magneto-ui-candidate-profile__container', className)}>
        <div
          className={cx('magneto-ui-candidate-profile__container-header', {
            'magneto-ui-candidate-profile__container-header--open': isOpen
          })}
        >
          <div className={cx('magneto-ui-candidate-profile__container-header__user')}>
            <div className={cx('magneto-ui-candidate-profile__container-header__avatar')}>
              <div className={cx('magneto-ui-candidate-profile__container-header__avatar-logo')}>
                <Avatar userImage={data?.img} />
              </div>
              <div className={cx('magneto-ui-candidate-profile__container-header__avatar-rating')}>
                <RatingBadge score={data?.score || '4.5'} />
              </div>
            </div>

            <div className={cx('magneto-ui-candidate-profile__container-header__user-title')}>
              <p>{data?.last_updated}</p>
              <h3>{data?.name}</h3>
              <h3>{data?.lastname}</h3>
              <h4>{data?.role}</h4>
            </div>
          </div>
          <div
            className={cx('magneto-ui-candidate-profile__container-header__button', {
              'magneto-ui-candidate-profile__container-header__button--open': isOpen
            })}
            onClick={handleMenuToggle}
          >
            <IconItem
              icon={ArrowDownGreen}
              hover={false}
              className={cx('magneto-ui-candidate-profile__container-header__button-icon')}
            />
          </div>
        </div>
        {isOpen && (
          <div className={cx('magneto-ui-candidate-profile__container-dropdown')}>
            {!expandableInfoProps && quickAccessDetails.length > 0 && (
              <CandidateProfileQuickAccess details={quickAccessDetails} />
            )}
            {expandableInfoProps && <ExpandableInfo {...expandableInfoProps} />}
            {basicDetails.length > 0 && <CandidateProfileBasic details={basicDetails} />}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Molecule UI
 */
export const CandidateProfile = Component
