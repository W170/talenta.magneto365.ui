import React, { useEffect, useState } from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import styles from './Breadcrumb.modules.scss'

const Component: React.FC<IBreadcrumb> = ({ breadcrumbText, breadcrumbCustomText, baseUrl, queryParams }) => {
  const [urls, setUrls] = useState<string[]>([])
  const breadcrumbs = breadcrumbCustomText ? breadcrumbCustomText : breadcrumbText
  const breadcrumbSplitText = breadcrumbs.split('/')

  useEffect(() => {
    const url = new URL(breadcrumbText, baseUrl)
    const pathArray = url.pathname.split('/').filter((el) => el !== '')

    const newUrls = []

    for (let i = 0; i < pathArray.length; i++) {
      const urlPath = pathArray.slice(0, i + 1).join('/')
      const newUrl = new URL(urlPath, baseUrl)
      newUrls.push(newUrl.href)
    }

    setUrls(newUrls)
  }, [breadcrumbText, baseUrl])

  return (
    <div className={styles.breadcrumbComponent}>
      {urls.map((href, i) => (
        <a href={`${href}${queryParams ? queryParams : ''}`} key={i}>
          <p className={urls.length - 1 === i ? styles['magneto-ui-bc-active'] : ''}> / {breadcrumbSplitText[i + 1]}</p>
        </a>
      ))}
    </div>
  )
}

/**
 * Atom UI of breadcrumb
 */

export const Breadcrumb = Component
