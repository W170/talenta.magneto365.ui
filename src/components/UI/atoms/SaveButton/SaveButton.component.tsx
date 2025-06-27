import React from 'react'
import { IconItem } from '../Icon'
import { ISaveButton } from './SaveButton.interface'
import styles from './SaveButton.module.scss'
import { ArchiveAdd, ArchiveRemove } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<ISaveButton> = ({
  isAuthenticated,
  isSaved,
  buttonText,
  buttonTitle,
  addHover,
  onClick,
  variant = 'default'
}) => {
  const isDefaultVariant = variant === 'default'

  return isAuthenticated ? (
    <button
      className={cx('magneto-ui-save-button', { 'hover-effect': addHover, 'detailed-variant': variant === 'detailed' })}
      type="button"
      onClick={onClick}
      aria-label={buttonTitle}
    >
      <div className={cx('button-content')}>
        <IconItem size={isDefaultVariant ? 20 : 16} icon={isSaved ? ArchiveRemove : ArchiveAdd} hover={addHover} />
        {buttonText && !isDefaultVariant && <p className={cx('magneto-ui-save-button__mobile-text')}>{buttonText}</p>}
      </div>
    </button>
  ) : null
}

/**
 * UI Atom Component of Save Button
 */

export const SaveButton = Component
