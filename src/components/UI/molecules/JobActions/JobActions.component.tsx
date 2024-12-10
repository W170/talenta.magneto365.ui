import React from 'react'
import { useMediaQuery } from '@components/hooks'
import { IconItem, SaveButton } from '@components/UI/atoms'
import { IJobsActions } from './JobActions.interface'
import styles from './JobActions.module.scss'
import { SharePopover } from '../SharePopover'
import { Tooltip } from '../Tooltip'

const Component: React.FC<IJobsActions> = ({
  actionsAnchorIcons,
  actionsAnchorLinks,
  actionsAnchorTitle,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps
}) => {
  const actionsLinkList = actionsAnchorIcons?.map((_, index: number) => ({
    icon: actionsAnchorIcons?.[index],
    url: actionsAnchorLinks?.[index],
    title: actionsAnchorTitle?.[index]
  }))

  const isMobile = useMediaQuery(true, { md: false })

  const ActionLink = ({ url, title, icon }: { url: string; title: string; icon: string }) => {
    const iconContent = (
      <a className={styles['magneto-ui-job-actions__icon-anchor']} href={url} target="_blank" rel="noreferrer">
        <IconItem hover={true} size={20} icon={icon} />
      </a>
    )

    return (
      <Tooltip title={title} position="bottom" hidden={isMobile}>
        {iconContent}
      </Tooltip>
    )
  }

  const filteredActionsLinkList = actionsLinkList?.filter((item) => item.url !== null && item.url !== undefined)

  return (
    <div className={styles['magneto-ui-job-actions']}>
      <div id={styles['magneto-ui__external-child']}>{externalButtonChild}</div>
      <div className={styles['magneto-ui-job-actions__buttons-wrapper']}>
        <Tooltip title={saveButtonProps.buttonTitle || 'Guardar'} position="bottom" hidden={isMobile}>
          <SaveButton {...saveButtonProps} />
        </Tooltip>
        <SharePopover {...shareButtonProps} />
        {filteredActionsLinkList?.map(({ url, title, icon }) => (
          <div className={styles['magneto-ui-job-actions__icon-wrapper']} key={`${url}-JobActions`}>
            <ActionLink url={url} title={title} icon={icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * UI Molecule Component for Jobs Actions
 */

export const JobActions = Component
