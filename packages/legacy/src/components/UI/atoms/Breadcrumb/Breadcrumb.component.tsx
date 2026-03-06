import React, { useMemo } from 'react'
import { IBreadcrumb } from './Breadcrumb.interface'
import styles from './Breadcrumb.modules.scss'

const Component: React.FC<IBreadcrumb> = ({
  breadcrumbText,
  breadcrumbCustomText,
  queryParams,
  haveRedirect = true,
  detailTitle = '',
  breadCrumbFromServer,
  urlFromServer
}) => {
  const breadcrumbs = breadcrumbCustomText ? breadcrumbCustomText : breadcrumbText || ''
  const breadcrumbSplitText = breadcrumbs?.split('/')
  const lastIndexBC = breadcrumbSplitText?.length - 1
  const haveDetailTitle = detailTitle !== ''
  const detailTileStyle = detailTitle ? styles['no-transform'] : ''
  const regexBase4 = /[0-9a-f]{8} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{4} [0-9a-f]{12}/g

  // This removes the base64 from the vacancy breadcrumbs
  const title = breadcrumbSplitText[lastIndexBC].replace(/-/g, ' ').replace(regexBase4, '')
  const breadCrumbsRender = useMemo(() => {
    return haveRedirect ? (
      <>
        {breadCrumbFromServer?.map(
          (href, i) =>
            breadCrumbFromServer.length - 1 !== i && (
              <a href={`${urlFromServer?.[i]}${queryParams ? queryParams : ''}`} key={i}>
                <p>/ {href}</p>
              </a>
            )
        )}
        <p className={`${styles['magneto-ui-bc-active']} ${detailTileStyle}`}>
          / {haveDetailTitle ? detailTitle : title}
        </p>
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
  }, [
    haveRedirect,
    breadCrumbFromServer,
    detailTileStyle,
    haveDetailTitle,
    detailTitle,
    title,
    breadcrumbSplitText,
    urlFromServer,
    queryParams,
    lastIndexBC
  ])

  return <div className={styles.breadcrumbComponent}>{breadCrumbsRender}</div>
}

/**
 * Atom UI of breadcrumb
 */

export const Breadcrumb = Component
