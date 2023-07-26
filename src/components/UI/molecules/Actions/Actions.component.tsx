import React from 'react'
import { IconItem, MainButton } from '@components/UI/atoms'
import { IActions } from './Actions.interface'
import styles from './Actions.module.scss'

const Component: React.FC<IActions> = ({
  ActionsButtonIcons,
  ActionsButtonEvents,
  ActionButtonText,
  ActionsAnchorIcons,
  ActionsAnchorLinks,
  ActionAnchorText,
  ActionsHeader,
  ButtonText,
  onHandleClick
}) => {
  const actionsButtonList = ActionsButtonIcons?.map((_, index: number) => ({
    Icon: ActionsButtonIcons?.[index],
    text: ActionButtonText?.[index],
    onClick: ActionsButtonEvents?.[index]
  }))

  const actionsLinkList = ActionsAnchorIcons?.map((_, index: number) => ({
    Icon: ActionsAnchorIcons?.[index],
    text: ActionAnchorText?.[index],
    url: ActionsAnchorLinks?.[index],
    target: ''
  }))

  return (
    <div className={styles.ActionsComponent}>
      <MainButton
        className={styles['ApplyButton']}
        buttonType="button"
        buttonSize="full"
        buttonText={ButtonText}
        onClick={onHandleClick}
      />
      {actionsButtonList?.map(({ Icon, text, onClick }, index: number) => (
        <button key={index} type="button" onClick={onClick}>
          <IconItem hover={true} size={20} Icon={Icon} />
          <p key={index}>{text}</p>
        </button>
      ))}
      {actionsLinkList?.map(({ url, text, target, Icon }, index: number) => (
        <a className={styles['IconWrapper']} key={index} href={url} target={target} rel="">
          <IconItem hover={true} size={20} Icon={Icon} />
          <p key={index}>{text}</p>
        </a>
      ))}
      <h2>{ActionsHeader}</h2>
    </div>
  )
}

/**
 * UI Molecule componet of Actions
 */

export const Actions = Component
