import React, { useState, useEffect } from 'react'
import { Dropdown, Modal } from './children'
import { IUserMenuWrapperAnalystProps } from './UserMenuWrapperAnalyst.interface'
import { useMediaQuery } from '@components/hooks'

const Component: React.FC<IUserMenuWrapperAnalystProps> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (visible) {
        setVisible(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [visible])

  const container = useMediaQuery(<Dropdown {...props} />, {
    sm: <Modal {...props} clickOut={visible} setClickOut={() => setVisible(!visible)} />
  })

  return container
}

/**
 * Molecule UI component for user menu wrapper analyst
 */
export const UserMenuWrapperAnalyst = Component
