import React, { useCallback, useMemo } from 'react'
import { BAR_LOADER_PREFIX as preffix } from './BarLoader.constants'
import CNM from '@utils/classNameManager/classNameManager.util'
import { IBardLoader } from './BarLoader.interface'
import styles from './BarLoader.module.scss'

const Component: React.FC<IBardLoader> = ({ className, color, percent }) => {
  const validateCompleted = useCallback((value?: number) => {
    if (!value) return 0

    const numValue = Number(value)

    if (isNaN(numValue) || numValue < 0) return 0
    if (numValue > 100) return 100

    return numValue
  }, [])

  const barColor = useMemo(() => ({ [`${preffix}-color`]: color }), [color])

  const barCompleted = useMemo(
    () => ({ [`${preffix}-completed`]: `${validateCompleted(percent)}%` }),
    [percent, validateCompleted]
  )

  return (
    <div className={CNM.get({ styles, cls: [className] })}>
      <div className={CNM.get({ styles, cls: ['bar-loader'] })} style={{ ...barColor, ...barCompleted }}>
        <div
          className={CNM.get({
            styles,
            cls: ['bar-loader__bar', percent !== undefined ? 'bar-loader__bar--completed' : 'bar-loader__bar--animated']
          })}
        />
      </div>
    </div>
  )
}

/**
 * UI Atom component of Bar Loader
 */
export const BarLoader = Component
