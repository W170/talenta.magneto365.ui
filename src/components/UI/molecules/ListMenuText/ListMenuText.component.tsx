import React from 'react'
import { LoadingProps, classMUI } from '@constants/stories.constants'
import { IListMenuText } from './ListMenuText.interface'
import { Loading } from '@components/UI/atoms'
import style from './ListMenuText.module.scss'

const ListMenuText: React.FC<IListMenuText> = ({ title, links, createAccount, isLoading }) => {
  return (
    <div className={`${style[`${classMUI}-list-menu`]}`}>
      <p className={`${style[`${classMUI}-list-menu__title`]}`}>{title}</p>
      {links.map(({ tag, routePath, isCreateAccount }, i) =>
        isCreateAccount ? (
          <div key={i} className={`${style[`${classMUI}-list-menu__create-account`]}`}>
            <button
              title={tag}
              className={`${style[`${classMUI}-list-menu__create-account--btn`]}`}
              onClick={createAccount}
            >
              {tag}
            </button>
            {isLoading && <Loading {...LoadingProps} />}
          </div>
        ) : (
          <a className={`${style[`${classMUI}-list-menu__link`]}`} title={tag} key={i} href={routePath}>
            {tag}
          </a>
        )
      )}
    </div>
  )
}

export default ListMenuText
