import React, { useMemo } from 'react'
import { classNames } from '@shared/utils/common'
import data from '@shared/config/tokens/scale.json'
import pStyles from '../../DesignSystem.module.scss'
import { resolveValue, flattenTokens, evaluateCalc } from '../../DesignSystem.constant'

const pCx = classNames.bind(pStyles)

const Component: React.FC = () => {
  const tokens = useMemo(() => flattenTokens(data.values), [])

  return (
    <div className={pCx('magneto-ui-design-system__container')}>
      {data.utilities.classes.map(({ conditions, name, prefix, properties }) => (
        <table className={pCx('magneto-ui-design-system__table')} key={name}>
          <thead>
            <tr>
              <th>CSS Utility Class for: {name}</th>
              {properties.map(({ property }) => (
                <th key={property}>{property}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tokens
              .filter((token) => !conditions.excludeValues?.some((e: string) => token[0].split('-').includes(e)))
              .map(([key, value]) => {
                const resolved = resolveValue(value)
                const filteredClassKey = key
                  .split('-')
                  .filter((word: string) => !conditions.removeFromClass?.includes(word))
                  .join('-')
                return (
                  <tr key={key}>
                    <td>{`.${prefix}-${filteredClassKey}`}</td>
                    {properties.map(({ property }) => (
                      <td key={property}>
                        {resolved !== value ? (resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved) : value}
                      </td>
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      ))}
    </div>
  )
}

export const DesignSystemUtilityClasses = Component
