import React, {createContext} from 'react'
import { ICandidateComments, ICandidateCommentsContext } from './candidateComments.interface'
import { classNames } from '@shared/utils/common'
import styles from './candidateComments.module.scss'
import { AvatarComments } from './childrens/avatar/avatar.component'
import { Rating } from './childrens/rating/rating.component'
import { Name } from './childrens/name/name.component'
import { DateCommets } from './childrens/date/date.component'
import { Description } from './childrens/description/description.component'
const cx = classNames.bind(styles);

export const CandidateCommentsContext = createContext<ICandidateCommentsContext | undefined>(undefined);

const Component: React.FC<ICandidateComments> = ({ children, data = [] }) => {
  return (
    <CandidateCommentsContext.Provider value={{ data }}>
      <div className={cx("candidateComments")}>
        {data.length > 0 ? (
          <div className={cx("candidateComments_ratings")}>
            {data.map(({src, name, rating, date, description }, index) => (
              <>
                 <div className={cx("candidateComments_ratings-title")}>
                  <AvatarComments key={index} src={src} />
                  <Name name={name}/>
                  <Rating rating={rating}/>
                  <DateCommets date={date}/>
                </div>
                <div className={cx("candidateComments_ratings-decription")}>
                  <Description description={description}/>
                </div>
              </>
           
            ))}
          </div>
        ) : children ? (children) : (
          <div className={cx("candidateComments_noRatings")}>Sin valoraciones</div>
        )}
      </div>
    </CandidateCommentsContext.Provider>
  );
};
/**
 *  Molecule UI component of Candidate Comments
 */

export const CandidateComments = Object.assign(Component, { avatar: AvatarComments, nameCommets: Name, ratingCommets:Rating, dateCommets:DateCommets  });

