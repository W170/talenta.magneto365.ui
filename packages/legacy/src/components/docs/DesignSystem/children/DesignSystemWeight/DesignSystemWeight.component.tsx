import React from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/tokens/data/weight.json'
import pStyles from '../../DesignSystem.module.scss'
import styles from './DesignSystemWeight.module.scss'
import { flattenTokens, resolveValue, evaluateCalc } from '../../DesignSystem.constant'

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

          return (
            <tr key={key}>
              <td>{`weight-${key}`}</td>
              <td>{resolved !== value ? (resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved) : value}</td>
              <td>
                <div className={`${cx(`magneto-ui-design-system-weight__example-${key}`)}`}>Example</div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const DesignSystemWeight = Component
