import React, { useCallback, useEffect, useState } from 'react'
import style from './Tabs.modules.scss'
import { ITabs } from './Tabs.interface'
import { classMUI } from '@constants/stories'

const Component: React.FC<ITabs> = ({ defaultTab, options, children }) => {
  const [tab, setTab] = useState(defaultTab || 0)

  useEffect(() => {
    if (!defaultTab) return
    if (defaultTab > options.length) setTab(0)
  }, [defaultTab, options.length])

  const activeClassName = useCallback(
    (index: number) => (index === tab ? style[`${classMUI}-tabs__navigation--selected`] : ''),
    [tab]
  )

  return (
    <div className={`${style[`${classMUI}-tabs`]}`}>
      <div className={`${style[`${classMUI}-tabs__navigation`]}`}>
        {options.map(({ title, icon }, index) => (
          <div
            key={index}
            className={`${style[`${classMUI}-tabs__navigation--item`]} ${activeClassName(index)}`}
            onClick={() => setTab(index)}
          >
            {icon ? <img src={icon} /> : null}
            {title ? <span>{title}</span> : null}
          </div>
        ))}
      </div>
      <div className={`${style[`${classMUI}-tabs__content`]}`}>{children[tab]}</div>
    </div>
  )
}

/**
 * UI Atom Component of Tabs
 */

export const Tabs = Component
