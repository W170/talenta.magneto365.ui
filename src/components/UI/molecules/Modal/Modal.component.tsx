import React from 'react'
import { classMUI } from '@constants/stories'
import styles from './Modal.module.scss'
import { IModal, IModalDescription, IModalTitle } from './Modal.interface'
import { Close } from '@constants/icons.constants'
import { ModalPortal } from './ModalPortal.component'

const Modal: React.FC<IModal> = ({
  onClose,
  isOpen,
  children,
  title,
  description,
  className = '',
  customMaxHeight = '350px'
}) => {
  if (!isOpen) return null
  return (
    <ModalPortal>
      <>
        <div className={`${styles[`${classMUI}-modal`]} ${className}`}>
          {title ? <h2 className={`${styles[`${classMUI}-modal__title`]}`}>{title}</h2> : null}
          {description ? <p className={`${styles[`${classMUI}-modal__description`]}`}>{description}</p> : null}
          <div style={{ maxHeight: customMaxHeight }} className={`${styles[`${classMUI}-modal__children-container`]}`}>
            {children}
          </div>
          <button className={`${styles[`${classMUI}-modal__close-btn`]}`} onClick={onClose} type="button">
            <img src={Close} alt="close icon" />
          </button>
        </div>
        <span className={`${styles[`${classMUI}-background-modal`]}`} onClick={onClose} />
      </>
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
