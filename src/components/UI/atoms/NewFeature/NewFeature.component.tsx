import React, { useMemo } from 'react'
import { IconItem, Typography } from '..'
import { classNames } from '@shared/utils/common'
import { StarYellow } from '@constants/icons.constants'
import { checkFeatureExpiration } from '@shared/utils/NewFeature/checkFeatureExpiration.util'
import { INewFeature } from './NewFeature.interface'
import styles from './NewFeature.module.scss'

const cx = classNames.bind(styles)

export const NewFeature: React.FC<INewFeature> = ({ feature, classNames, children, onFail, ...rest }) => {
  const { expired, message } = useMemo(() => {
    try {
      return checkFeatureExpiration(feature)
    } catch (e) {
      return { expired: false, message: e as string }
    }
  }, [feature])

  if (message) {
    onFail?.(message)
    return null
  }

  if (expired) return null

  return (
    <span {...rest} className={cx('new-feature', rest.className)}>
      <IconItem icon={StarYellow} size={18} alt="Star" className={cx('new-feature__icon', classNames?.icon)} />
      <Typography.Text className={classNames?.typography} weight="black" color="grey-50" size="md">
        {children}
      </Typography.Text>
    </span>
  )
}
