import React from 'react'
import { IMainButton, MainButton } from '@components/UI/atoms'
import styles from './SearchButton.module.scss'

const Component: React.FC<IMainButton & { searchValue: string }> = ({ ...props }) => {
  return (
    <div className={styles['search-button']}>
      {props.searchValue && <div className={styles['search-button__badge']} />}
      <MainButton onClick={props.onClick} {...props} />
    </div>
  )
}

export const SearchButton = Component
