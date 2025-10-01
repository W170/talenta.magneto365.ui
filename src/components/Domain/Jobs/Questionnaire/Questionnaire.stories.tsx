import React, { useEffect, useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { Questionnaire } from './Questionnaire.component'
import { EQuestionType, IQuestion } from './Questionnaire.interface'
import { useQuestionnaire } from './hooks/useQuestionnaire'
import { QuestionnaireQuestion } from './children/QuestionnaireQuestion'
import { QuestionnaireMessageCandidate } from './children/QuestionnaireMessageCandidate'
import { QuestionnaireUniqueChoice } from './children/QuestionnaireUniqueChoice'
import { QuestionnaireMultipleChoice } from './children/QuestionnaireMultipleChoice'

const meta: Meta<typeof Questionnaire> = {
    title: 'Domain/Jobs/Questionnaire/Questionnaire',
    component: Questionnaire
}
export default meta

type Story = StoryObj<typeof Questionnaire>


const questions: IQuestion[] = [
    {
        id: 1,
        titleQuestion: 'Which design tools do you use?',
        caption: 'Select all that apply',
        answerType: EQuestionType.multiple,
        possibleAnswers: [
            { id: 1, label: 'Adobe Photoshop' },
            { id: 2, label: 'Figma' },
            { id: 3, label: 'Sketch' },
            { id: 4, label: 'InVision' },
            { id: 6, label: 'QuantUX' },
            { id: 7, label: 'UXPin' }
        ],
    },
    {
        id: 2,
        titleQuestion: 'Which design tool do you prefer the most?',
        caption: 'Select one',
        answerType: EQuestionType.unique,
        possibleAnswers: [
            { id: 1, label: 'Adobe Photoshop' },
            { id: 2, label: 'Figma' },
            { id: 3, label: 'Sketch' },
            { id: 4, label: 'InVision' },
            { id: 6, label: 'QuantUX' },
            { id: 7, label: 'UXPin' }
        ],
    },
    {
        id: 3,
        titleQuestion: 'How many years of experience do you have in design?',
        caption: 'Select one',
        answerType: EQuestionType.unique,
        possibleAnswers: [
            { id: 1, label: 'Less than 1 year' },
            { id: 2, label: '1-3 years' },
            { id: 3, label: '3-5 years' },
            { id: 4, label: 'More than 5 years' }
        ],
    }
]

export const Default: Story = {
    args: {},
    render: (args) => {
        const { next, saveAnswer, chat } = useQuestionnaire(questions)

        useEffect(() => {
            next()
        }, [next])

        return (
            <Questionnaire {...args} ref={chat}>
                {messages => (
                    messages.map(({ content, id }) => (
                        <QuestionnaireQuestion key={id} questionWithAnswer={content} >
                            <QuestionnaireMessageCandidate questionWithAnswer={content} onChange={saveAnswer}>
                                {content.question.answerType === EQuestionType.unique && <QuestionnaireUniqueChoice questionWithAnswer={content} onChange={saveAnswer} />}
                                {content.question.answerType === EQuestionType.multiple && <QuestionnaireMultipleChoice questionWithAnswer={content} onChange={saveAnswer} renderSubmitButton={(args) => <button {...args}>Guardar</button>} />}
                            </QuestionnaireMessageCandidate>
                        </QuestionnaireQuestion>
                    ))
                )}
            </Questionnaire>
        )
    }
}