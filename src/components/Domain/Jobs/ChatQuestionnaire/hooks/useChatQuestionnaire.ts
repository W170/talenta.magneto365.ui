import { useCallback, useRef, useState } from 'react'
import { IChat } from '@components/UI/molecules/Chat'
import { IQuestionWithAnswer, TQuestionnaires, TSendQuestion, TSendQuestionnaire, EQuestionType } from '../ChatQuestionnaire.interface'

const initilizeQuestions = (questionnaires: TQuestionnaires[]): IQuestionWithAnswer[] =>
  questionnaires.flatMap((questionnaire) =>
    questionnaire.questions.map<IQuestionWithAnswer>((question) => ({
      questionnaireId: questionnaire.id,
      question,
      answer: undefined,
      mode: 'readonly'
    }))
  )

const hasValidAnswer = (questionWithAnswer: IQuestionWithAnswer): boolean => {
  const { answer } = questionWithAnswer
  if (!answer) return false

  switch (answer.type) {
    case EQuestionType.openShort:
    case EQuestionType.openLong:
      return answer.openAnswer.trim().length > 0
    case EQuestionType.unique:
    case EQuestionType.multiple:
      return answer.answer.length > 0
    default:
      return false
  }
}

const isQuestionnaireCompleted = (
  chatQuestions: IQuestionWithAnswer[],
  totalQuestions: number
): boolean =>
  totalQuestions === 0 ||
  (chatQuestions.length === totalQuestions &&
    chatQuestions.every((q) => q.mode === 'readonly' && hasValidAnswer(q)))

export const useChatQuestionnaire = (questionsParam: TQuestionnaires[]) => {
  const [questions, setQuestions] = useState(() => initilizeQuestions(questionsParam))
  const currentIndex = useRef(0)
  const [isCompleted, setIsCompleted] = useState(() => isQuestionnaireCompleted([], questions.length))
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

      const updatedContent: IQuestionWithAnswer = { ...questionState, answer, mode }

      ref.current?.updateMessage({
        id: `${questionState.questionnaireId}-${questionState.question.id}`,
        type: 'text',
        sender: 'magneto',
        content: updatedContent
      })

      let chatQuestions = questionsRef.map((q) =>
        q.question.id === question.id && q.questionnaireId === questionnaireId ? updatedContent : q
      )

      const { [chatQuestions.length - 1]: lastQuesiton } = chatQuestions

      if (lastQuesiton?.question.id === question.id) {
        const nextQuestion = handleNext()
        if (nextQuestion) {
          chatQuestions = [...chatQuestions, nextQuestion]
        }
      }

      setIsCompleted(isQuestionnaireCompleted(chatQuestions, questions.length))
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
        setIsCompleted(isQuestionnaireCompleted([], newQuestions.length))
        return newQuestions
      }
      setIsCompleted(isQuestionnaireCompleted([], questions.length))
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
