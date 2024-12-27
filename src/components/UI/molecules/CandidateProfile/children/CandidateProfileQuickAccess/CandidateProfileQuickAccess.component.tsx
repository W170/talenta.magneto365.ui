import { classNames } from "@shared/utils/common";
import React, { useCallback } from "react";
import { ICandidateProfile, ICandidateProfileText } from "../../CandidateProfile.interface";
import { candidateProfileIcons, quickAccessIcon } from "../../CandidateProfile.constanst";
import parentStyles from '../../CandidateProfile.module.scss';
import styles from './CandidateProfileQuickAccess.module.scss';

const pcx = classNames.bind(parentStyles);
const cx = classNames.bind(styles);

const Component: React.FC<ICandidateProfile> = ({ details }) => {
    const textStyle = useCallback((text?: ICandidateProfileText) => {
        return pcx(
            'magneto-ui-candidate-profile__text',
            text?.size && `magneto-ui-candidate-profile__text--size-${text.size}`,
            text?.color && `magneto-ui-candidate-profile__text--color-${text.color}`,
            text?.weight && `magneto-ui-candidate-profile__text--weight-${text.weight}`,
            text?.separation && `magneto-ui-candidate-profile__text--separation-${text.separation}`
        )
    }, []);

return (
    <div className={cx('magneto-ui-candidate-profile__quick-access')}>
        {details.map((detail, detailIndex) => {
            const { children } = detail;
            return (
                <div key={detailIndex} className={cx('magneto-ui-candidate-profile__quick-access-section')}>
                    {children.map((child, childIndex) => (
                        <div key={childIndex} className={cx('magneto-ui-candidate-profile__quick-access-group')}>
                            {child.children?.map((item, itemIndex) => {
                                const iconKey = item.prefixIcon?.icon;
                                const IconComponent = candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] ? candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] : candidateProfileIcons[quickAccessIcon[itemIndex] as keyof typeof candidateProfileIcons];
                                return (
                                    <div key={itemIndex} className={cx('magneto-ui-candidate-profile__quick-access-item')}>
                                        {IconComponent && (
                                            <img src={IconComponent} alt={`${iconKey} icon`} className={cx('magneto-ui-candidate-profile__quick-access-icon')} />
                                        )}
                                        <p className={textStyle(item)}>{item?.data}</p>
                                        <p className={textStyle(item)}>{item.value}</p>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            );
        })}
    </div >
);
};

export const CandidateProfileQuickAccess = Component;
