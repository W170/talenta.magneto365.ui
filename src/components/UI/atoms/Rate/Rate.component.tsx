import React from 'react'
import style from './Rate.modules.scss'
import { IRate } from './Rate.interface'
import { classMUI } from '@constants/stories'

const Component: React.FC<IRate> = ({ score, numberRates = 5, setScore }) => {
  const ratesArray = new Array(numberRates).fill(false)

  const handleOnChange = (index: number) => {
    setScore(ratesArray.length - index)
  }
  return (
    <div className={`${style[`${classMUI}-rates`]}`}>
      <div className={`${style[`${classMUI}-rates__rate`]}`}>
        {ratesArray.map((item, index) => (
          <React.Fragment key={index + item}>
            <input
              type="radio"
              id={`rate-${index}`}
              name="rate"
              value={index}
              checked={score ? index + 1 <= score : undefined}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={`rate-${index}`} title="text" />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/**
 * UI Atom Component of Rate
 */

export const Rate = Component
