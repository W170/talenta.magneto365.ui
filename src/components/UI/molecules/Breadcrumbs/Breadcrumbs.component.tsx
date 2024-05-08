import React from 'react'
import { Breadcrumb, IconItem } from '../../atoms'
import { IBreadcrumbs } from './Breadcrumbs.interface'
import styles from './Breadcrumbs.modules.scss'
import { iconPropsBreadCrumb } from '@constants/stories'

const Component: React.FC<IBreadcrumbs> = ({ homeUrl, breadcrumbProps, iconProps = iconPropsBreadCrumb }) => {
  return (
    <div className={styles.BreadcrumbsComponent}>
      <a href={homeUrl}>
        <IconItem {...iconProps} />
      </a>
      {breadcrumbProps && <Breadcrumb {...breadcrumbProps} />}
    </div>
  )
}

/**
 * Molecule UI component for breadcrums information
 */

export const Breadcrumbs = Component
