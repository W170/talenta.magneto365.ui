export interface ICandidateNav extends React.HTMLAttributes<HTMLDivElement> {
  onShow?: (visible: boolean) => void
}

export interface ICandidateNavContext {
  showOptions: boolean
  onChangeOpen: (value?: boolean) => void
}

export interface ICandidateNavProdiver {
  onShow?: (visible: boolean) => void
}
