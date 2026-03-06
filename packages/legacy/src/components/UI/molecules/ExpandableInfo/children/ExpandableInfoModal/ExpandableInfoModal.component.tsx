import React, { useCallback, useState } from 'react'
import { IExpandableInfoModalProps } from './ExpandableInfoModal.interface'
import { ExpandableInfoToggler, ExpandableInfoDetails } from '../index'
import CNM from '@utils/classNameManager/classNameManager.util'
import { MobileDrawer } from '@components/UI/molecules'
import styles from './ExpandableInfoModal.module.scss'

const Component: React.FC<IExpandableInfoModalProps> = ({ toggler, details }) => {
  const [visible, setVisible] = useState(false)

  const handleOnToggle = useCallback(() => {
    setVisible((prev) => !prev)
  }, [])

  return (
    <React.Fragment>
      <ExpandableInfoToggler {...toggler} onToggle={handleOnToggle} />
      <MobileDrawer
        isOpen={visible}
        onClose={handleOnToggle}
        className={CNM.get({ styles, cls: ['expandable-info-modal'] })}
      >
        <ExpandableInfoDetails {...details} />
      </MobileDrawer>
    </React.Fragment>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoModal = Component
