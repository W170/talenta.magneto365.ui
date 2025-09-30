import { useCallback, useRef, useState } from "react";
import { IChat } from "@components/UI/molecules/Chat";
import { IQuestion, IQuestionWithAnswer, TSendQuestion } from "../Questionnaire.interface";

const initilizeQuestions = (questions: IQuestion[]): IQuestionWithAnswer[] => questions.map(q => ({ question: q }))

export const useQuestionnaire = (questionsParam: IQuestion[]) => {
    const [questions] = useState(() => initilizeQuestions(questionsParam))
    const [currentIndex, setCurrentIndex] = useState(0)
    const ref = useRef<IChat.Methods>(null)

    const handleNext = useCallback(() => {
        try {
            const question = questions[currentIndex] ?? null
            setCurrentIndex(prev => prev + 1)
            
            if (question) {
                ref.current?.pushMessage({
                    id: question.question.id,
                    type: question.question.answerType,
                    sender: 'magneto',
                    content: question,
                })
            }
            
            return question
        } catch {
            return null
        }
    }, [])

    const handleSaveAnswer = useCallback((answer: TSendQuestion) => {
        const questionState = ref.current?.snapshot().find(msg => msg.id === answer.id)?.content as IQuestionWithAnswer || undefined
        if (!questionState) return
        
        ref.current?.updateMessage({
            id: questionState.question.id,
            type: 'text',
            sender: 'magneto',
            content: { ...questionState, answer },
        })
    }, [])

    return {
        next: handleNext,
        saveAnswer: handleSaveAnswer,
        reset: () => setCurrentIndex(0),
        chat: ref,
    }
}