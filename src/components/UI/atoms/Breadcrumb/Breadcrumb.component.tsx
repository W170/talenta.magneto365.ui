import React, { useEffect, useMemo, useState } from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import styles from './Breadcrumb.modules.scss'

const Component: React.FC<IBreadcrumb> = ({
  breadcrumbText,
  breadcrumbCustomText,
  baseUrl,
  queryParams,
  haveRedirect = true
}) => {
  const [urls, setUrls] = useState<string[]>([])
  const breadcrumbs = breadcrumbCustomText ? breadcrumbCustomText : breadcrumbText
  const breadcrumbSplitText = breadcrumbs.split('/')
  const lastIndexBC = breadcrumbSplitText.length - 1

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

  const isDinamyc = useMemo(() => {
    return haveRedirect ? (
      <>
        {urls.map(
          (href, i) =>
            urls.length - 1 !== i && (
              <a href={`${href}${queryParams ? queryParams : ''}`} key={i}>
                <p>/ {breadcrumbSplitText[i + 1]}</p>
              </a>
            )
        )}
        <p className={styles['magneto-ui-bc-active']}>/ {breadcrumbSplitText[lastIndexBC]}</p>
      </>
    ) : (
      <>
        {breadcrumbSplitText.map((bc, i) => (
          <p className={`${lastIndexBC == i ? styles['magneto-ui-bc-active'] : ''} ${styles['magneto-ui-bc']}`} key={i}>
            {i > 0 && '/'} {bc}
          </p>
        ))}
      </>
    )
  }, [breadcrumbSplitText, haveRedirect, lastIndexBC, urls, queryParams])

  return <div className={styles.breadcrumbComponent}>{isDinamyc}</div>
}

/**
 * Atom UI of breadcrumb
 */

export const Breadcrumb = Component
