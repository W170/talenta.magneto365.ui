export interface IFieldArea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  textareaClassName?: string
  wrapper?: Omit<React.HTMLAttributes<HTMLSpanElement>, 'className'>
}
