import React, { useCallback } from 'react'
import { ICandidateActivity } from './CandidateActivity.interface'
import styles from './CandidateActivity.module.scss'
import { VacancyProcessCard } from '../../molecules/VacancyProcessCard/VacancyProcessCard.component'
import { VacancyStageCard } from '../../molecules/VacancyStageCard/VacancyStageCard.component'
import { classNames } from '@shared/utils/common'
import { ICandidateActivityText } from '.'

const cx = classNames.bind(styles)

const Component: React.FC<ICandidateActivity> = ({ candidateDetail }) => {
  const currentProcess = candidateDetail.process.find((process) => process.title.value === 'Proceso actual')
  const otherProcesses = candidateDetail.process.filter((process) => process.title.value === 'Otros procesos')

  const textStyle = useCallback((text?: ICandidateActivityText) => {
    return cx(
      'magneto-ui-candidate-activity__text',
      text?.size && `magneto-ui-candidate-activity__text--size-${text.size}`,
      text?.color && `magneto-ui-candidate-activity__text--color-${text.color}`,
      text?.weight && `magneto-ui-candidate-activity__text--weight-${text.weight}`
    )
  }, [])
  return (
    <div className={cx('magneto-ui-candidate-activity')}>
      <div className={cx('magneto-ui-candidate-activity__container')}>
        <div className={cx('magneto-ui-candidate-activity__container-header')}>
          <h1 className={textStyle(candidateDetail.vacancyOrigin)}>{candidateDetail.vacancyOrigin.value}</h1>
          <p className={textStyle(candidateDetail.date)}>{candidateDetail.date.data}</p>
        </div>
        <div className={cx('magneto-ui-candidate-activity__container-current-process')}>
          <h1 className={textStyle(currentProcess?.title)}>{currentProcess?.title.value}</h1>
          {currentProcess && currentProcess.vacancyDetail && (
            <VacancyProcessCard vacancyDetail={currentProcess.vacancyDetail[0]}>
              {currentProcess.vacancyDetail[0].children.map((stage, stageIndex) => (
                <VacancyStageCard key={stageIndex} stageDetail={stage.stageDetail} />
              ))}
            </VacancyProcessCard>
          )}
        </div>
        <div>
          {otherProcesses.map((process, processIndex) => (
            <div className={cx('magneto-ui-candidate-activity__container-other-process')} key={processIndex}>
              <h1 className={textStyle(process.title)}>{process.title.value}</h1>
              {process.vacancyDetail.map((vacancyDetail, vacancyIndex) => (
                <VacancyProcessCard key={`${processIndex}-${vacancyIndex}`} vacancyDetail={vacancyDetail}>
                  {vacancyDetail.children.map((stage, stageIndex) => (
                    <VacancyStageCard key={stageIndex} stageDetail={stage.stageDetail} />
                  ))}
                </VacancyProcessCard>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CandidateActivity = Component
