import React, { useState } from 'react'
import styles from './TestsFormHandler.module.scss'
import { IFormHandler } from './TestsFormHandler.interface'
import { Button, IconItem } from '@components/UI/atoms'
import { DocumentText } from '@constants/icons.constants'
import { FormHandlerProvider, useFormHandler } from './TestsFormHandler.context'
import { validateCurrentStepAnswers } from '@utils/validateAnswers/validateStepAnswers'

const TestFormHandler: React.FC<IFormHandler> = ({
  multiStep = false,
  className,
  onSubmit,
  isDisabled = false,
  children,
  totalSteps = 1,
  currentStep,
  onStepChange
}) => {
  return (
    <FormHandlerProvider>
      <FormHandlerInner
        multiStep={multiStep}
        className={className}
        onSubmit={onSubmit}
        isDisabled={isDisabled}
        totalSteps={totalSteps}
        currentStep={currentStep}
        onStepChange={onStepChange}
      >
        {children}
      </FormHandlerInner>
    </FormHandlerProvider>
  )
}

const FormHandlerInner: React.FC<IFormHandler> = ({
  multiStep = false,
  className,
  onSubmit,
  isDisabled = false,
  children,
  totalSteps = 1,
  currentStep,
  onStepChange
}) => {
  const { answers, currentStepQuestions, setSubmitted } = useFormHandler()
  const [internalStep, setInternalStep] = useState<number>(0)
  const step = currentStep !== undefined ? currentStep : internalStep
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    onSubmit(answers)
  }
  const handleNextStep = () => {
    const allAnswered = validateCurrentStepAnswers(currentStepQuestions, answers)
    if (!allAnswered) {
      setSubmitted(true)
      return
    }
    setSubmitted(false)
    if (onStepChange) {
      onStepChange(step + 1)
    } else {
      setInternalStep(step + 1)
    }
  }
  const handlePreviousStep = () => {
    setSubmitted(false)
    if (onStepChange) {
      onStepChange(step - 1)
    } else {
      setInternalStep(step - 1)
    }
  }
  return (
    <div className={`${className} ${styles['magneto-ui-form-container']}`}>
      <form onSubmit={handleSubmit}>
        <div className={styles['magneto-ui-form-container-questions']}>{children}</div>
        <div className={styles['magneto-ui-form-container-controlpanel']}>
          <div>
            {multiStep && step > 0 && (
              <Button
                className={`${styles['magneto-ui-form-container-controlpanel__actionButton']} ${
                  isDisabled ? styles['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''
                }`}
                buttonText="Anterior"
                onClick={handlePreviousStep}
                disabled={isDisabled}
              />
            )}
          </div>
          <div>
            {multiStep && (
              <div className={styles['magneto-ui-form-container-controlpanel__steps']}>
                <IconItem icon={DocumentText} size={25} />
                <p>{`${step + 1} / ${totalSteps}`}</p>
              </div>
            )}
          </div>
          <div>
            {multiStep && step < totalSteps - 1 && (
              <Button
                className={styles['magneto-ui-form-container-controlpanel__actionButton']}
                buttonText="Siguiente"
                onClick={handleNextStep}
              />
            )}
            {(!multiStep || step === totalSteps - 1) && (
              <Button
                className={`${styles['magneto-ui-form-container-controlpanel__actionButton']} ${
                  isDisabled ? styles['magneto-ui-form-container-controlpanel__actionButton--disabled'] : ''
                }`}
                type="submit"
                buttonText="Enviar"
                disabled={isDisabled}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default TestFormHandler
