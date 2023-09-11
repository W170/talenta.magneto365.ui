import React from 'react'
import { IconItem } from '../Icon'
import { ISaveButton } from './SaveButton.interface'
import styles from './SaveButton.module.scss'
import { ArchiveAdd, ArchiveRemove } from '@constants/icons.constants'

const Component: React.FC<ISaveButton> = ({ isSaved, onClick }) => {
  return (
    <div className={styles['magneto-ui-save-button']}>
      <button type="button" onClick={onClick}>
        <IconItem hover={true} size={20} icon={isSaved ? ArchiveRemove : ArchiveAdd} />
      </button>
    </div>
  )
}

/**
 * UI Atom Component of Save Button
 */

export const SaveButton = Component
