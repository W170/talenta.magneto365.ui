import { Meta, StoryObj } from "@storybook/react"
import {CandidateActivity} from "./CandidateActivity.component"
import {candidateActivity} from "@constants/stories/candidateActivity.constants"
const meta: Meta<typeof CandidateActivity> = {
    title: 'Organism/ Candidate Activity',
    component: CandidateActivity,
    args: {
        ...candidateActivity
    }
}

export default meta

type Story = StoryObj<typeof CandidateActivity>

export const Default: Story = {}