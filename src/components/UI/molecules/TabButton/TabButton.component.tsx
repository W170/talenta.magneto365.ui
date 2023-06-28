import React, { CSSProperties, useMemo } from 'react'
import { ITabButton } from './TabButton.interface'
// import { withStyles } from './TabButton.styles'
import styles from './TabButton.modules.scss'
import { Link } from '../../atoms'
import { toCSSVariables } from '../../../../shared/utils/Function'

const Component: React.FC<ITabButton> = ({ tabButtonLink, tabButtonStyle }) => {
  const stylesValue: CSSProperties = useMemo(() => toCSSVariables(tabButtonStyle), [tabButtonStyle])

  const { boxShadow } = tabButtonStyle || {}

  return (
    <div className={styles.TabButtonComponent} style={stylesValue} data-box-shadow={boxShadow}>
      {tabButtonLink && <Link {...tabButtonLink} />}
    </div>
  )
}

/**
 * Molecule UI component for Tab Button
 */

export const TabButton = Component
