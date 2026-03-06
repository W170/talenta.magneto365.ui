import React, { useCallback, useMemo } from 'react'
import { EXPANDABLE_INFO_TOGGLER_ICONS } from './ExpandableInfoToggler.constants'
import { IExpandableInfoTogglerProps } from './ExpandableInfoToggler.interface'
import { ArrowDown2, ArrowDownWhite } from '@constants/icons.constants'
import { EExpandableInfoSize } from '../../ExpandableInfo.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './ExpandableInfoToggler.module.scss'
import { IconItem } from '@components/UI/atoms'

const Component: React.FC<IExpandableInfoTogglerProps> = ({
  details,
  onToggle,
  prefixIcon,
  size,
  suffixIcon,
  summary,
  title,
  variant = 'white'
}) => {
  const styleGenerator = useCallback(
    (base: (string | boolean)[]) =>
      CNM.get({
        styles,
        cls: [...base, `${base.at(0)}--${variant}`]
      }),
    [variant]
  )

  const icon = useCallback((icon?: string | null) => {
    if (icon) {
      if (Object.keys(EXPANDABLE_INFO_TOGGLER_ICONS).includes(icon)) {
        return EXPANDABLE_INFO_TOGGLER_ICONS[icon]
      }
      return icon
    }
    return
  }, [])

  const Component = useMemo(() => (details ? 'button' : 'div'), [details])

  const componentProps = useMemo(() => {
    const className = styleGenerator([
      'expandable-info-toggler__container',
      !details && 'expandable-info-toggler__container--no-details',
      `expandable-info-toggler__container--${size}`
    ])

    if (!details) return { className }

    return {
      className,
      onClick: () => onToggle()
    }
  }, [details, onToggle, size, styleGenerator])

  const baseSuffixIcon = useMemo(() => (variant === 'blue' ? ArrowDownWhite : ArrowDown2), [variant])

  return (
    <Component {...componentProps}>
      {prefixIcon && <IconItem size={16} {...prefixIcon} icon={icon(prefixIcon.icon)} />}
      <span className={styleGenerator(['expandable-info-toggler__text'])}>{title + ':'}</span>
      <div
        className={CNM.get({
          styles,
          cls: [
            'expandable-info-toggler__summary',
            (size === EExpandableInfoSize.SMALL || suffixIcon) && 'expandable-info-toggler__summary--small',
            size === EExpandableInfoSize.LARGE && (details || suffixIcon) && 'expandable-info-toggler__summary--large'
          ]
        })}
      >
        <span className={styleGenerator(['expandable-info-toggler__text', `expandable-info-toggler__text--${size}`])}>
          {summary}
        </span>
        {<IconItem icon={baseSuffixIcon} size={!suffixIcon ? 20 : 16} {...suffixIcon} />}
      </div>
    </Component>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoToggler = Component
