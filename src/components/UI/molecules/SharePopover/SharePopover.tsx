import React, { useState } from 'react'
import { IconItem, Popover, ShareButton } from '../../atoms'
import style from './SharePopover.module.scss'
import { Share } from '../../../../constants/icons.constants'
import { ShareIcons } from '../../../../constants/vacancies.constants'
import { ISharePopover } from './SharePopover.interface'

const Component: React.FC<ISharePopover> = ({
  shareLinks = [],
  btnProps = {},
  classNameContent = '',
  classNameButton = '',
  ...rest
}) => {
  const [show, setShow] = useState(false)

  return (
    <Popover
      className={[style['popover'], !show ? style['popover--hidden'] : ''].join(' ')}
      positionX="right"
      positionY="bottom"
      show={show}
      widthBase={45}
      content={
        <ul className={[style['content'], classNameContent].join(' ')}>
          {shareLinks.map(({ title, href, ariaLabel, icon, name }, index) => (
            <li key={`${title}-${index}`}>
              <a
                title={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={ariaLabel}
                className={style['content__link']}
                onClick={() => setShow(false)}
              >
                <IconItem size={40} icon={name ? ShareIcons[name].icon : icon} />
                <span>{title}</span>
              </a>
            </li>
          ))}
          <li>
            <ShareButton
              {...rest}
              onCopySuccess={() => {
                rest.onCopySuccess()
              }}
            />
          </li>
        </ul>
      }
    >
      <button
        {...btnProps}
        className={[style['popover__btn'], classNameButton].join(' ')}
        onClick={() => setShow((show) => !show)}
        onBlur={() => setShow(false)}
      >
        <IconItem size={20} icon={Share} />
      </button>
    </Popover>
  )
}

Component.displayName = 'SharePopover'

export const SharePopover = Component
