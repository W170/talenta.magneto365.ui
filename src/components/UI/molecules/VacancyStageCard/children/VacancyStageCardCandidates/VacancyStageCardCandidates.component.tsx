import { Error } from "@constants/icons.constants";
import { classNames } from "@shared/utils/common";
import React, { useCallback, useState } from "react";
import { IconItem } from "../../../../atoms/Icon";
import { IVacancyStageCardCandidates } from "./VacancyStageCardCandidates.interface";
import styles from './VacancyStageCardCandidates.module.scss'

const cx = classNames.bind(styles);


const Component: React.FC<IVacancyStageCardCandidates> = () => {

    return (
        <div className={cx('magneto-ui-vacancy-stage-card-candidates')}>
            <div className={cx('magneto-ui-vacancy-stage-card-candidates__container')}>
                <h1>Cuestionario</h1>
                <h3> ¿Tienes el aval de tu universidad para realizar tus prácticas?</h3>
                <div className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer')}>
                    <IconItem
                        icon={Error}
                        hover={false}
                        className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer__icon')}
                    />
                    <p> Si. tengo el aval para realizar mis prácticas inmediatamente.</p>
                </div>
                <h3>¿Has firmado con anterioridad algún tipo de contrato de aprendizaje?</h3>
                <div className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer')}>
                    <IconItem
                        icon={Error}
                        hover={false}
                        className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer__icon')}
                    />
                    <p>No</p>
                </div>
                <h3>¿Cuál es tu promedio académico acumulado (promedio ponderado)?</h3>
                <div className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer')}>
                    <IconItem
                        icon={Error}
                        hover={false}
                        className={cx('magneto-ui-vacancy-stage-card-candidates__container-answer__icon')}
                    />
                    <p>De 2.6 a 3.5</p>
                </div>
                <h3>Cuentanos sobre tus responsabilidades en tus prácticas</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </p>
            </div>
        </div>
    )
}

export const VacancyStageCardCandidates = Component;