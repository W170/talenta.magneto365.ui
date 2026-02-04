import React from 'react'
import { IDotsLoader } from './DotsLoader.interface'
import styles from './DotsLoader.module.scss'

const Component: React.FC<IDotsLoader> = ({ count = 3, color = '#000' }) => {
  return (
    <div className={styles['dots-loader']}>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={styles['dots-loader__dot']}
          style={{ animationDelay: `${index * 0.2}s`, backgroundColor: color }}
        />
      ))}
    </div>
  )
}

export const DotsLoader = Component
