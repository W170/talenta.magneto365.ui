import React, { useState } from 'react'
import { ISwipeDowm } from './swipeDowm.interface'
import styles from './swipeDowm.module.scss'
import { classNames } from '@shared/utils/common'

const Component: React.FC<ISwipeDowm> = ({ onSwipeDown }) => {
  const [startY, setStartY] = useState<number | null>(null)

  const cx = classNames.bind(styles)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    const touch = e.touches[0]
    setStartY(touch.clientY)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (startY === null) return

    const touch = e.touches[0]
    const currentY = touch.clientY
    const diffY = currentY - startY

    if (diffY > 50) {
      if (onSwipeDown) {
        onSwipeDown()
      }
      setStartY(null)
    }
  }

  const handleTouchEnd = () => {
    setStartY(null)
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cx('swipeDowm')}
    ></div>
  )
}
/**
 * Molecule UI component of Candidate Navigation Bar
 */
export const SwipeDowm = Component
