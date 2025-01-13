import React from 'react'
import { classNames } from '@shared/utils/common'
import { IComment } from './Comment.interface'
import { Avatar } from '@components/UI/atoms'
import styles from './Comment.module.scss'

const cx = classNames.bind(styles)

const Component: React.FC<IComment> = ({ avatar, name, date, detail, description }) => {
  return (
    <article className={cx('magneto-ui-comment')}>
      <div className={cx('magneto-ui-comment__container')}>
        <header className={cx('magneto-ui-comment__header')}>
          <Avatar {...avatar} />
          <h4 className={cx('magneto-ui-comment__name')}>{name}</h4>
          <h5 className={cx('magneto-ui-comment__info')}>{date}</h5>
          {detail && <h5 className={cx('magneto-ui-comment__info')}>{detail}</h5>}
        </header>
        <p className={cx('magneto-ui-comment__description')}>{description}</p>
      </div>
    </article>
  )
}

/**
 * Molecule UI component of comment
 */
export const Comment = Component
