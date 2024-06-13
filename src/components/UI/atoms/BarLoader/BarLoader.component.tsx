import React from 'react'
import { IBardLoader } from './BarLoader.interface'
import { classMUI } from '../../../../constants/stories/common.constants'
import styles from './BarLoader.module.scss'

const Component: React.FC<IBardLoader> = ({ color }) => (
  <div className={styles[`${classMUI}-bar-loader`]}>
    <div style={{ backgroundColor: color || '#090467' }} className={styles[`${classMUI}-bar-loader__bar`]} />
  </div>
)

export const BarLoader = Component
