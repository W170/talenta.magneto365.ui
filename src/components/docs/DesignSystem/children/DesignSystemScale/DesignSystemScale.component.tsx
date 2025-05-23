import React from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/tokens/data/scale.json'
import pStyles from '../../DesignSystem.module.scss'
import { resolveValue, flattenTokens, evaluateCalc } from '../../DesignSystem.constant'

const pCx = classNames.bind(pStyles)

const Component: React.FC = () => {
  return (
    <table className={pCx('magneto-ui-design-system__table')}>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {flattenTokens(data.values).map(([key, value]) => {
          const resolved = resolveValue(value)

          return (
            <tr key={key}>
              <td>{`scale-${key}`}</td>
              <td>{resolved !== value ? (resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved) : value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const DesignSystemScale = Component
