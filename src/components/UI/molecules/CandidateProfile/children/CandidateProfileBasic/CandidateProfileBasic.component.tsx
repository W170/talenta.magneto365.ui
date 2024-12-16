import { classNames } from '@shared/utils/common';
import React from 'react';
import { ICandidateProfile } from '../..';
import styles from './CandidateProfileBasic.module.scss';

const cx = classNames.bind(styles);

const Component: React.FC<ICandidateProfile> = ({ details }) => {
    return (
        <div className={cx('magneto-ui-candidate-profile__basic')}>
            {details.map((detail, detailIndex) => {
                if (detail.type !== "basic") return null;

                const { title, children } = detail;

                return (
                    <div key={detailIndex} className={cx('magneto-ui-candidate-profile__basic-section')}>
                        <h2
                            className={cx(
                                `text-${title?.size}`,
                                `font-${title?.weight}`,
                                `text-${title?.color}`
                            )}
                        >
                            {title?.value}
                        </h2>

                        {children.map((child, childIndex) => (
                            <div
                                key={childIndex}
                                className={cx('magneto-ui-candidate-profile__basic-group', `flex-${child.direction}`, `gap-${child.separation}`)}
                            >
                                {child.children?.map((item, itemIndex) => (
                                    <div key={itemIndex} className={cx('magneto-ui-candidate-profile__basic-item')}>
                                        {item.prefixIcon?.icon && (
                                            <span className={cx(`magneto-ui-candidate-profile__basic-icon-${item.prefixIcon.icon}`)}></span>
                                        )}

                                        <p
                                            className={cx(
                                                `magneto-ui-candidate-profile__basic-text-${item.size}`,
                                                `magneto-ui-candidate-profile__basic-text-font-${item.weight}`,
                                                `magneto-ui-candidate-profile__basic-text-text-${item.color}`
                                            )}
                                        >
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

export const CandidateProfileBasic = Component;
