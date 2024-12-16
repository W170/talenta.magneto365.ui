import { classNames } from "@shared/utils/common";
import React from "react";
import { ICandidateProfile } from "../..";
import styles from './CandidateProfileQuickAccess.module.scss';

const cx = classNames.bind(styles);

const Component: React.FC<ICandidateProfile> = ({ details }) => {
    return (
        <div className={cx('magneto-ui-candidate-profile__quick-access')}>
            {details.map((detail, detailIndex) => {
                const {children } = detail;

                return (
                    <div key={detailIndex} className={cx('magneto-ui-candidate-profile__quick-access-section')}>
                        {children.map((child, childIndex) => (
                            <div key={childIndex} className={cx('magneto-ui-candidate-profile__quick-access-group', `flex-${child.direction}`, `gap-${child.separation}`)}>
                                {child.children?.map((item, itemIndex) => (
                                    <div key={itemIndex} className={cx('magneto-ui-candidate-profile__quick-access-item')}>
                                        {item.prefixIcon?.icon && (<span className={cx(`icon-${item.prefixIcon.icon}`)}></span>)}
                                        <p className={cx(`text-${item.size}`, `font-${item.weight}`, `text-${item.color}`)}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export const CandidateProfileQuickAccess = Component;
