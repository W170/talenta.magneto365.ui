import React, { useMemo } from 'react'
import style from './ByAuthor.module.scss'
import { classMUI } from '@constants/stories'
import { IByAuthor } from './ByAuthor.interface'

const Component: React.FC<IByAuthor> = ({ authors, byText }) => {
  const author = useMemo(() => (authors?.length ? authors.find(({ role }) => role === 'author') : null), [authors])

  return (
    <div className={style[`${classMUI}-by-author`]}>
      {author?.name ? (
        <span className={style[`${classMUI}-by-author__author`]}>
          <span className={style[`${classMUI}-by-author__author span`]}>{byText}</span>
          <a className={style[`${classMUI}-by-author__author--name`]} href="">
            <b>{author?.name}</b>
          </a>
        </span>
      ) : null}
    </div>
  )
}

/**
 * UI Atom component of By Author
 */

export const ByAuthor = Component
