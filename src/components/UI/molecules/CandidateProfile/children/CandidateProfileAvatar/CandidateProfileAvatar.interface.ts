import { IAvatar, IRatingBadge } from '@components/UI/atoms'

export interface ICandidateProfileAvatar extends React.HTMLAttributes<HTMLDivElement> {
  avatar: IAvatar
  score?: IRatingBadge['score']
}
