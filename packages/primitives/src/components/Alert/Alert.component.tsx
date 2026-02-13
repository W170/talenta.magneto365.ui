import React, { Fragment, useMemo } from 'react'
import { IAlert, ICustomText } from './Alert.interface'
import styles from './Alert.module.scss'
import { IconItem } from '../Icon'

// Internal TextCustom component for rendering custom text
const TextCustom: React.FC<{ text?: string; customText?: ICustomText[]; className?: string }> = ({
  text,
  customText,
  className
}) => {
  const textRender = useMemo(() => {
    return customText?.length ? (
      <span className={className}>
        {customText.map(({ value, fontWeight, lineBreak = false }, index) => (
          <Fragment key={`custom-text-${index}`}>
            <span className={styles[`magneto-ui-text-${fontWeight}`]}>{value}</span>
            {lineBreak && <br />}
          </Fragment>
        ))}
      </span>
    ) : (
      <p className={className}>{text}</p>
    )
  }, [text, customText, className])

  return <>{textRender}</>
}

// Default alert icons - these would typically come from an icon library
const alertIcons: Record<string, string> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error'
}

const closeIcon = 'close'

const Component: React.FC<IAlert> = ({
  text = '',
  type,
  customText,
  border = false,
  size,
  onClose,
  className = '',
  extraButton
}) => {
  const iconByType = useMemo(() => alertIcons[type], [type])

  const alertClasses = [
    styles['magneto-ui-alert'],
    className,
    border && styles[`magneto-ui-${type}--with-border`],
    styles[`magneto-ui-${type}`]
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={alertClasses} style={{ width: size }}>
      <IconItem className={styles['magneto-ui-icon']} icon={iconByType} alt={type} />
      <TextCustom text={text} customText={customText} className={styles['magneto-ui-text']} />
      {onClose && (
        <button className={styles['magneto-ui-close-action']} type="button" onClick={onClose}>
          <IconItem icon={closeIcon} alt={type} />
        </button>
      )}
      {extraButton}
    </div>
  )
}

export const Alert = Component
