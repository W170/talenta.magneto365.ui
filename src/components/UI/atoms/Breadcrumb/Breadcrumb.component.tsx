import React from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import styles from './Breadcrumb.modules.scss'

const Breadcrumb: React.FC<IBreadcrumb> = ({ breadcrumbText }) => {
  const breadcrumbSplit = breadcrumbText.split('/')
  return (
    <div className={styles.breadcrumb}>
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

export default Breadcrumb
