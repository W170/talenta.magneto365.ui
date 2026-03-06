import React from 'react'
import { IExpandableInfoPopoverProps } from './ExpandableInfoPopover.interface'
import { ExpandableInfoToggler, ExpandableInfoDetails } from '../index'
import { EExpandableInfoSize } from '../../ExpandableInfo.interface'
import CNM from '@utils/classNameManager/classNameManager.util'
import styles from './ExpandableInfoPopover.module.scss'
import { withClickOut } from '@components/hoc'
import { Popover } from '@components/UI/atoms'

const Component: React.FC<IExpandableInfoPopoverProps> = ({
  details,
  toggler,
  clickOut = false,
  setClickOut = () => ({})
}) => {
  return (
    <Popover
      widthBase={'auto' as unknown as number}
      show={clickOut}
      positionX="right"
      positionY={toggler.size === EExpandableInfoSize.LARGE ? 'top' : 'bottom'}
      className={CNM.get({
        styles,
        cls: [
          'expandable-info-popover',
          `expandable-info-popover--${toggler.size}`,
          `expandable-info-popover--${toggler.variant}`
        ]
      })}
      content={
        <React.Fragment>
          <span
            className={CNM.get({
              styles,
              cls: ['expandable-info-popover__arrow', `expandable-info-popover__arrow--${toggler.size}`]
            })}
          />
          <ExpandableInfoDetails {...details} />
        </React.Fragment>
      }
    >
      <ExpandableInfoToggler {...toggler} onToggle={(value) => setClickOut(value || !clickOut)} />
    </Popover>
  )
}

/**
 * Molecule UI child component of expandable info
 */
export const ExpandableInfoPopover = withClickOut(Component)
