import React, { useCallback, useState } from 'react'
import { IconItem } from '../Icon'
import styles from './MegaMenuPopover.module.scss'
import { useMegaMenuJobs } from '@components/UI/template/MegaMenu/MegaMenu.context'
import { ArrowDown2 } from '@constants/icons.constants'
const popoverClassName = 'magneto-ui-mega-menu-popover'

const MegaMenuPopover: React.FC = ({ children }) => {
  const [showContent, setShowContent] = useState(false)
  const { jobAction } = useMegaMenuJobs()

  const handleShowContent = useCallback(
    (show: boolean) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.preventDefault()
      setShowContent(show)
    },
    []
  )

  return (
    <>
      {jobAction && (
        <button className={`${styles[`${popoverClassName}__action`]}`} onClick={handleShowContent(!showContent)}>
          <p className={`${styles[`${popoverClassName}__action--text`]}`}>{jobAction.label}</p>
          <IconItem
            className={`${styles[`${popoverClassName}__action--icon`]} ${
              showContent ? styles[`${popoverClassName}__action--icon-reverse`] : ''
            }`}
            icon={ArrowDown2}
            alt="arrow-icon"
            size={16}
          />
        </button>
      )}
      {showContent && (
        <>
          <div className={styles[`${popoverClassName}__shadow`]} onClick={handleShowContent(false)} />
          <div
            className={styles[`${popoverClassName}__content`]}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
              event.stopPropagation()
            }}
          >
            {children}
          </div>
        </>
      )}
    </>
  )
}

export default MegaMenuPopover
