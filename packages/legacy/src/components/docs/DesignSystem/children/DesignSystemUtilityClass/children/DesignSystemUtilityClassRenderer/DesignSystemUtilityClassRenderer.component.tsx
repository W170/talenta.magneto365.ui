import React, { useMemo } from 'react'
import { IDesignSystemUtilityClassRenderer } from './DesignSystemUtilityClassRenderer.interface'
import { resolveValue, flattenTokens, evaluateCalc, convertRemToPx } from '../../../../DesignSystem.constant'
import pStyles from '../../../../DesignSystem.module.scss'
import { classNames } from '@shared/utils/common'

const pCx = classNames.bind(pStyles)

const Component: React.FC<IDesignSystemUtilityClassRenderer> = ({ token }) => {
  const tokens = useMemo(() => flattenTokens(token.values), [token])

  return (
    <React.Fragment>
      {token?.utilities?.classes?.map(({ conditions, name, prefix, properties }) => (
        <table className={pCx('magneto-ui-design-system__table')} key={name}>
          <thead>
            <tr>
              <th>Utility Class: {name}</th>
              {properties.map(({ property }) => (
                <th key={property}>CSS Property: {property}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tokens
              .filter((token) => !conditions?.excludeValues?.some((e: string) => token[0].split('-').includes(e)))
              .map(([key, value]) => {
                const resolved = resolveValue(value)
                const isResolved = resolved !== value
                const evaluated = resolved.startsWith('calc') ? evaluateCalc(resolved) : resolved

                const leftValue = isResolved ? evaluated : value
                const rightValue = isResolved ? convertRemToPx(evaluated) : value
                const filteredClassKey = key
                  .split('-')
                  .filter((word: string) => !conditions?.removeFromClass?.includes(word))
                  .join('-')

                return (
                  <tr key={key}>
                    <td>{`.${prefix}-${filteredClassKey}`}</td>
                    {properties.map(({ property }) => (
                      <td key={property}>
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
                    ))}
                  </tr>
                )
              })}
          </tbody>
        </table>
      ))}
    </React.Fragment>
  )
}

export const DesignSystemUtilityClassRenderer = Component
