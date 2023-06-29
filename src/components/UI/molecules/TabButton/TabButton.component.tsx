import React, { CSSProperties, useMemo } from 'react'
import { ITabButton } from './TabButton.interface'
import styles from './TabButton.modules.scss'
import { Link } from '../../atoms'
import { toCSSVariables } from '../../../../shared/utils/Function'

const Component: React.FC<ITabButton> = ({ tabButtonLinkProps, tabButtonStyles }) => {
  const stylesValue: CSSProperties = useMemo(() => toCSSVariables(tabButtonStyles), [tabButtonStyles])

  const { boxShadow } = tabButtonStyles || {}
  const { linkStyles } = tabButtonLinkProps || {}

  return (
    <div className={styles.TabButtonComponent} style={stylesValue} data-box-shadow={boxShadow}>
      {tabButtonLinkProps && <Link {...tabButtonLinkProps} linkStyles={linkStyles} />}
    </div>
  )
}

/**
 * Molecule UI component for Tab Button
 */

export const TabButton = Component
