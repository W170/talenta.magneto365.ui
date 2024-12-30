import { classNames } from '@shared/utils/common';
import React, { useCallback } from 'react';
import { ICandidateProfile, ICandidateProfileText } from '../..';
import { basicIcon, candidateProfileIcons } from '../../CandidateProfile.constanst';
import parentStyles from '../../CandidateProfile.module.scss';
import styles from './CandidateProfileBasic.module.scss';

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
        <div className={cx('magneto-ui-candidate-profile__basic')}>
            {details.map((detail, detailIndex) => {
                if (detail.type !== "basic") return null;
                const { title, children } = detail;

                return (
                    <div key={detailIndex} className={cx('magneto-ui-candidate-profile__basic-section')}>
                        <h2 className={textStyle(title)}> {title?.value} </h2>
                        {children.map((child, childIndex) => (
                            <div key={childIndex}>
                                {child.children?.map((item, itemIndex) => {
                                    const iconKey = item.prefixIcon?.icon;
                                    const IconComponent = candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] ? candidateProfileIcons[iconKey as keyof typeof candidateProfileIcons] : candidateProfileIcons[basicIcon[itemIndex] as keyof typeof candidateProfileIcons];
                                    return (
                                        <div key={itemIndex} className={cx('magneto-ui-candidate-profile__basic-item')}>
                                            {IconComponent && (
                                                <img src={IconComponent} alt={`${iconKey} icon`} className={cx('magneto-ui-candidate-profile__basic-icon')} />
                                            )}
                                            <p className={textStyle(item)}> {item.value}</p>
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
