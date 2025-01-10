import { IVacancyStageCard } from "./VacancyStageCard.interface";
import React, { useCallback, useState } from "react";
import styles from './VacancyStageCard.module.scss'
import { classNames } from "@shared/utils/common";
import { IconItem } from "../../atoms/Icon";
import { ArrowDown2, ArrowSwapVertical } from "@constants/icons.constants";
import { IVacancyStageCardText } from ".";
import { VacancyStageCardCandidates } from "./children/VacancyStageCardCandidates/VacancyStageCardCandidates.component";

const cx = classNames.bind(styles);

const Component: React.FC<IVacancyStageCard> = ({ stageDetail }) => {
    const textStyle = useCallback((text?: IVacancyStageCardText) => {
        return cx('magneto-ui-vacancy-stage-card__text',
            text?.size && `magneto-ui-vacancy-stage-card__text--size-${text.size}`,
            text?.color && `magneto-ui-vacancy-stage-card__text--color-${text.color}`,
            text?.weight && `magneto-ui-vacancy-stage-card__text--weight-${text.weight}`,
        )
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <div className={cx('magneto-ui-vacancy-stage-card')}>
            <div className={cx('magneto-ui-vacancy-stage-card__container', { 'magneto-ui-vacancy-stage-card__container--open': isOpen })}>
                <div className={cx('magneto-ui-vacancy-stage-card__container-header')}>
                    <div className={cx('magneto-ui-vacancy-stage-card__container-header__title')}>
                        <div className={cx('magneto-ui-vacancy-stage-card__container-header__vacancyIcon')}>
                            <IconItem
                                icon={ArrowSwapVertical}
                                hover={false}
                                className={cx('magneto-ui-vacancy-stage-card__container-header__icon')}
                            />
                        </div>
                        <div>
                            <p className={textStyle(stageDetail.date)}>{stageDetail?.date.value}</p>
                            <h3 className={textStyle(stageDetail.title)}>{stageDetail?.title.value}</h3>
                            <p className={textStyle(stageDetail.email)}>{stageDetail?.email.value}</p>
                        </div>
                    </div>
                    <div className={cx('magneto-ui-vacancy-stage-card__container-header__button', { 'magneto-ui-vacancy-stage-card__container-header__button--open': isOpen })} onClick={handleMenuToggle}>
                        <IconItem
                            icon={ArrowDown2}
                            hover={false}
                            className={cx('magneto-ui-vacancy-stage-card__container-header__icon')}
                        />
                    </div>
                </div>
                {isOpen && (
                    stageDetail.children.children.length > 0 ? (
                        <VacancyStageCardCandidates />
                    ) : (
                        <div className={cx('magneto-ui-vacancy-stage-card__container-not-data')}>
                            <p>El candidato aún no ha proporcionado estos datos</p>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export const VacancyStageCard = Component;