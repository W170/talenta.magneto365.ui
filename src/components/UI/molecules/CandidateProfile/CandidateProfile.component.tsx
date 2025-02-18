import React, { useEffect, useState, useMemo } from 'react'
import { CandidateProfileQuickAccess } from './children/CandidateProfileQuickAccess'
import { CandidateProfileDetails } from './children/CandidateProfileDetails'
import { Avatar, RatingBadge, IconItem } from '@components/UI/atoms'
import { ICandidateProfile } from './CandidateProfile.interface'
import { ArrowDownGreen } from '@constants/icons.constants'
import { FONT_STYLES } from './CandidateProfile.constanst'
import { ExpandableInfo } from '@components/UI/molecules'
import styles from './CandidateProfile.module.scss'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfile> = ({ data, details, className, expandableInfoProps, expandable }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const quickAccessDetails = useMemo(() => details.filter((data) => data.type === 'quick_access'), [details])

  const basicDetails = useMemo(() => details.filter((data) => data.type === 'details'), [details])

  useEffect(() => {
    if (expandable !== undefined) {
      setIsOpen(expandable)
    }
  }, [expandable])

  return (
    <article className={cx('magneto-ui-candidate-profile')}>
      <section className={cx('magneto-ui-candidate-profile__container', className)}>
        <header
          className={cx('magneto-ui-candidate-profile__header', {
            'magneto-ui-candidate-profile__header--open': isOpen
          })}
        >
          <div className={cx('magneto-ui-candidate-profile__user')}>
            <div className={cx('magneto-ui-candidate-profile__avatar')}>
              <div className={cx('magneto-ui-candidate-profile__avatar-logo')}>
                <Avatar userImage={data?.img} />
              </div>
              <div className={cx('magneto-ui-candidate-profile__avatar-rating')}>
                <RatingBadge score={data?.score || '4.5'} />
              </div>
            </div>
            <div className={cx('magneto-ui-candidate-profile__user-title')}>
              {data?.last_updated && <p className={cx(...FONT_STYLES.lastUpdated)}>{data?.last_updated}</p>}
              {data?.name && <h3 className={cx(...FONT_STYLES.name)}>{data?.name}</h3>}
              {data?.lastname && <h3 className={cx(...FONT_STYLES.lastName)}>{data?.lastname}</h3>}
              {data?.role && <h4 className={cx(...FONT_STYLES.role)}>{data?.role}</h4>}
            </div>
          </div>
          <button
            className={cx('magneto-ui-candidate-profile__toggler', {
              'magneto-ui-candidate-profile__toggler--open': isOpen
            })}
            onClick={handleMenuToggle}
          >
            <IconItem icon={ArrowDownGreen} hover={false} />
          </button>
        </header>
        <footer
          className={cx('magneto-ui-candidate-profile__details', {
            'magneto-ui-candidate-profile__details--visible': isOpen
          })}
        >
          <div
            className={cx('magneto-ui-candidate-profile__details-container', {
              'magneto-ui-candidate-profile__details-container--visible': isOpen
            })}
          >
            <div
              className={cx('magneto-ui-candidate-profile__details-content', {
                'magneto-ui-candidate-profile__details-content--visible': isOpen
              })}
            >
              {!expandableInfoProps && quickAccessDetails.length > 0 && (
                <CandidateProfileQuickAccess details={quickAccessDetails} />
              )}
              {expandableInfoProps && <ExpandableInfo variant="blue" {...expandableInfoProps} />}
              {basicDetails.length > 0 && <CandidateProfileDetails details={basicDetails} />}
            </div>
          </div>
        </footer>
      </section>
    </article>
  )
}

/**
 * Molecule UI component of candidate profile
 */
export const CandidateProfile = Component
