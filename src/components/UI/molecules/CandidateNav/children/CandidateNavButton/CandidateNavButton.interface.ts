export interface ICandidateNavButton extends React.HTMLAttributes<HTMLButtonElement> {
  toggler?: boolean
  variant?: ECandidateNavButtonVariant
}

export enum ECandidateNavButtonVariant {
  RED = 'red',
  DARK_BLUE = 'dark_blue',
  GRAY = 'gray',
  LEFT = 'left'
}
