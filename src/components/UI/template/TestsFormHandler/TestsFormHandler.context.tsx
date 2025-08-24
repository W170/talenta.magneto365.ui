import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { AnswerType } from './children/GlobalQuestion/GlobalQuestion.interface'
import { IFormHandlerContext } from './TestsFormHandlerContext.interface'

const FormHandlerContext = createContext<IFormHandlerContext | undefined>(undefined)

export const FormHandlerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<{ [key: string]: AnswerType }>({})
  const [submitted, setSubmitted] = useState(false)
  const [currentStepQuestions, setCurrentStepQuestions] = useState<{ [key: string]: 'single' | 'multiple' | 'text' }>(
    {}
  )

  const handleChange = useCallback((questionId: string, value: AnswerType) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }))
  }, [])

  const registerQuestion = useCallback((questionId: string, questionType: 'single' | 'multiple' | 'text') => {
    setCurrentStepQuestions((prev) => ({
      ...prev,
      [questionId]: questionType
    }))
  }, [])

  const unregisterQuestion = useCallback((questionId: string) => {
    setCurrentStepQuestions((prev) => {
      const newQuestions = { ...prev }
      delete newQuestions[questionId]
      return newQuestions
    })
  }, [])
  return (
    <FormHandlerContext.Provider
      value={{
        answers,
        submitted,
        currentStepQuestions,
        setSubmitted,
        handleChange,
        registerQuestion,
        unregisterQuestion
      }}
    >
      {children}
    </FormHandlerContext.Provider>
  )
}

export const useFormHandler = () => {
  const context = useContext(FormHandlerContext)
  if (context === undefined) {
    throw new Error('useFormHandler must be used within a FormHandler')
  }
  return context
}

export default FormHandlerProvider
