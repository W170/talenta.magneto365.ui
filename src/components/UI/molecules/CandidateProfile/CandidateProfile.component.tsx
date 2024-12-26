import { Avatar } from '../../atoms/Avatar/Avatar.component';
import { classNames } from '@shared/utils/common';
import React, { useState } from 'react';
import { ICandidateProfile } from "./CandidateProfile.interface";
import styles from './CandidateProfile.module.scss';
import { ArrowDownGreen } from '@constants/icons.constants';
import { IconItem } from '../../atoms/Icon'
import { CandidateProfileQuickAccess } from './children/CandidateProfileQuickAccess';
import { CandidateProfileBasic } from './children/CandidateProfileBasic';


const cx = classNames.bind(styles);

const Component: React.FC<ICandidateProfile> = ({ data, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen((prevState) => !prevState);
    };
    const quickAccessDetails = details.filter((data) => data.type === "quick_access");
    const basicDetails = details.filter((data) => data.type === "basic");


    return (
        <div className={cx('magneto-ui-candidate-profile')}>
            <div className={cx('magneto-ui-candidate-profile__container')}>
                <div className={cx('magneto-ui-candidate-profile__container-header')}>
                    <div className={cx('magneto-ui-candidate-profile__container-header__avatar')}>
                        <Avatar
                            onClick={() => { }}
                            userImage={data?.img}
                        />
                        <div className={cx('magneto-ui-candidate-profile__container-header__avatar-title')}>
                            <p>{data?.last_updated}</p>
                            <h3>{data?.name}</h3>
                            <h4>{data?.role}</h4>
                        </div>
                    </div>
                    <div className={cx('magneto-ui-candidate-profile__container-header__button', { 'magneto-ui-candidate-profile__container-header__button--open': isOpen })} onClick={handleMenuToggle}>
                        <IconItem
                            icon={ArrowDownGreen}
                            hover={false}
                            className={cx('magneto-ui-candidate-profile__container-header__button-icon')}
                        />
                    </div>
                </div>
                {isOpen && (
                    <div className={cx('magneto-ui-candidate-profile__container-dropdown')}>
                        {quickAccessDetails.length > 0 && (
                            <CandidateProfileQuickAccess details={quickAccessDetails} />
                        )}
                        {basicDetails.length > 0 && (
                            <CandidateProfileBasic details={basicDetails} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

/**
 * Molecule UI
 */
export const CandidateProfile = Component;
