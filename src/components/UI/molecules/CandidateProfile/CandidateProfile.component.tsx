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

const Component: React.FC<ICandidateProfile> = ({ details }) => {
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
                            userImage="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        />
                        <div className={cx('magneto-ui-candidate-profile__container-header__avatar-title')}>
                            <p>Ultima actualización</p>
                            <h3>Sebastian Cabal Quiroz</h3>
                            <h4>Ingenierio de sistemas</h4>
                        </div>
                    </div>
                    <div className={cx('magneto-ui-candidate-profile__container-header__button')} onClick={handleMenuToggle}>
                        <IconItem icon={ArrowDownGreen} hover={false} className={cx('magneto-ui-candidate-profile__container-header__button-icon')} />
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
