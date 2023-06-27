import React from 'react'
import { Breadcrumb, IconItem } from '../../atoms'
import { IBreadcrumbs } from './Breadcrumbs.interface'
import styles from './Breadcrumbs.modules.scss'
import { iconPropsBreadCrumb } from '../../../../constants/stories.constants'

const Component: React.FC<IBreadcrumbs> = ({ breadcrumbText }) => {
  return (
    <div className={styles.BreadcrumbsComponent}>
      <IconItem {...iconPropsBreadCrumb} />
      <Breadcrumb breadcrumbText={breadcrumbText} />
    </div>
  )
}

/**
 * Molecule UI component for breadcrums information
 */

export const Breadcrumbs = Component
