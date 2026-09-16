
export interface IChatQuestionnaireShort extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    maxLength: number
    classNames?: {
        container?: string
        field?: string
        counter?: string
    }
    renderRight?: (props: { classNameBtnSend: string, icon: React.ReactElement }) => React.ReactNode
}
