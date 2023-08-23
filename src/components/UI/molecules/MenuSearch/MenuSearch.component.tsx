import React, { FC, useCallback } from 'react'
import { IMenuSearch } from './MenuSearch.interface'
import styles from './MenuSearch.module.scss'

const MenuSearch: FC<IMenuSearch> = ({ children, content, show, handleOnBlur }) => {
  const onBlur = useCallback(() => {
    handleOnBlur && handleOnBlur()
  }, [handleOnBlur])

  return (
    <div className={styles['magneto-ui-menu-search']} onBlur={onBlur}>
      <div className={styles['magneto-ui-menu-search_container']}>
        {children}
        <div className={`${styles['magneto-ui-menu-search_content']} ${show && styles.open}`}>{content}</div>
      </div>
    </div>
  )
}

export default MenuSearch
