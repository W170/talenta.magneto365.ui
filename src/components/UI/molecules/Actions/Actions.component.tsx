import React from 'react'
import { IconItem } from '@components/UI/atoms'
import { IActions } from './Actions.interface'
import styles from './Actions.module.scss'
import { SaveButton } from '@components/UI/atoms/SaveButton'

const Component: React.FC<IActions> = ({
  ActionsAnchorIcons,
  ActionsAnchorLinks,
  ActionAnchorText,
  ActionsHeader,
  externalButtonChild,
  externalChild,
  saveButtonProps
}) => {
  const actionsAnchorTarget = ['_blank', '_self']

  const actionsLinkList = ActionsAnchorIcons?.map((_, index: number) => ({
    Icon: ActionsAnchorIcons?.[index],
    text: ActionAnchorText?.[index],
    url: ActionsAnchorLinks?.[index],
    target: actionsAnchorTarget?.[index]
  }))

  return (
    <div className={styles['magneto-ui-actions']}>
      <div id={styles['my-custom-button-wrapper']}> {externalButtonChild}</div>
      <SaveButton {...saveButtonProps} />
      {externalChild}
      {actionsLinkList?.map(({ url, text, target, Icon }, index: number) => (
        <a className={styles['magneto-ui-actions__link']} key={index} href={url} target={target} rel="">
          <IconItem hover={true} size={20} icon={Icon} />
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
