export interface IFieldHint extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  type: 'hint' | 'warning' | 'error' | 'success'
}
