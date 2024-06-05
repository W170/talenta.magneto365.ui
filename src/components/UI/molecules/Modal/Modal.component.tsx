import React from 'react'
import { classMUI } from '@constants/stories'
import styles from './Modal.module.scss'
import { IModal } from './Modal.interface'
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
          <h2 className={`${styles[`${classMUI}-modal__title`]}`}>{title}</h2>
          <p className={`${styles[`${classMUI}-modal__description`]}`}>{description}</p>
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

export default Modal
