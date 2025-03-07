import React, { Fragment, useContext } from 'react'
import { classNames } from '@shared/utils/common'
import styles from './contentComment.module.scss'
import { Name } from '../name/name.component'
import { Rating } from '../rating/rating.component'
import { DateCommets } from '../date/date.component'
import { Description } from '../description/description.component'
import { AvatarComments } from '../avatar/avatar.component'
import { CommentsContext } from '../../candidateComments.component'
const cx = classNames.bind(styles)

const Component: React.FC<unknown> = () => {
  const context = useContext(CommentsContext)
  return (
    <div className={cx('contentCommet')}>
      {context?.data?.map(({ src, name, rating, date, description }, index) => (
        <Fragment key={index}>
          <div className={cx('contentCommet-title')}>
            <AvatarComments src={src} />
            <Name name={name} />
            <Rating rating={rating} />
            <DateCommets date={date} />
          </div>
          <div className={cx('contentCommet-decription')}>
            <Description description={description} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}
/**
 *  Molecule UI component of Candidate Comments
 */
export const ContentCommets = Component
