import React from 'react'
import { IconItem } from '../Icon'
import { ISaveButton } from './SaveButton.interface'
import styles from './SaveButton.module.scss'
import { ArchiveAdd, ArchiveRemove } from '@constants/icons.constants'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component: React.FC<ISaveButton> = ({
  isSaved,
  buttonText,
  buttonTitle,
  addHover,
  onClick,
  isAuthenticated = false,
  iconSize = 20
}) => {
  return isAuthenticated ? (
    <button
      className={cx('magneto-ui-save-button', { 'hover-effect': addHover })}
      type="button"
      onClick={onClick}
      aria-label={buttonTitle}
    >
      <div className={cx('button-content')}>
        <IconItem size={iconSize} icon={isSaved ? ArchiveRemove : ArchiveAdd} hover={addHover} />
        {buttonText && <p className={cx('magneto-ui-save-button__mobile-text')}>{buttonText}</p>}
      </div>
    </button>
  ) : null
}

/**
 * UI Atom Component of Save Button
 */

export const SaveButton = Component
