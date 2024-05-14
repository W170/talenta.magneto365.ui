import React, { useCallback, useEffect, useState, useRef, FC, useMemo } from 'react'
import { IMultiRangeSlider } from './multiRangeSlider.interface'
import styles from './multiRangeSlider.module.scss'

export const MultiRangeSlider: FC<IMultiRangeSlider> = ({
  min,
  max,
  currentMin,
  currentMax,
  showValues,
  onChange,
  currency,
  steps = 0,
  size = 260,
  defaultMin,
  defaultMax
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)

  useEffect(() => {
    if (currentMin) {
      setMinVal(currentMin)
    }
  }, [currentMin])

  useEffect(() => {
    if (defaultMin) {
      setMinVal(defaultMin)
    }
  }, [defaultMin])

  useEffect(() => {
    if (defaultMax) {
      setMaxVal(defaultMax)
    }
  }, [defaultMax])

  useEffect(() => {
    if (currentMax) {
      setMaxVal(currentMax)
    }
  }, [currentMax])

  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const range = useRef<HTMLDivElement>(null)

  const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  const hasCurrency = useMemo(() => {
    if (currency) {
      return `${currency.code}${minVal.toLocaleString()} ${currency.to} `
    }
    return minVal.toLocaleString()
  }, [currency, minVal])

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (range.current) {
        range.current.style.left = `${minPercent}%`
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  const handleMouseUpValues = useCallback(() => {
    onChange({ min: minVal, max: maxVal })
  }, [minVal, maxVal, onChange])

  return (
    <div className={styles.container}>
      <input
        style={{ width: size }}
        type="range"
        min={min}
        max={max}
        step={steps}
        value={minVal}
        ref={minValRef}
        onMouseUp={handleMouseUpValues}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1)
          setMinVal(value)
          event.target.value = value.toString()
        }}
        className={`
          ${styles.thumb} 
          ${styles.zIndex_3}  
          ${minVal > max - 100 ? styles.zIndex_5 : ''}
        `}
      />
      <input
        type="range"
        style={{ width: size }}
        min={min}
        max={max}
        step={steps}
        value={maxVal}
        ref={maxValRef}
        onMouseUp={handleMouseUpValues}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1)
          setMaxVal(value)
          event.target.value = value.toString()
        }}
        className={`${styles.thumb} ${styles.zIndex_4}`}
      />

      <div style={{ width: size }} className={styles.slider}>
        <div className={styles.track} />
        <div ref={range} className={styles.range} />
        {showValues && (
          <div className={styles.values}>
            <div className={styles.left_value}>{hasCurrency}</div>
            <div className={styles.right_value}>{maxVal.toLocaleString()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

MultiRangeSlider.defaultProps = {
  showValues: true
}
