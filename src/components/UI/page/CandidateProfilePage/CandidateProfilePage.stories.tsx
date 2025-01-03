import { Meta, StoryObj } from '@storybook/react'
import {CandidateProfilePage} from "../../page";
import {candidateOverviewProps, candidateProfile, expandableInfoProps} from "../../../../constants/stories";
import {HorizontalMenuPropsOptions} from "../../../../constants/stories/horizontalMenu.constant";
import {ICandidateBarProps} from "../../../../constants/stories/CandidateNavigationBar";


const meta: Meta<typeof CandidateProfilePage> = {
    title: 'Pages/Candidate Profile Page',
    component: CandidateProfilePage,
    args: {
        expandableInfoProps,
        candidateOverviewProps,
        candidateProfileProps: candidateProfile,
        horizontalMenuProps: HorizontalMenuPropsOptions,
        candidateNavigationBarProps: ICandidateBarProps
    }
}

export default meta

type Story = StoryObj<typeof CandidateProfilePage>

export const Default: Story = {}
