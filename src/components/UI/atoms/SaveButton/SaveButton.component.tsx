import React from 'react'
import { IconItem } from '../Icon'
import { ISaveButton } from './SaveButton.interface'
import styles from './SaveButton.module.scss'
import { ArchiveAdd, ArchiveRemove } from '@constants/icons.constants'

const Component: React.FC<ISaveButton> = ({ isAuthenticated, isSaved, buttonText, addHover, onClick }) => {
  return isAuthenticated ? (
    <div className={styles['magneto-ui-save-button']}>
      <button type="button" onClick={onClick}>
        <IconItem hover={addHover} size={20} icon={isSaved ? ArchiveRemove : ArchiveAdd} />
      </button>
      {buttonText && <p className={styles['magneto-ui-save-button__mobile-text']}>{buttonText}</p>}
    </div>
  ) : null
}

/**
 * UI Atom Component of Save Button
 */

export const SaveButton = Component
