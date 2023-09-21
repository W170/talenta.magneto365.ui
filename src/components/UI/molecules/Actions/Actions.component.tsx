import React from 'react'
import { IconItem, SaveButton, ShareButton } from '@components/UI/atoms'
import { IActions } from './Actions.interface'
import styles from './Actions.module.scss'

const Component: React.FC<IActions> = ({
  ActionsAnchorIcons,
  ActionsAnchorLinks,
  ActionAnchorText,
  ActionsHeader,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps
}) => {
  const actionsLinkList = ActionsAnchorIcons?.map((_, index: number) => ({
    Icon: ActionsAnchorIcons?.[index],
    text: ActionAnchorText?.[index],
    url: ActionsAnchorLinks?.[index]
  }))

  return (
    <div className={styles['magneto-ui-actions']}>
      <div id={styles['magneto-ui__external-child']}> {externalButtonChild} </div>
      <SaveButton {...saveButtonProps} />
      <ShareButton {...shareButtonProps} />
      {actionsLinkList?.map(({ url, text, Icon }, index: number) => (
        <a className={styles['magneto-ui-actions__link']} key={index} href={url} target="_blank" rel="noreferrer">
          <IconItem hover={false} size={20} icon={Icon} />
          <p key={index}>{text}</p>
        </a>
      ))}
      <h2 className={styles['magneto-ui-actions__header']}>{ActionsHeader}</h2>
    </div>
  )
}

/**
 * UI Molecule componet of Actions
 */

export const Actions = Component
