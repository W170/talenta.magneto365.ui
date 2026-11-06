import React, { useEffect, useRef } from 'react'
import { classMUI } from '@constants/stories'
import { useFocusTrap } from '@components/hooks/useFocusTrap'
import styles from './Modal.module.scss'
import { IModal, IModalDescription, IModalTitle } from './Modal.interface'
import { Close } from '@constants/icons.constants'
import { ModalPortal } from './ModalPortal.component'

let modalTitleId = 0

const Modal: React.FC<IModal> = ({
  onClose,
  isOpen,
  children,
  title,
  description,
  className = '',
  blockBackgroundClose = false,
  backgroundClassName = '',
  disableFocusTrap = false,
  ariaLabel,
  initialFocusRef,
  returnFocusRef
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleIdRef = useRef(`${classMUI}-modal__title-${(modalTitleId += 1)}`)

  useEffect(() => {
    const { body } = document
    if (!body) return
    body.style.overflowY = isOpen ? 'hidden' : 'auto'
    return () => {
      body.style.overflowY = 'auto'
    }
  }, [isOpen])

  useFocusTrap({
    active: isOpen && !disableFocusTrap,
    containerRef,
    onEscape: blockBackgroundClose ? undefined : onClose,
    initialFocusRef,
    returnFocusRef
  })

  if (!isOpen) return null

  return (
    <ModalPortal>
      <div
        ref={containerRef}
        className={`${styles[`${classMUI}-modal`]} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={title ? undefined : ariaLabel}
        aria-labelledby={title ? titleIdRef.current : undefined}
        tabIndex={-1}
      >
        {title ? (
          <h2 id={titleIdRef.current} className={`${styles[`${classMUI}-modal__title`]}`}>
            {title}
          </h2>
        ) : null}
        {description ? <p className={`${styles[`${classMUI}-modal__description`]}`}>{description}</p> : null}
        {children}
        <button
          data-name="close-drawer"
          className={`${styles[`${classMUI}-modal__close-btn`]}`}
          onClick={onClose}
          type="button"
        >
          <img src={Close} alt="close icon" />
        </button>
      </div>
      <span
        aria-hidden="true"
        className={`${styles[`${classMUI}-background-modal`]} ${backgroundClassName}`}
        onClick={blockBackgroundClose ? () => null : onClose}
      />
    </ModalPortal>
  )
}

const Title: React.FC<IModalTitle> = ({ className, children, ...props }) => (
  <h2 className={`${styles[`${classMUI}-modal__title`]} ${className}`} {...props}>
    {children}
  </h2>
)

const Description: React.FC<IModalDescription> = ({ className, children, ...props }) => (
  <p className={`${styles[`${classMUI}-modal__description`]} ${className}`} {...props}>
    {children}
  </p>
)
export default Object.assign(Modal, { Title, Description })
