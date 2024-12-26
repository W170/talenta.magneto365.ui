import { classNames } from '@shared/utils/common';
import React from 'react';
import { ICandidateProfile } from '../..';
import { basicIcon, candidateProfileIcons } from '../../CandidateProfile.constanst';
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
                        <h2 className={cx('magneto-ui-candidate-profile__basic-title')}>
                            {title?.value}
                        </h2>

                        {children.map((child, childIndex) => (
                            <div key={childIndex} className={cx('magneto-ui-candidate-profile__basic-group', `flex-${child.direction}`, `gap-${child.separation}`)}>
                                {child.children?.map((item, itemIndex) => {
                                    const iconKey = item.prefixIcon?.icon;
                                    const IconComponent = candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] ? candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] : candidateProfileIcons[basicIcon[itemIndex] as keyof typeof candidateProfileIcons];
                                    return (
                                        <div key={itemIndex} className={cx('magneto-ui-candidate-profile__basic-item')}>
                                            {IconComponent && (
                                                <img src={IconComponent} alt={`${iconKey} icon`} className={cx('magneto-ui-candidate-profile__basic-icon')} />
                                            )}
                                            <p className={cx('magneto-ui-candidate-profile__basic-text')}>
                                                {item.value}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export const CandidateProfileBasic = Component;
