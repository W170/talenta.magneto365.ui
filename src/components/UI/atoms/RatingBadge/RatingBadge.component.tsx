import { classNames } from "@shared/utils/common";
import React from "react"
import { IRatingBadge } from "."
import styles from './RatingBadge.module.scss';
import { Start } from "@constants/icons.constants";
const cx = classNames.bind(styles);

const Component: React.FC<IRatingBadge> = ({ score }) => {
    return (
        <div className={cx('magneto-ui-rating-badge')}>
            <div className={cx('magneto-ui-rating-badge__container')}>
                <img src={Start} alt={Start} className={cx('magneto-ui-rating-badge__icon')} />
                <p className={cx('magneto-ui-rating-badge__score')}>{score}</p>
            </div>
        </div>
    )
}

export const RatingBadge = Component