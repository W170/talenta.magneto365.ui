import React, { FC, memo } from 'react'
import { IParagraph } from './Paragraph.interface'
import styles from './Paragraph.module.scss'

const Component: FC<IParagraph> = ({ paragraph }) => {
  return <p className={styles.content}>{paragraph}</p>
}

export const Paragraph = memo(Component)
