import React from 'react'
import { candidateProfileIcons, textStyle, FONT_STYLES } from '../../CandidateProfile.constanst'
import { TCandidateProfileDetails } from './CandidateProfileDetails.interface'
import styles from './CandidateProfileDetails.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'

const cx = classNames.bind(styles)

const Component: React.FC<TCandidateProfileDetails> = ({ details }) => {
  return (
    <div className={cx('magneto-ui-candidate-profile-details')}>
      {details.map((detail, detailIndex) => (
        <div key={detailIndex} className={cx('magneto-ui-candidate-profile-details__section')}>
          {detail.title && (
            <h4 className={textStyle(detail.title, FONT_STYLES.section.header)}>{detail.title.value}</h4>
          )}
          {detail.children.map((child, childIndex) => (
            <React.Fragment key={childIndex}>
              {child.children?.map((item, itemIndex) => (
                <div key={itemIndex} className={cx('magneto-ui-candidate-profile-details__item')}>
                  <IconItem
                    showDefaultFallback={false}
                    size={15}
                    {...item.prefixIcon}
                    icon={
                      item.prefixIcon?.icon && candidateProfileIcons[item.prefixIcon?.icon]
                        ? candidateProfileIcons[item.prefixIcon?.icon]
                        : item.prefixIcon?.icon
                    }
                  />
                  <span className={textStyle(item, FONT_STYLES.section.info.white)}>{item.value}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 *  Molecule UI child component of candidate profile
 */
export const CandidateProfileDetails = Component
