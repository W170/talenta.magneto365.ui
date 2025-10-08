import { useCallback, useRef, useState } from 'react'
import { IChat } from '@components/UI/molecules/Chat'
import { IQuestionWithAnswer, TQuestionnaires, TSendQuestion, TSendQuestionnaire } from '../ChatQuestionnaire.interface'

const initilizeQuestions = (questionnaires: TQuestionnaires[]): IQuestionWithAnswer[] =>
  questionnaires.flatMap((questionnaire) =>
    questionnaire.questions.map<IQuestionWithAnswer>((question) => ({
      questionnaireId: questionnaire.id,
      question,
      answer: undefined,
      mode: 'readonly'
    }))
  )

export const useChatQuestionnaire = (questionsParam: TQuestionnaires[]) => {
  const [questions, setQuestions] = useState(() => initilizeQuestions(questionsParam))
  const currentIndex = useRef(0)
  const [isCompleted, setIsCompleted] = useState(() => questions.length === 0)
  const ref = useRef<IChat.Methods>(null)

  const handleNext = useCallback(() => {
    try {
      const question = questions[currentIndex.current] ?? null
      currentIndex.current += 1

      if (question) {
        ref.current?.pushMessage({
          id: `${question.questionnaireId}-${question.question.id}`,
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
      const { question, questionnaireId } = data

      const questionsRef = ref.current?.snapshot().map((msg) => msg.content as IQuestionWithAnswer) || []

      const questionState = questionsRef.find(
        (q) => q.question.id === question.id && q.questionnaireId === questionnaireId
      )
      if (!questionState) return

      const mode = data.mode ?? questionState.mode
      const answer: TSendQuestion | undefined = data.answer ?? questionState.answer

      ref.current?.updateMessage({
        id: `${questionState.questionnaireId}-${questionState.question.id}`,
        type: 'text',
        sender: 'magneto',
        content: { ...questionState, answer, mode }
      })

      const { [questionsRef.length - 1]: lastQuesiton } = questionsRef

      if (lastQuesiton.question.id === question.id) {
        handleNext()
      }
      setIsCompleted(questionsRef.length === questions.length && mode === 'readonly')
    },
    [handleNext, questions]
  )

  const handleGetAnswers = useCallback((): TSendQuestionnaire[] => {
    return (
      ref.current
        ?.snapshot()
        .map((msg) => msg.content as IQuestionWithAnswer)
        .reduce((acc, curr) => {
          const { answer, questionnaireId } = curr
          if (!answer) return acc
          const index = acc.findIndex((item) => item.id === questionnaireId)
          if (index === -1) {
            acc.push({ id: questionnaireId, questions: [answer] })
          } else {
            acc[index].questions.push(answer)
          }
          return acc
        }, [] as TSendQuestionnaire[]) || []
    )
  }, [])

  const handleReset = useCallback((questionnaire?: TQuestionnaires[]) => {
    currentIndex.current = 0
    ref.current?.clear()
    setQuestions((questions) => {
      if (questionnaire) {
        const newQuestions = initilizeQuestions(questionnaire)
        setIsCompleted(newQuestions.length === 0)
        return newQuestions
      }
      setIsCompleted(questions.length === 0)
      return questions
    })
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
