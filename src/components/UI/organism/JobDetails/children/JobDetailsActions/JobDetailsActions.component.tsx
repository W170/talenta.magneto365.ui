import React from 'react'
import { IJobDetailsActions } from './JobDetailsActions.interface'
import { ButtonLink } from '@components/UI/atoms'
import styles from './JobDetailsActions.module.scss'
import { classNames } from '@shared/utils/common'
import { Tooltip } from '@components/UI/molecules'
import { useMediaQuery } from '@components/hooks'

const cx = classNames.bind(styles)

export const JobDetailsActions: React.FC<IJobDetailsActions> = ({
  actionsLinkList,
  actionsRounded,
  externalButtonApply,
  className,
  children
}) => {
  const isMobile = useMediaQuery(true, { md: false })
  return (
    <section className={cx('actions', className)}>
      <section>{externalButtonApply}</section>
      <section className={cx('actions__children-others')}>
        {children}
        {actionsLinkList.map(({ link, text, icon, title }, i) => (
          <Tooltip title={title} key={`action-${title}-${i}`} position="bottom" visible={isMobile}>
            <ButtonLink
              buttonText={text}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={cx('actions__item', { 'actions__item--rounded': actionsRounded })}
              suffixIcon={icon}
              iconSize={14}
            />
          </Tooltip>
        ))}
      </section>
    </section>
  )
}
