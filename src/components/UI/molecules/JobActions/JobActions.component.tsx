import React from 'react'
import { useMediaQuery } from '@components/hooks'
import { IconItem, SaveButton } from '@components/UI/atoms'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'
import { SharePopover } from '../SharePopover'
import { Tooltip } from '../Tooltip'
import { classNames } from '@shared/utils/common'
import { Share } from '@constants/icons.constants'

const cx = classNames.bind(styles)

const Component: React.FC<IJobsActions> = ({
  actionsAnchorIcons,
  actionsAnchorLinks,
  actionsAnchorTitle,
  actionsAnchorText,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps,
  isApplied,
  isJobDetailPage = false,
  variant = 'default',
  className,
  externalChildClass
}) => {
  const isMobile = useMediaQuery(true, { md: false })

  const actionsLinkList = actionsAnchorIcons?.map((_, index) => ({
    icon: actionsAnchorIcons[index],
    url: actionsAnchorLinks?.[index],
    title: actionsAnchorTitle?.[index],
    text: actionsAnchorText?.[index]
  }))

  const filteredActionsLinkList = actionsLinkList?.filter((item) => item.url !== null && item.url !== undefined)

  const renderExternalButton = () => {
    if (isApplied) return null

    return (
      <div
        className={cx(externalChildClass, 'external-button-container', {
          'detailed-mode': variant === 'detailed'
        })}
      >
        {externalButtonChild}
      </div>
    )
  }

  const ActionItem = ({ url, title, icon, text }: { url: string; title: string; icon: string; text?: string }) => {
    const isVariantDetailed = variant === 'detailed'
    const content = (
      <a className={cx('icon-link')} href={url} target="_blank" rel="noreferrer" title={title}>
        <IconItem hover size={isVariantDetailed ? 16 : 20} icon={icon} />
        {variant === 'detailed' && text && <span className={cx('action-text')}>{text}</span>}
      </a>
    )

    return (
      <Tooltip title={title} position="bottom" visible={isMobile}>
        <div
          className={cx('action-item', {
            'with-text': variant === 'detailed',
            'icon-only': variant === 'default'
          })}
        >
          {content}
        </div>
      </Tooltip>
    )
  }

  return (
    <div
      className={cx('magneto-ui-job-actions', className, {
        'default-variant': variant === 'default',
        'job-detail-layout': isJobDetailPage,
        'variant-detailed': variant === 'detailed'
      })}
    >
      {renderExternalButton()}

      <div className={cx('actions-container', { 'job-detail-page': isJobDetailPage })}>
        {!isApplied && (
          <Tooltip title={saveButtonProps.buttonTitle || 'Guardar'} position="bottom" visible={isMobile}>
            <SaveButton {...saveButtonProps} />
          </Tooltip>
        )}

        <SharePopover {...shareButtonProps} iconPopover={Share} buttonText={""}/>

        {filteredActionsLinkList?.map(({ url, title, icon, text }) => (
          <ActionItem key={`${url}-${title}`} url={url} title={title} icon={icon} text={text} />
        ))}
      </div>
    </div>
  )
}

export const JobActions = Component
