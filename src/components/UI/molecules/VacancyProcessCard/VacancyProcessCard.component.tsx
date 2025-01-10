import { IVacancyProcessCard, IVacancyProcessCardText } from ".";
import React, { useCallback, useState } from "react";
import styles from './VacancyProcessCard.module.scss'
import { classNames } from "@shared/utils/common";
import { IconItem } from "../../atoms/Icon";
import { ArrowDown2 } from "@constants/icons.constants";

const cx = classNames.bind(styles);

const Component: React.FC<IVacancyProcessCard> = ({ vacancyDetail, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsOpen((prevState) => !prevState);
    };
    const textStyle = useCallback((text?: IVacancyProcessCardText) => {
        return cx('magneto-ui-vacancy-process-card__text',
            text?.size && `magneto-ui-vacancy-process-card__text--size-${text.size}`,
            text?.color && `magneto-ui-vacancy-process-card__text--color-${text.color}`,
            text?.weight && `magneto-ui-vacancy-process-card__text--weight-${text.weight}`,
        )
    }, []);
    return (
        <div className={cx('magneto-ui-vacancy-process-card')}>
            <div className={cx('magneto-ui-vacancy-process-card__container')}>
                <div className={cx('magneto-ui-vacancy-process-card__container-header')}>
                    <div className={cx('magneto-ui-vacancy-process-card__container-header__text')}>
                        <h3 className={textStyle(vacancyDetail.title)}>{vacancyDetail.title?.value}</h3>
                        <p className={textStyle(vacancyDetail.date)}>{vacancyDetail.date?.value}</p>
                        <p className={textStyle(vacancyDetail.stage)}>{vacancyDetail.stage?.value}</p>
                        <p className={textStyle(vacancyDetail.status)}>{vacancyDetail.status?.value}</p>
                    </div>
                    <div className={cx('magneto-ui-vacancy-process-card__container-header__button')} onClick={handleMenuToggle}>
                        <IconItem
                            icon={ArrowDown2}
                            hover={false}
                            className={cx('magneto-ui-vacancy-process-card__container-header__button-icon')}
                        />
                    </div>
                </div>
                {isOpen && (children)}
            </div>
        </div>
    )
};

export const VacancyProcessCard = Component;