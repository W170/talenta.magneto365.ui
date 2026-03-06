import { IAvatar, IRatingBadge } from '@components/UI/atoms'

export interface ICandidateProfileAvatar extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>, IAvatar {
  score?: IRatingBadge['score']
}
