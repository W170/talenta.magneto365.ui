import { StoryObj, Meta } from '@storybook/react'
import { QuestionnaireHeader } from './QuestionnaireHeader.component'

const meta: Meta<typeof QuestionnaireHeader> = {
  title: 'Domain/Jobs/Questionnaire/QuestionnaireHeader',
  component: QuestionnaireHeader
}
export default meta

type Story = StoryObj<typeof QuestionnaireHeader>

export const Default: Story = {
  args: {
    children: 'Questionnaire Header',
  }
}
