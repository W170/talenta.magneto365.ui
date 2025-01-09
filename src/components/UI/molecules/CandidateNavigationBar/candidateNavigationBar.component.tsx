import React, { useState, useRef, useEffect } from 'react'
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
  colorIconButtonLeft,
  prefix,
  sufix,
  onClickArrowLeft,
  onClickArrowRight,
  text
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  const cx = classNames.bind(styles)

  const activeMenu = active && 'candidateNavigationBarActive'

  const onChangeInactiveMenu = () => {
    setActive(false)
  }

  useEffect(() => {
    if (active) {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onChangeInactiveMenu()
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [active])

  return (
    <div className={cx('candidateNavigationBar', `${activeMenu}`, className && className)} ref={ref}>
      <NavigationBarMenu active={active} menuOptions={menuOptions} onSwipeDown={onChangeInactiveMenu} />
      <NavigationButtonBar
        textButtonCenter={textButtonCenter}
        colorIconButtonLeft={colorIconButtonLeft}
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
