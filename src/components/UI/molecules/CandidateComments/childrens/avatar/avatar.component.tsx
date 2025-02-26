import React, { useContext }  from 'react'
import { IAvatar } from './avatar.interface'
import { classNames } from '@shared/utils/common'
import styles from './avatar.module.scss'
import { Avatar } from '@components/UI/atoms'
import { CandidateCommentsContext } from "../../candidateComments.component";
const cx = classNames.bind(styles);

const Component: React.FC<IAvatar> = ({ src }) => {
  const context = useContext(CandidateCommentsContext);
  if (src) {
    return (
      <div className={cx("avatar")}>
        <Avatar userImage={src} />
      </div>
    );
  }

  if (context?.data?.length) {
    return (
      <div className={cx("avatar")}>
        {context.data.map((item, index) => (
          <Avatar key={index} userImage={item.src} />
        ))}
      </div>
    );
  }
  return null;
};
/**
 *  Molecule UI component of Candidate Comments
 */
export const AvatarComments = Component
