import React, { useCallback, useState } from 'react'
import { INavMenuAnalystRegion } from '../../NavMenuAnalyst.interface'
import { INavMenuAnalystRegionModalProps } from './NavMenuAnalystRegionModal.interface'
import { MobileDrawer, Modal } from '@components/UI/molecules'
import { NavMenuAnalystRegionModalContent as Content } from './children/NavMenuAnalystRegionModalContent'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalystRegionModal.module.scss'

const Component: React.FC<INavMenuAnalystRegionModalProps> = ({
  defaultRegion,
  isOpen,
  regions,
  regionModal,
  onClose
}) => {
  const [selectedRegion, setSelectedRegion] = useState<INavMenuAnalystRegion | null>(null)

  const handleClose = useCallback(
    (region: INavMenuAnalystRegion | null) => {
      setSelectedRegion(null)
      onClose(region)
    },
    [onClose]
  )

  const container = useMediaQuery(
    <Modal
      isOpen={isOpen}
      onClose={() => handleClose(null)}
      title={regionModal.title}
      description=""
      className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal'] })}
    >
      <Content
        defaultRegion={defaultRegion}
        handleClose={handleClose}
        regionModal={regionModal}
        regions={regions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
    </Modal>,
    {
      sm: (
        <MobileDrawer
          isOpen={isOpen}
          onClose={() => handleClose(null)}
          className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal'] })}
        >
          <Content
            defaultRegion={defaultRegion}
            handleClose={handleClose}
            regionModal={regionModal}
            regions={regions}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </MobileDrawer>
      )
    }
  )

  return container
}

/**
 * Organism UI child component of nav menu analyst
 */
export const NavMenuAnalystRegionModal = Component
