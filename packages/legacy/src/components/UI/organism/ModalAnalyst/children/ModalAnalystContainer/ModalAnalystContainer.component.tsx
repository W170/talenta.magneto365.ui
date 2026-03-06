import React, { useMemo } from 'react'
import { useMediaQuery } from '@components/hooks'
import styles from './ModalAnalystContainer.module.scss'
import { Modal, MobileDrawer } from '@components/UI/molecules'
import CNM from '@utils/classNameManager/classNameManager.util'
import { IModalAnalystContainerProps } from './ModalAnalystContainer.interface'
import { ModalAnalystContent, ModalAnalystFooter, ModalAnalystHeader } from '../index'

const Component: React.FC<IModalAnalystContainerProps> = ({
  handleClose,
  isOpen,
  name,
  data,
  screens,
  step,
  setStep
}) => {
  const component = useMemo(
    () => (
      <div className={CNM.get({ styles, cls: ['modal-analyst-container'] })}>
        <ModalAnalystHeader header={screens[step]?.header} />
        <ModalAnalystContent content={screens[step]?.content} />
        <ModalAnalystFooter
          footer={screens[step]?.footer}
          name={name}
          data={data}
          setStep={setStep}
          handleClose={handleClose}
        />
      </div>
    ),
    [handleClose, name, data, screens, step, setStep]
  )

  const container = useMediaQuery(
    <Modal
      isOpen={isOpen}
      onClose={() => handleClose(name, false, undefined)}
      className={CNM.get({ styles, cls: ['modal-analyst-container--desktop'] })}
    >
      {component}
    </Modal>,
    {
      sm: (
        <MobileDrawer
          isOpen={isOpen}
          onClose={() => handleClose(name, false, undefined)}
          className={CNM.get({ styles, cls: ['modal-analyst-container--mobile'] })}
        >
          {component}
        </MobileDrawer>
      )
    }
  )

  return container
}

/**
 * Molecule UI child component of modal analyst
 */
export const ModalAnalystContainer = Component
