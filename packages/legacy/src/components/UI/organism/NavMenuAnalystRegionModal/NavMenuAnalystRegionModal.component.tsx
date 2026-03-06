import React, { useCallback, useState } from 'react'
import { INavMenuAnalystRegion } from '../NavMenuAnalyst/NavMenuAnalyst.interface'
import { INavMenuAnalystRegionModalProps } from './NavMenuAnalystRegionModal.interface'
import { MobileDrawer, Modal } from '@components/UI/molecules'
import { NavMenuAnalystRegionModalContent as Content } from './children/NavMenuAnalystRegionModalContent'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalystRegionModal.module.scss'
import { useAnalyst } from '@components/UI/template/AnalystTemplate/AnalystTemplate.context'

const Component: React.FC<INavMenuAnalystRegionModalProps> = ({ defaultRegion, regions, regionModal }) => {
  const [selectedRegion, setSelectedRegion] = useState<INavMenuAnalystRegion | null>(null)
  const { modalRegion, handleRegionChange } = useAnalyst()

  const handleClose = useCallback(
    (region: INavMenuAnalystRegion | null) => {
      setSelectedRegion(null)
      handleRegionChange(region)
    },
    [handleRegionChange]
  )

  const container = useMediaQuery(
    <Modal
      isOpen={modalRegion}
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
          isOpen={modalRegion}
          onClose={() => handleClose(null)}
          className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal'] })}
        >
          <h2>{regionModal.title}</h2>
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
