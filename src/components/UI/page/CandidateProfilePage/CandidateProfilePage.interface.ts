import {
    ICandidateNavigationBar,
    ICandidateOverviewProps,
    IExpandableInfoProps,
    IHorizontalMenu
} from "@components/UI/molecules";
import {ICandidateProfile} from "@components/UI/molecules/CandidateProfile";

export interface ICandidateProfilePage {

    horizontalMenuProps: IHorizontalMenu

    candidateProfileProps: ICandidateProfile

    expandableInfoProps?: IExpandableInfoProps

    candidateOverviewProps: ICandidateOverviewProps

    candidateNavigationBarProps: ICandidateNavigationBar
}