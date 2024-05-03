import React, { useCallback, useState } from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { INavMenuAnalystRegion } from '../../NavMenuAnalyst.interface'
import { INavMenuAnalystRegionModalProps } from './NavMenuAnalystRegionModal.interface'
import { Modal } from '@components/UI/molecules'
import { Radio, MainButton } from '@components/UI/atoms'
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

  const cancelButton = useMediaQuery(
    <MainButton
      buttonText={regionModal.cancel}
      buttonType="button"
      className={CNM.get({
        styles,
        cls: ['nav-menu-analyst-region-modal__button', 'nav-menu-analyst-region-modal__button--cancel']
      })}
      onClick={() => handleClose(null)}
    />,
    {
      sm: (
        <MainButton
          iconProps={{ icon: ArrowLeft2 }}
          buttonType="button"
          className={CNM.get({
            styles,
            cls: ['nav-menu-analyst-region-modal__button', 'nav-menu-analyst-region-modal__button--cancel']
          })}
          onClick={() => handleClose(null)}
        />
      )
    }
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => handleClose(null)}
      title={regionModal.title}
      description=""
      className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal'] })}
    >
      <div className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal__container'] })}>
        {regions.map(({ name, flag, lang }, index) => (
          <Radio
            key={`region-${name}`}
            type="button"
            prefixIcon={{
              icon: flag,
              alt: lang,
              className: CNM.get({ styles, cls: ['nav-menu-analyst-region-modal__flag'] })
            }}
            childrenClassName={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal__option'] })}
            defaultChecked={
              (regions.some(({ lang }) => lang === defaultRegion) ? defaultRegion === lang : index === 0) &&
              !selectedRegion
            }
            checked={selectedRegion?.name === name}
            onChange={() => setSelectedRegion({ name, flag, lang })}
          >
            <span>{name}</span>
          </Radio>
        ))}
      </div>
      <div className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal__footer'] })}>
        {cancelButton}
        <MainButton
          buttonText={regionModal.apply}
          buttonType="button"
          className={CNM.get({
            styles,
            cls: ['nav-menu-analyst-region-modal__button', 'nav-menu-analyst-region-modal__button--apply']
          })}
          disabled={!selectedRegion}
          onClick={() => handleClose(selectedRegion)}
        />
      </div>
    </Modal>
  )
}

/**
 * Organism UI child component of nav menu analyst
 */
export const NavMenuAnalystRegionModal = Component
