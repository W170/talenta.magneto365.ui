import React from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/tokens/data/screen.json'
import pStyles from '../../DesignSystem.module.scss'
import styles from './DesignSystemScreen.module.scss'
import { resolveValue, flattenTokens, evaluateCalc, convertRemToPx } from '../../DesignSystem.constant'

const cx = classNames.bind(styles)
const pCx = classNames.bind(pStyles)

const Component: React.FC = () => {
  return (
    <table className={pCx('magneto-ui-design-system__table')}>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {flattenTokens(data.values).map(([key, value]) => {
          const resolved = resolveValue(value)
          const isResolved = resolved !== value
          const evaluated = resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved

          const leftValue = isResolved ? evaluated : value
          const rightValue = isResolved ? convertRemToPx(evaluated) : value

          return (
            <tr key={key}>
              <td>{`screen-${key}`}</td>
              <td>
                <div
                  className={pCx(
                    'magneto-ui-design-system__show-case',
                    leftValue !== rightValue
                      ? 'magneto-ui-design-system__show-case--double'
                      : 'magneto-ui-design-system__show-case--single'
                  )}
                >
                  <span>{leftValue}</span>
                  {leftValue !== rightValue && <span>{rightValue}</span>}
                </div>
              </td>
              <td>
                <div
                  className={`${cx(`magneto-ui-design-system-screen__example-${key}`)} ${pCx(
                    'magneto-ui-design-system__example-box',
                    'magneto-ui-design-system__example-box--pink',
                    'magneto-ui-design-system__example-box--base-size'
                  )}`}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const DesignSystemScreen = Component
