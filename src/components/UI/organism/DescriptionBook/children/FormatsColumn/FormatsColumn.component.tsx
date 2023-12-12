import React, { useCallback, useMemo, useState } from 'react'
import style from './FormatsColumn.module.scss'
import { classMUI } from '@constants/stories'
import { IFormatsColumn } from './FormatsColumn.interface'
import { useMediaQuery } from '@components/hooks'
import { Collapse } from '@components/UI/molecules/Collapse'
import { IListMenuItems } from '@components/UI/molecules'

const Component: React.FC<IFormatsColumn> = ({ formats, subjects, languages }) => {
  const [activeMenu, setActiveMenu] = useState<null | number>(null)
  const languageString = useMemo(() => languages?.values.map(({ name }) => name).join('; '), [languages.values])

  const linksList: IListMenuItems[] = [
    {
      menuList: [{ url: '', text: 'details', slug: '' }],
      urlParam: ''
    }
  ]

  const toggleMenu = useCallback(
    (index: number) => {
      if (activeMenu === index) {
        setActiveMenu(null)
      } else {
        setActiveMenu(index)
      }
    },
    [activeMenu]
  )

  const formatColumsContent = useMediaQuery(
    <div className={style[`${classMUI}-formats-column`]}>
      {formats.text ? (
        <div className={style[`${classMUI}-formats-column__items`]}>
          <h6>{formats.text}</h6>
          {formats.values.length ? formats.values.map(({ id, name }) => <p key={id}>{name}</p>) : null}
        </div>
      ) : null}
      {subjects.text ? (
        <a className={`${style[`${classMUI}-formats-column__items`]}`}>
          <h6>{subjects.text}</h6>
          <div className={style[`${classMUI}-formats-column__links`]}>
            {subjects.values.length ? subjects.values.map(({ value }, index) => <a key={index}>{value}</a>) : null}
          </div>
        </a>
      ) : null}
      {languages.text ? (
        <div className={style[`${classMUI}-formats-column__items`]}>
          <h6>{languages.text}</h6>
          <p>{languageString}</p>
        </div>
      ) : null}
    </div>,
    {
      sm: (
        <div className={`${style[`${classMUI}-collapse-menu-container`]}`}>
          {linksList.map(({ ...props }, i) => (
            <React.Fragment key={i}>
              <Collapse isOpen={activeMenu === i} onClick={() => toggleMenu(i)} {...props} />
            </React.Fragment>
          ))}
        </div>
      )
    }
  )

  return <React.Fragment> {formatColumsContent}</React.Fragment>
}

export const FormatsColumn = Component
