import React from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/tokens/data/opacity.json'
import pStyles from '../../DesignSystem.module.scss'
import styles from './DesignSystemOpacity.module.scss'
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
              <td>{`opacity-${key}`}</td>
              <td>{resolved !== value ? (resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved) : value}</td>
              <td>
                <div
                  className={`${cx(`magneto-ui-design-system-opacity__example-${key}`)} ${pCx(
                    `magneto-ui-design-system__example-box`,
                    `magneto-ui-design-system__example-box--yellow`,
                    'magneto-ui-design-system__example-box--base-size'
                  )}`}
                ></div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const DesignSystemOpacity = Component
