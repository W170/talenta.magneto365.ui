import { IQuestionnaireAnswer } from "../../ChatQuestionnaire.interface";

export interface IChatQuestionnaireMultipleChoice extends IQuestionnaireAnswer {
    renderSubmitButton: (options: {
        disabled: boolean;
        className: string;
    }) => React.ReactNode;
}