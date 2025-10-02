import { useCallback, useRef, useState } from "react";
import { IChat } from "@components/UI/molecules/Chat";
import { IQuestion, IQuestionWithAnswer, TSendQuestion } from "../ChatQuestionnaire.interface";

const initilizeQuestions = (questions: IQuestion[]): IQuestionWithAnswer[] => questions.map(q => ({ question: q, mode: 'readonly' }))

export const useChatQuestionnaire = (questionsParam: IQuestion[]) => {
    const [questions] = useState(() => initilizeQuestions(questionsParam))
    const currentIndex = useRef(0)
    const ref = useRef<IChat.Methods>(null)

    const handleNext = useCallback(() => {
        try {
            const question = questions[currentIndex.current] ?? null
            currentIndex.current += 1
            
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
    }, [questions])

    const handleSaveAnswer = useCallback((data: IQuestionWithAnswer) => {
        const { question } = data

        const questions = ref.current?.snapshot().map(msg => msg.content as IQuestionWithAnswer) || []

        const questionState = questions.find(q => q.question.id === question.id)
        if (!questionState) return

        const mode = data.mode ?? questionState.mode
        const answer: TSendQuestion | undefined = data.answer ?? questionState.answer

        ref.current?.updateMessage({
            id: questionState.question.id,
            type: 'text',
            sender: 'magneto',
            content: { ...questionState, answer, mode },
        })

        const { [questions.length - 1]: lastQuesiton } = questions

        if  (lastQuesiton.question.id === question.id) {
            handleNext()    
        }
    }, [handleNext])

    return {
        next: handleNext,
        saveAnswer: handleSaveAnswer,
        reset: () => {
            currentIndex.current = 0
        },
        chat: ref,
    }
}