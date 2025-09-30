import { IQuestionnaireAnswer } from "../../Questionnaire.interface";

export interface IQuestionnaireMultipleChoice extends IQuestionnaireAnswer {
    renderSubmitButton: (options: {
        disabled: boolean;
        className: string;
    }) => React.ReactNode;
}