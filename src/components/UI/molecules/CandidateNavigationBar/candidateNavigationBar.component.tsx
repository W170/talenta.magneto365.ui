import React, { useState } from 'react'
import { ICandidateNavigationBar } from './candidateNavigationBar.interface'
import styles from './candidateNavigationBar.module.scss'
import { classNames } from '@shared/utils/common'
import { NavigationBarMenu } from './children/navigationBarMenu/navigationBarMenu.component'
import { NavigationButtonBar } from './children/navigationButtonsBar/navigationButtonBar.component'
import { CandidateButtonsArrow } from './children/navigationButtonsArrow/candidateButtonsArrow.component'

const Component: React.FC<ICandidateNavigationBar> = ({
  className,
  menuOptions = [],
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

  const handleSwipeDown = () => {
    setActive(false)
  }

  return (
    <div className={cx('candidateNavigationBar', `${activeMenu}`, className && className)}>
      <NavigationBarMenu active={active} menuOptions={menuOptions} onSwipeDown={handleSwipeDown} />
      <NavigationButtonBar
        textButtonCenter={textButtonCenter}
        sufix={sufix}
        prefix={prefix}
        iconButtonLeft={iconButtonLeft}
        onClickbuttonLeft={() => onClickbuttonLeft?.()}
        onclickButtonCenter={() => onclickButtonCenter?.()}
        setActive={() => setActive(!active)}
        active={active}
      />
      <CandidateButtonsArrow
        onClickArrowLeft={() => onClickArrowLeft?.()}
        onClickArrowRight={() => onClickArrowRight?.()}
        text={text}
      />
    </div>
  )
}
/**
 *  Molecule UI component of Candidate Navigation Bar
 */
export const CandidateNavigationBar = Component
