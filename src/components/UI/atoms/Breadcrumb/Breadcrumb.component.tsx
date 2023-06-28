import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import styles from './Breadcrumb.modules.scss'

const Component: React.FC<IBreadcrumb> = ({ breadcrumbText }) => {
  const breadcrumbSplit = breadcrumbText.split('/')
  return (
    <div className={styles.breadcrumbComponent}>
      {breadcrumbSplit.map((bc, i) => (
        <p key={i}>
          {i > 0 && '/'} {breadcrumbSplit.length > i + 1 && bc}
        </p>
      ))}
      <p className={styles['magneto-ui-bc-active']}>{breadcrumbSplit[breadcrumbSplit.length - 1]}</p>
    </div>
  )
}

/**
 * Atom UI of breadcrumb
 */

export const Breadcrumb = Component
