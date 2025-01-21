import React from 'react'
import styles from './navigationButtonsBar.module.scss'
import { classNames } from '@shared/utils/common'
import { InavigationButtonBar } from './navigationButtonsBar.interface'
import { IconItem } from '@components/UI/atoms'
import { NAVIGATION_BAR_BUTTONS_ICONS } from './navigationButtonbar.constants'

const Component: React.FC<InavigationButtonBar> = ({
  iconButtonLeft,
  colorIconButtonLeft,
  onClickbuttonLeft,
  onclickButtonCenter,
  setActive,
  active,
  prefix,
  colorPrefix,
  sufix,
  colorSufix,
  textButtonCenter
}) => {
  const cx = classNames.bind(styles)

  return (
    <div className={cx('navigationButtonsBar__buttons')}>
      <div className={cx('navigationButtonsBar__buttons--decline')} onClick={() => onClickbuttonLeft?.()}>
        <IconItem icon={NAVIGATION_BAR_BUTTONS_ICONS[iconButtonLeft][colorIconButtonLeft]} size={14} />
      </div>
      <div className={cx('navigationButtonsBar__buttons--center')} onClick={() => onclickButtonCenter?.()}>
        {prefix && colorPrefix ? (
          <div className={cx('navigationButtonsBar__buttons--prefix')}>
            <IconItem icon={NAVIGATION_BAR_BUTTONS_ICONS[prefix][colorPrefix]} size={18} />
          </div>
        ) : null}
        {textButtonCenter}
        {sufix && colorSufix ? (
          <div className={cx('navigationButtonsBar__buttons--sufix')}>
            <IconItem icon={NAVIGATION_BAR_BUTTONS_ICONS[sufix][colorSufix]} size={18} />
          </div>
        ) : null}
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
