import React, { useContext }  from 'react'
import { IDescription } from './description.interface'
import { classNames } from '@shared/utils/common'
import styles from './description.module.scss'
import { CommentsMobileContext } from "../../candidateComments.component";

const cx = classNames.bind(styles);

const Component: React.FC<IDescription> = ({ description }) => {
    const context = useContext(CommentsMobileContext);

    if (description) {
      return (
          <div className={cx('description')}>{description}</div>
      );
    }
    if (context?.data?.length) {
      return (
        <>
          {context.data.map(({ description }: IDescription, index: number) => (
            <div className={cx('description')} key={index}>
                {description}
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
  export const Description = Component;
