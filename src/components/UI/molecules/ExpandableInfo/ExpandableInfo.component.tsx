import React, { useMemo } from 'react'
import { ExpandableInfoAction, ExpandableInfoMessage, ExpandableInfoPopover, ExpandableInfoModal } from './children'
import { IExpandableInfoProps, EExpandableInfoSize } from './ExpandableInfo.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import { useMediaQuery } from '@components/hooks'
import styles from './ExpandableInfo.module.scss'

const Component: React.FC<IExpandableInfoProps> = ({
  actions,
  details,
  floating,
  message,
  prefixIcon,
  size = 'large',
  suffixIcon,
  summary,
  title,
  variant = 'white'
}) => {
  const togglerProps = useMemo(
    () => ({
      details,
      title,
      summary,
      variant,
      size,
      prefixIcon,
      suffixIcon
    }),
    [details, title, summary, variant, size, prefixIcon, suffixIcon]
  )

  const container = useMediaQuery(<ExpandableInfoPopover details={details} toggler={togglerProps} />, {
    sm: <ExpandableInfoModal details={details} toggler={togglerProps} />
  })

  return (
    <div className={CNM.get({ styles, cls: ['expandable-info'] })}>
      <div
        className={CNM.get({
          styles,
          cls: [
            'expandable-info__container',
            `expandable-info__container--${variant}`,
            `expandable-info__container--${size}`,
            floating && 'expandable-info__container--floating'
          ]
        })}
      >
        {container}
        {size === EExpandableInfoSize.LARGE && (
          <React.Fragment>
            {actions && actions?.length > 0 && (
              <div className={CNM.get({ styles, cls: ['expandable-info__actions'] })}>
                {actions?.map((action) => action && <ExpandableInfoAction key={action.title} {...action} />)}
              </div>
            )}
            <ExpandableInfoMessage variant={variant} {...message} />
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

/**
 * Molecule UI component for expandable info
 */
export const ExpandableInfo = Component
