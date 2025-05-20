import React from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/config/tokens/text.json'
import pStyles from '../../DesignSystem.module.scss'
import styles from './DesignSystemText.module.scss'
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
              <td>{`text-${key}`}</td>
              <td>{resolved !== value ? (resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved) : value}</td>
              <td>
                <div className={`${cx(`magneto-ui-design-system-text__example-${key}`)}`}>Example</div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const DesignSystemShowCaseText = Component
