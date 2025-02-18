import React from 'react'
import { candidateProfileIcons, textStyle, FONT_STYLES } from '../../CandidateProfile.constanst'
import { ICandidateProfile } from '../../CandidateProfile.interface'
import styles from './CandidateProfileQuickAccess.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateProfile> = ({ details }) => {
  return (
    <div className={cx('magneto-ui-candidate-profile-quick-access')}>
      {details.map((detail, detailIndex) => (
        <div key={detailIndex} className={cx('magneto-ui-candidate-profile-quick-access__section')}>
          {detail.children.map((child, childIndex) => (
            <div key={childIndex} className={cx('magneto-ui-candidate-profile-quick-access__group')}>
              {child.children?.map((item, itemIndex) => (
                <div key={itemIndex} className={cx('magneto-ui-candidate-profile-quick-access__item')}>
                  <IconItem
                    showDefaultFallback={false}
                    size={13}
                    {...item.prefixIcon}
                    icon={
                      item.prefixIcon?.icon && candidateProfileIcons[item.prefixIcon?.icon]
                        ? candidateProfileIcons[item.prefixIcon?.icon]
                        : item.prefixIcon?.icon
                    }
                  />
                  <span className={textStyle(item, FONT_STYLES.quickAccess.title)}>{item?.data}</span>
                  <span className={textStyle(item, FONT_STYLES.quickAccess.info)}>{item.value}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 *  Molecule UI child component of candidate profile
 */
export const CandidateProfileQuickAccess = Component
