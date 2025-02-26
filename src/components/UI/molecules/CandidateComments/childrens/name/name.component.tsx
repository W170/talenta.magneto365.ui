import React, { useContext }  from 'react'
import { IName } from './name.interface'
import { classNames } from '@shared/utils/common'
import styles from './name.module.scss'
import { CandidateCommentsContext } from "../../candidateComments.component";

const cx = classNames.bind(styles);

const Component: React.FC<IName> = ({ name }) => {
    const context = useContext(CandidateCommentsContext);

    if (name) {
      return (
          <div className={cx('name')}>
            {name}
          </div>
      );
    }
    if (context?.data?.length) {
      return (
        <>
          {context.data.map(({ name }, index) => (
            <div className={cx('name')} key={index}>
                {name}
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
  export const Name = Component;
