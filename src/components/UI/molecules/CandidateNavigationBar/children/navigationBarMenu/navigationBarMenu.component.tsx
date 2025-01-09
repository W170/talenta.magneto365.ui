import React from 'react'
import { INavigationBarMenu } from './navigationBarMenu.interface'
import styles from './navigationBarMenu.module.scss'
import { classNames } from '@shared/utils/common'
import { SwipeDowm } from '../swipeDowm/swipeDowm.component'
import { ImenuOptions } from '../../candidateNavigationBar.interface'
import { IconItem } from '@components/UI/atoms'
import { NAVIGATION_BAR_MENU_ICONS } from './navigationBarMenu.constants'

const Component: React.FC<INavigationBarMenu> = ({ active, menuOptions, onSwipeDown }) => {
  const cx = classNames.bind(styles)

  return (
    <>
      {menuOptions && (
        <>
          {active && <SwipeDowm onSwipeDown={onSwipeDown} />}
          <div className={cx('navigationCarMenu__menu', `${active && 'navigationCarMenu__menuActive'}`)}>
            {menuOptions.map(({ icon, label, onClick, color }: ImenuOptions, index: number) => (
              <div
                onClick={() => onClick()}
                className={cx('navigationCarMenu__menuActive--option')}
                key={label || index}
              >
                <div className={cx('navigationCarMenu__menuActive--icon')}>
                  {icon && color ? <IconItem icon={NAVIGATION_BAR_MENU_ICONS[icon][color]} size={22} /> : null}
                </div>
                {label}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}
/**
 * Molecule UI component of Candidate Navigation Bar
 */
export const NavigationBarMenu = Component
