import React from 'react'
import { ArrowLeft2 } from '@constants/icons.constants'
import { MainButton, Radio } from '@components/UI/atoms'
import { useMediaQuery } from '@components/hooks'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './NavMenuAnalsytRegionModalContent.module.scss'
import { INavMenuAnalystRegionModalContentProps } from './NavMenuAnalystRegionModalContent.interface'

const Component: React.FC<INavMenuAnalystRegionModalContentProps> = ({
  defaultRegion,
  handleClose,
  regionModal,
  regions,
  selectedRegion,
  setSelectedRegion
}) => {
  const cancelButton = useMediaQuery(
    <MainButton
      buttonText={regionModal.cancel}
      buttonType="button"
      className={CNM.get({
        styles,
        cls: ['nav-menu-analyst-region-modal-content__button', 'nav-menu-analyst-region-modal-content__button--cancel']
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
            cls: [
              'nav-menu-analyst-region-modal-content__button',
              'nav-menu-analyst-region-modal-content__button--cancel'
            ]
          })}
          onClick={() => handleClose(null)}
        />
      )
    }
  )

  return (
    <React.Fragment>
      <div className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal-content__container'] })}>
        {regions.map(({ name, flag, lang }, index) => (
          <Radio
            key={`region-${name}`}
            type="button"
            prefixIcon={{
              icon: flag,
              alt: lang,
              className: CNM.get({ styles, cls: ['nav-menu-analyst-region-modal-content__flag'] })
            }}
            childrenClassName={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal-content__option'] })}
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
      <div className={CNM.get({ styles, cls: ['nav-menu-analyst-region-modal-content__footer'] })}>
        {cancelButton}
        <MainButton
          buttonText={regionModal.apply}
          buttonType="button"
          className={CNM.get({
            styles,
            cls: [
              'nav-menu-analyst-region-modal-content__button',
              'nav-menu-analyst-region-modal-content__button--apply'
            ]
          })}
          disabled={!selectedRegion}
          onClick={() => handleClose(selectedRegion)}
        />
      </div>
    </React.Fragment>
  )
}

export const NavMenuAnalystRegionModalContent = Component
