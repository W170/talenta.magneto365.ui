import React, { ReactNode, useCallback, useState } from 'react'
import { IMegaMenuDrawerItem } from './MegaMenuDrawerItem.interface'
import style from './MegaMenuDrawerItem.module.scss'
import { IconItem } from '../Icon'
import { ArrowLeft2, ArrowRight2 } from '../../../../constants/icons.constants'
import { Drawer } from '../../molecules'

const Component: React.FC<IMegaMenuDrawerItem> = ({ url = '#', text = '', isActive, icon, content }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const menuActive = isActive ? style['is-active'] : ''

  const toggleDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer)
  }, [openDrawer])
  const anchorAction = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (content) {
        event.preventDefault()
        toggleDrawer()
      }
    },
    [content, toggleDrawer]
  )

  return (
    <div className={`${style['mega-menu-drawer-item']}`}>
      <a onClick={anchorAction} className={`${style['mega-menu-drawer-item__content']} ${menuActive}`} href={url}>
        <div className={style['mega-menu-drawer-item__action']}>
          <IconItem className={style['mega-menu-drawer-item__action--icon']} icon={icon} hover={false} size={18} />
          <p>{text}</p>
        </div>
        <IconItem icon={ArrowRight2} hover={false} className={style['mega-menu-drawer-item__arrow']} size={18} />
      </a>

      {content && (
        <MegaMenuJobsDrawer
          content={content.child}
          isOpen={openDrawer}
          title={content.title}
          toggleDrawer={toggleDrawer}
        />
      )}
    </div>
  )
}

const MegaMenuJobsDrawer: React.FC<{
  title: string
  content: ReactNode
  isOpen: boolean
  toggleDrawer: () => void
}> = ({ title, content, isOpen, toggleDrawer }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={() => null}
      customPadding={0}
      isFull
      hideButton
      className={style['mega-menu-drawer']}
    >
      <div className={style['item-drawer__header']}>
        <button className={style['item-drawer__back']} onClick={toggleDrawer}>
          <IconItem icon={ArrowLeft2} hover={false} className={style['item-drawer__back-arrow']} size={18} />
        </button>
        <p className={style['item-drawer__title']}>{title}</p>
      </div>
      <div className={`${style['item-drawer__content']}`}>{content}</div>
    </Drawer>
  )
}

export const MegaMenuDrawerItem = Object.assign(Component, {
  Drawer: MegaMenuJobsDrawer
})
