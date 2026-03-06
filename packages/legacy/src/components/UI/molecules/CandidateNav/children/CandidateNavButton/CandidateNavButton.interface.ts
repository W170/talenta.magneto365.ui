export interface ICandidateNavButton extends React.HTMLAttributes<HTMLButtonElement> {
  toggler?: boolean
  variant?: ICandidateNavButtonVariant
}

export enum ECandidateNavButtonVariant {
  RED = 'red',
  DARK_BLUE = 'dark-blue',
  GRAY = 'gray',
  LEFT = 'left',
  ARROW = 'arrow'
}

export type ICandidateNavButtonVariant = `${ECandidateNavButtonVariant}`
