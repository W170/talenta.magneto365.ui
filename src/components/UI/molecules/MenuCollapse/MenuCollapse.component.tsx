import React, { Fragment, useCallback, useState } from 'react'
import { IMenuCollapse } from './MenuCollapse.interface'
import MenuCollapseChildren from './children/MenuCollapseChildren.component'
import { classMUI } from '@constants/stories'
import style from './MenuCollapse.module.scss'

const MenuCollapse: React.FC<IMenuCollapse> = ({ listMenu }) => {
  const { legalMenu, magnetoLiteMenu, magnetoMenu, otherSolutionsMenu, personsMenu } = listMenu

  const linksList = [personsMenu, magnetoMenu, magnetoLiteMenu, otherSolutionsMenu, legalMenu]

  const [menuActivo, setMenuActivo] = useState<null | number>(null)

  const toggleMenu = useCallback(
    (index: number) => {
      if (menuActivo === index) {
        setMenuActivo(null)
      } else {
        setMenuActivo(index)
      }
    },
    [menuActivo]
  )

  return (
    <div className={`${style[`${classMUI}-collapse-menu-container`]}`}>
      {linksList.map(({ ...props }, i) => (
        <Fragment key={i}>
          <MenuCollapseChildren isOpen={menuActivo === i} onClick={() => toggleMenu(i)} {...props} />
        </Fragment>
      ))}
    </div>
  )
}

export default MenuCollapse
