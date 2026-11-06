/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ChatQuestionnaireOpen } from './ChatQuestionnaireOpen.component';

const meta: Meta<typeof ChatQuestionnaireOpen> = {
    title: 'Domain/Jobs/ChatQuestionnaire/ChatQuestionnaireOpen',
    component: ChatQuestionnaireOpen,
}

export default meta;

type Story = StoryObj<typeof ChatQuestionnaireOpen>;

export const Short: Story = {
    args: {
        maxLength: 120,
    },

    render: (args) => {
        const [value, setQuestion] = useState(args.value ?? args.defaultValue)
                
        return <ChatQuestionnaireOpen 
            {...args} 
            value={value}
            onChange={({ target }) => setQuestion(target.value)}
            renderRight={({ classNameBtnSend, icon }) => <button className={classNameBtnSend}>{icon}</button>}    
        />
    },
};


export const Long: Story = {
    args: {
        maxLength: 2500,
        defaultValue: 'Primera linea \nSegunda Linea\nTercera Linea'
    },
        render: (args) => {
        const [value, setQuestion] = useState(args.value)
                
        return <ChatQuestionnaireOpen 
            {...args}
            value={value}
            onChange={({ target }) => setQuestion(target.value)}
            renderRight={({ classNameBtnSend, icon }) => <button className={classNameBtnSend}>{icon}</button>}    
        />
    },
}


