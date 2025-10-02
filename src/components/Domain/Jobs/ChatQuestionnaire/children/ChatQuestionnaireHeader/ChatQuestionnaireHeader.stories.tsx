import { StoryObj, Meta } from '@storybook/react'
import { ChatQuestionnaireHeader } from './ChatQuestionnaireHeader.component'

const meta: Meta<typeof ChatQuestionnaireHeader> = {
  title: 'Domain/Jobs/ChatQuestionnaire/ChatQuestionnaireHeader',
  component: ChatQuestionnaireHeader
}
export default meta

type Story = StoryObj<typeof ChatQuestionnaireHeader>

export const Default: Story = {
  args: {
    children: 'Questionnaire Header',
  }
}
