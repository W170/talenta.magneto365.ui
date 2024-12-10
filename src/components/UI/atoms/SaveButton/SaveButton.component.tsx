import React from 'react'
import { IconItem } from '../Icon'
import { ISaveButton } from './SaveButton.interface'
import styles from './SaveButton.module.scss'
import { ArchiveAdd, ArchiveRemove } from '@constants/icons.constants'

const Component: React.FC<ISaveButton> = ({ isAuthenticated, isSaved, buttonText, buttonTitle, addHover, onClick }) => {
  return isAuthenticated ? (
    <button
      className={`${styles['magneto-ui-save-button']} ${addHover && styles['hover-effect']}`}
      type="button"
      onClick={onClick}
      aria-label={buttonTitle}
    >
      <div className={styles['button-content']}>
        <IconItem size={20} icon={isSaved ? ArchiveRemove : ArchiveAdd} hover={addHover} />
        {buttonText && <p className={styles['magneto-ui-save-button__mobile-text']}>{buttonText}</p>}
      </div>
    </button>
  ) : null
}

/**
 * UI Atom Component of Save Button
 */

export const SaveButton = Component
