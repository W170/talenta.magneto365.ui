import React, { useContext }  from 'react'
import { IRating } from './rating.interface'
import { classNames } from '@shared/utils/common'
import styles from './rating.module.scss'
import { CommentsMobileContext } from "../../candidateComments.component";
import { StartDark } from '@constants/icons.constants'
const cx = classNames.bind(styles);

const Component: React.FC<IRating> = ({ rating }) => {
    const context = useContext(CommentsMobileContext);

    if (rating) {
      return (
        <div className={cx("rating")}>
          <img src={StartDark} />
          <div className={cx('rating_number')}>
            {rating.toFixed(1)}
          </div>
        </div>
      );
    }
    if (context?.data?.length) {
      return (
        <>
          {context.data.map(({ rating }: IRating, index: number) => (
            <div className={cx("rating")} key={index}>
              <img src={StartDark} />
              <div className={cx('rating_number')}>
                {rating && rating.toFixed(1)}
              </div>
            </div>
          ))}
        </>
      );
    }
    return null;
  };
  /**
   *  Molecule UI component of Candidate Comments
   */
  export const Rating = Component;
