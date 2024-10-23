import React, { useCallback, useMemo } from 'react'
import { EXPANDABLE_INFO_ACTION_ICONS } from './ExpandableInfoAction.constants'
import { IExpandableInfoActionProps } from './ExpandableInfoAction.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './ExpandableInfoAction.module.scss'
import { IconItem } from '@components/UI/atoms'

const Component: React.FC<IExpandableInfoActionProps> = ({
  className,
  loading,
  onAction,
  prefixIcon,
  suffixIcon,
  title,
  variant = 'blue'
}) => {
  const isUrl = useMemo(() => onAction && typeof onAction === 'string', [onAction])

  const Component = useMemo(() => (isUrl ? 'a' : 'button'), [isUrl])

  const componentProps = useMemo(() => {
    const className = CNM.get({
      styles,
      cls: ['expandable-info-action__button', `expandable-info-action__button--${variant}`]
    })

    if (isUrl) return { className, href: onAction as string }

    return {
      className,
      onClick: onAction as React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> | undefined
    }
  }, [isUrl, onAction, variant])

  const icon = useCallback(
    (icon?: string | null) => {
      if (loading) {
        return EXPANDABLE_INFO_ACTION_ICONS.loading[variant]
      }
      if (icon) {
        if (Object.keys(EXPANDABLE_INFO_ACTION_ICONS).includes(icon)) {
          return EXPANDABLE_INFO_ACTION_ICONS[icon][variant]
        }
        return icon
      }
      return
    },
    [loading, variant]
  )

  return (
    <div className={CNM.get({ styles, cls: ['expandable-info-action', className] })}>
      <div className={CNM.get({ styles, cls: ['expandable-info-action__container'] })}>
        <Component {...componentProps}>
          {(prefixIcon || loading) && <IconItem size={18} {...prefixIcon} icon={icon(prefixIcon?.icon)} />}
          <span className={CNM.get({ styles, cls: ['expandable-info-action__title'] })}>{title}</span>
          {suffixIcon && <IconItem size={18} {...suffixIcon} icon={icon(suffixIcon.icon)} />}
        </Component>
      </div>
    </div>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoAction = Component
