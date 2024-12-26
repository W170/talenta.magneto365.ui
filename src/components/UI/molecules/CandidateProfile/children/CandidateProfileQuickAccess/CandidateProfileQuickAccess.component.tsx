import { classNames } from "@shared/utils/common";
import React from "react";
import { ICandidateProfile } from "../..";
import { candidateProfileIcons, candidateProfileLabels, quickAccessIcon } from "../../CandidateProfile.constanst";
import styles from './CandidateProfileQuickAccess.module.scss';

const cx = classNames.bind(styles);

const Component: React.FC<ICandidateProfile> = ({ details }) => {
    return (
        <div className={cx('magneto-ui-candidate-profile__quick-access')}>
            {details.map((detail, detailIndex) => {
                const { children } = detail;
                return (
                    <div key={detailIndex} className={cx('magneto-ui-candidate-profile__quick-access-section')}>
                        {children.map((child, childIndex) => (
                            <div key={childIndex} className={cx('magneto-ui-candidate-profile__quick-access-group', `flex-${child.direction}`, `gap-${child.separation}`)}>
                                {child.children?.map((item, itemIndex) => {
                                    const iconKey = item.prefixIcon?.icon;
                                    const IconComponent = candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] ? candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] : candidateProfileIcons[quickAccessIcon[itemIndex] as keyof typeof candidateProfileIcons];
                                    const label = candidateProfileLabels[itemIndex] || "";
                                    return (
                                        <div key={itemIndex} className={cx('magneto-ui-candidate-profile__quick-access-item')}>
                                            {IconComponent && (
                                                <img src={IconComponent} alt={`${iconKey} icon`} className={cx('magneto-ui-candidate-profile__quick-access-icon')} />
                                            )}
                                            <p className={cx('magneto-ui-candidate-profile__quick-access-label')}>{label}</p>
                                            <p className={cx('magneto-ui-candidate-profile__quick-access-text')}>
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

export const CandidateProfileQuickAccess = Component;
