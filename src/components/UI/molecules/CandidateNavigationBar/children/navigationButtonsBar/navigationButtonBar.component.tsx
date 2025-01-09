import React from 'react'
import styles from './navigationButtonsBar.module.scss'
import { classNames } from '@shared/utils/common'
import { InavigationButtonBar } from './navigationButtonsBar.interface'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2 } from '@constants/icons.constants'
import { NAVIGATION_BAR_BUTTONS_ICONS } from './navigationButtonbar.constants'

const Component: React.FC<InavigationButtonBar> = ({
  iconButtonLeft,
  colorIconButtonLeft,
  onClickbuttonLeft,
  onclickButtonCenter,
  setActive,
  active,
  prefix,
  sufix,
  textButtonCenter
}) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('navigationButtonsBar__buttons')}>
      <div className={cx('navigationButtonsBar__buttons--decline')} onClick={() => onClickbuttonLeft?.()}>
        <IconItem icon={NAVIGATION_BAR_BUTTONS_ICONS[iconButtonLeft][colorIconButtonLeft]} size={12} />
      </div>
      <div className={cx('navigationButtonsBar__buttons--center')} onClick={() => onclickButtonCenter?.()}>
        {prefix && <IconItem icon={ArrowLeft2} />}
        {textButtonCenter}
        {sufix && <IconItem icon={ArrowLeft2} />}
      </div>
      <div className={cx('navigationButtonsBar__buttons--menu')} onClick={() => setActive(!active)}>
        ...
      </div>
    </div>
  )
}
/**
 * Molecule UI component of Candidate Navigation Bar
 */
export const NavigationButtonBar = Component
