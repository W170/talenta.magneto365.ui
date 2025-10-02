import { useCallback, useRef, useState } from 'react'
import { IChat } from '@components/UI/molecules/Chat'
import { IQuestion, IQuestionWithAnswer, TSendQuestion } from '../ChatQuestionnaire.interface'

const initilizeQuestions = (questions: IQuestion[]): IQuestionWithAnswer[] =>
  questions.map((q) => ({ question: q, mode: 'readonly' }))

export const useChatQuestionnaire = (questionsParam: IQuestion[]) => {
  const [questions] = useState(() => initilizeQuestions(questionsParam))
  const currentIndex = useRef(0)
  const [isCompleted, setIsCompleted] = useState(() => questions.length > 0)
  const ref = useRef<IChat.Methods>(null)

  const checkIsCompleted = useCallback(() => {
    if (!(currentIndex.current >= questions.length)) return false

    const questionsWithAnswers = ref.current?.snapshot().map((msg) => msg.content as IQuestionWithAnswer) || []
    return questionsWithAnswers.every((q) => Boolean(q.answer))
  }, [questions])

  const handleNext = useCallback(() => {
    try {
      const question = questions[currentIndex.current] ?? null
      currentIndex.current += 1

      if (question) {
        ref.current?.pushMessage({
          id: question.question.id,
          type: question.question.answerType,
          sender: 'magneto',
          content: question
        })
      }

      return question
    } catch {
      return null
    }
  }, [questions])

  const handleSaveAnswer = useCallback(
    (data: IQuestionWithAnswer) => {
      const { question } = data

      const questions = ref.current?.snapshot().map((msg) => msg.content as IQuestionWithAnswer) || []

      const questionState = questions.find((q) => q.question.id === question.id)
      if (!questionState) return

      const mode = data.mode ?? questionState.mode
      const answer: TSendQuestion | undefined = data.answer ?? questionState.answer

      ref.current?.updateMessage({
        id: questionState.question.id,
        type: 'text',
        sender: 'magneto',
        content: { ...questionState, answer, mode }
      })

      setIsCompleted(checkIsCompleted())

      const { [questions.length - 1]: lastQuesiton } = questions

      if (lastQuesiton.question.id === question.id) {
        handleNext()
      }
    },
    [handleNext, checkIsCompleted]
  )

  const handleGetAnswers = useCallback(() => {
    const questionsWithAnswers = ref.current?.snapshot().map((msg) => msg.content as IQuestionWithAnswer) || []
    return questionsWithAnswers.map(({ question, answer }) => ({ question, answer }))
  }, [])

  const handleReset = useCallback(() => {
    currentIndex.current = 0
    ref.current?.clear()
  }, [])

  return {
    next: handleNext,
    getAnswers: handleGetAnswers,
    saveAnswer: handleSaveAnswer,
    reset: handleReset,
    isCompleted: isCompleted,
    chat: ref
  }
}
