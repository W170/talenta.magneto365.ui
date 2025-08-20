import React, { useState } from 'react'
import { IconItem, SaveButton, ShareButton } from '../../atoms'
import { IActions, IShareLinksActions } from './Actions.interface'
import styles from './Actions.module.scss'
import { ShareIcons } from '@constants/vacancies.constants'
import { ArrowLeft2, Share } from '../../../../constants/icons.constants'

const Component: React.FC<IActions> = ({
  ActionsAnchorIcons,
  ActionsAnchorLinks,
  ActionAnchorText,
  ActionsHeader,
  externalButtonChild,
  saveButtonProps,
  shareButtonProps,
  copyButtonProps,
  offerCompanyName,
  backText,
  isApplied
}) => {
  const [component, setComponent] = useState<React.ReactElement>()

  const actionsLinkList = ActionsAnchorIcons?.map((_, index: number) => ({
    Icon: ActionsAnchorIcons?.[index],
    text: ActionAnchorText?.[index],
    url: ActionsAnchorLinks?.[index]
  }))

  const handleBack = () => {
    setComponent(undefined)
  }

  if (component) return component

  return (
    <div className={styles['magneto-ui-actions']}>
      <div id={styles['magneto-ui__external-child']}>{!isApplied && externalButtonChild}</div>
      <SaveButton {...saveButtonProps} />
      <button
        className={styles['magneto-ui-actions__button']}
        aria-label={shareButtonProps.title}
        onClick={() =>
          setComponent(
            <Actions.ShareLinks
              offerCompanyName={offerCompanyName}
              shareButtonProps={copyButtonProps}
              ActionsHeader={ActionsHeader}
              backText={backText}
              onBack={handleBack}
            />
          )
        }
      >
        <IconItem size={20} icon={Share} />
        {shareButtonProps.content}
      </button>
      {actionsLinkList?.map(({ url, text, Icon }, index: number) => (
        <a className={styles['magneto-ui-actions__link']} key={index} href={url} target="_blank" rel="noreferrer">
          <IconItem hover={false} size={20} icon={Icon} />
          <p key={index}>{text}</p>
        </a>
      ))}
      <div className={styles['magneto-ui-actions__header']}>
        <p className={styles['magneto-ui-actions__header-title']}>{ActionsHeader}</p>
        {offerCompanyName ? <p className={styles['magneto-ui-actions__header-subtitle']}>{offerCompanyName}</p> : null}
      </div>
    </div>
  )
}

const ShareLinksAction: React.FC<IShareLinksActions> = ({
  onBack,
  shareButtonProps: { shareLinks = [], ...shareProps },
  ActionsHeader,
  offerCompanyName,
  backText
}) => {
  return (
    <div className={styles['magneto-ui-actions']}>
      <ShareButton className={styles['magneto-ui-actions__share']} {...shareProps.shareButtonProps} />
      {shareLinks.map(({ title, ariaLabel, href, icon, name }, index) => (
        <a
          key={`${title}-${index}`}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
          href={href}
          className={[styles['magneto-ui-actions__link'], styles['magneto-ui-actions__link--no-decorator']].join(' ')}
        >
          <IconItem size={18} icon={name ? ShareIcons[name].icon : icon} />
          <span>{title}</span>
        </a>
      ))}
      <div className={styles['magneto-ui-actions__header']}>
        <p className={styles['magneto-ui-actions__header-title']}>{ActionsHeader}</p>
        {offerCompanyName ? <p className={styles['magneto-ui-actions__header-subtitle']}>{offerCompanyName}</p> : null}
      </div>
      <div className={styles['magneto-ui-actions__back']}>
        <button className={styles['magneto-ui-actions__button']} onClick={() => onBack()}>
          <IconItem size={20} icon={ArrowLeft2} />
        </button>
        {backText}
      </div>
    </div>
  )
}

/**
 * UI Molecule componet of Actions
 */

export const Actions = Object.assign(Component, { ShareLinks: ShareLinksAction })
