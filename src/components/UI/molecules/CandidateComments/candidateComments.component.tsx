import React, { createContext } from 'react'
import { ICommentsMobile } from './candidateComments.interface'
import { classNames } from '@shared/utils/common'
import styles from './candidateComments.module.scss'
import { ContentCommets } from './childrens/contentCommet/contentComment.component'
import * as children from './childrens'
const cx = classNames.bind(styles)

export const CommentsContext = createContext<ICommentsMobile | undefined>(undefined)

const Component: React.FC<ICommentsMobile> = ({ children, data }) => {
  return (
    <CommentsContext.Provider value={{ data }}>
      <div className={cx('candidateComments')}>
        {children ? (
          children
        ) : (
          <>
            {data && data?.length > 0 ? (
              <ContentCommets />
            ) : (
              <div className={cx('candidateComments_noRatings')}>Sin valoraciones</div>
            )}
          </>
        )}
      </div>
    </CommentsContext.Provider>
  )
}
/**
 *  Molecule UI component of Candidate Comments
 */

export const CandidateComments = Object.assign(Component, children)
