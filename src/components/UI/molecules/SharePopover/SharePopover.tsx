import React, { useState } from 'react'
import { IconItem, Popover, ShareButton } from '../../atoms'
import style from './SharePopover.module.scss'
import { ShareIcons } from '../../../../constants/vacancies.constants'
import { ISharePopover } from './SharePopover.interface'
import { Tooltip } from '../Tooltip'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(style)

const Component: React.FC<ISharePopover> = ({
  shareLinks = [],
  btnProps = {},
  classNameContent = '',
  classNameButton = '',
  buttonText,
  iconPopover,
  iconPopoverSize = 20,
  shareButtonProps
}) => {
  const [show, setShow] = useState(false)

  return (
    <Popover
      className={cx('popover', { 'popover--hidden': !show, 'popover--hover': shareButtonProps.addHover })}
      positionX="right"
      positionY="bottom"
      show={show}
      widthBase={45}
      content={
        <ul className={cx('content', classNameContent)}>
          {shareLinks.map(({ title, href, ariaLabel, icon, name }, index) => (
            <li key={`${title}-${index}`}>
              <a
                title={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={ariaLabel}
                className={cx('content__link')}
                onClick={() => setShow(false)}
              >
                <IconItem size={16} icon={name ? ShareIcons[name].icon : icon} />
                <span>{title}</span>
              </a>
            </li>
          ))}
          <li className={cx('content__share')}>
            <ShareButton
              {...shareButtonProps}
              onCopySuccess={() => {
                shareButtonProps.onCopySuccess()
              }}
            />
          </li>
        </ul>
      }
    >
      <Tooltip title={btnProps.title || 'Compartir'} position="bottom" visible={!show}>
        <button
          {...btnProps}
          title=""
          aria-label={btnProps.title}
          className={cx('popover__btn', classNameButton)}
          onClick={() => setShow((show) => !show)}
          onBlur={() => setShow(false)}
        >
          <IconItem size={iconPopoverSize} icon={iconPopover} />
          <span className={cx('popover__btn-text')}>{buttonText}</span>
        </button>
      </Tooltip>
    </Popover>
  )
}

Component.displayName = 'SharePopover'

export const SharePopover = Component
