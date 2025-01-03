import React, { useState } from 'react'
import { ICandidateNavigationBar, ImenuOptions } from './candidateNavigationBar.interface'
import styles from './candidateNavigationBar.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2, ArrowRight2 } from '@constants/icons.constants'

const Component: React.FC<ICandidateNavigationBar> = ({
  className,
  menuOptions,
  onClickbuttonLeft,
  onclickButtonCenter,
  textButtonCenter,
  iconButtonLeft,
  prefix,
  sufix,
  onClickArrowLeft,
  onClickArrowRight,
  text
}) => {
  const [active, setActive] = useState(false)

  const cx = classNames.bind(styles)

  const activeMenu = active && 'candidateNavigationBarActive'

  return (
    <div className={cx('candidateNavigationBar', `${activeMenu}`, className && className)}>
      {menuOptions && (
        <div className={cx('candidateNavigationBar__menu', `${active && 'candidateNavigationBar__menuActive'}`)}>
          {menuOptions.map(({ icon, label, onClick }: ImenuOptions, index: number) => (
            <div
              onClick={() => onClick()}
              className={cx('candidateNavigationBar__menuActive--option')}
              key={label || index}
            >
              <div className={cx('candidateNavigationBar__menuActive--icon')}>
                <IconItem icon={icon} color="#ef09f4" />
              </div>
              {label}
            </div>
          ))}
        </div>
      )}
      <div className={cx('candidateNavigationBar__buttons')}>
        <div className={cx('candidateNavigationBar__buttons--decline')} onClick={() => onClickbuttonLeft?.()}>
          <IconItem icon={iconButtonLeft} size={12} />
        </div>
        <div className={cx('candidateNavigationBar__buttons--center')} onClick={() => onclickButtonCenter?.()}>
          {prefix && <IconItem icon={ArrowLeft2} />}
          {textButtonCenter}
          {sufix && <IconItem icon={ArrowLeft2} />}
        </div>
        <div className={cx('candidateNavigationBar__buttons--menu')} onClick={() => setActive(!active)}>
          ...
        </div>
      </div>
      <div className={cx('candidateNavigationBar__navigation')}>
        <div onClick={() => onClickArrowLeft?.()}>
          <IconItem icon={ArrowLeft2} />
        </div>
        <div className={cx('candidateNavigationBar__navigation--center')}>{text}</div>
        <div onClick={() => onClickArrowRight?.()}>
          <IconItem icon={ArrowRight2} />
        </div>
      </div>
    </div>
  )
}
/**
 * UI Atom component of Candidate Navigation Bar
 */
export const CandidateNavigationBar = Component
