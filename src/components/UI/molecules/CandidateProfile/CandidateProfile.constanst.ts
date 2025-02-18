import { ICandidateProfileText } from './CandidateProfile.interface'
import parentStyles from './CandidateProfile.module.scss'
import { classNames } from '@shared/utils/common'

import {
  BuildingWhite,
  Date,
  DollarCircleWhiteOutline,
  EmailSquare,
  LocationBlueBold,
  Mobile,
  PeopleInfo,
  Position,
  Teacher,
  UserTag
} from '@constants/icons.constants'

export const candidateProfileIcons: { [key: string]: string } = {
  company: BuildingWhite,
  role: UserTag,
  position: Position,
  date: Date,
  people: PeopleInfo,
  location: LocationBlueBold,
  mobile: Mobile,
  teacher: Teacher,
  email: EmailSquare,
  dollar: DollarCircleWhiteOutline
}

export const FONT_STYLES = {
  lastUpdated: [
    'magneto-ui-candidate-profile__text',
    'magneto-ui-candidate-profile__text--size-xs',
    'magneto-ui-candidate-profile__text--weight-normal',
    'magneto-ui-candidate-profile__text--color-gray'
  ],
  name: [
    'magneto-ui-candidate-profile__text',
    'magneto-ui-candidate-profile__text--size-lg',
    'magneto-ui-candidate-profile__text--weight-black',
    'magneto-ui-candidate-profile__text--color-white'
  ],
  lastName: [
    'magneto-ui-candidate-profile__text',
    'magneto-ui-candidate-profile__text--size-lg',
    'magneto-ui-candidate-profile__text--weight-normal',
    'magneto-ui-candidate-profile__text--color-white'
  ],
  role: [
    'magneto-ui-candidate-profile__text',
    'magneto-ui-candidate-profile__text--size-lg',
    'magneto-ui-candidate-profile__text--weight-normal',
    'magneto-ui-candidate-profile__text--color-green'
  ],
  quickAccess: {
    title: [
      'magneto-ui-candidate-profile__text',
      'magneto-ui-candidate-profile__text--size-xs',
      'magneto-ui-candidate-profile__text--weight-normal',
      'magneto-ui-candidate-profile__text--color-white'
    ],
    info: [
      'magneto-ui-candidate-profile__text',
      'magneto-ui-candidate-profile__text--size-xs',
      'magneto-ui-candidate-profile__text--weight-black',
      'magneto-ui-candidate-profile__text--color-white'
    ]
  },
  section: {
    header: [
      'magneto-ui-candidate-profile__text',
      'magneto-ui-candidate-profile__text--size-md',
      'magneto-ui-candidate-profile__text--weight-normal',
      'magneto-ui-candidate-profile__text--color-green'
    ],
    info: {
      white: [
        'magneto-ui-candidate-profile__text',
        'magneto-ui-candidate-profile__text--size-sm',
        'magneto-ui-candidate-profile__text--weight-normal',
        'magneto-ui-candidate-profile__text--color-white'
      ],
      blue: [
        'magneto-ui-candidate-profile__text',
        'magneto-ui-candidate-profile__text--size-sm',
        'magneto-ui-candidate-profile__text--weight-normal',
        'magneto-ui-candidate-profile__text--color-blue'
      ]
    }
  }
}

export const pcx = classNames.bind(parentStyles)

export const textStyle = (text?: ICandidateProfileText, defaultStyle?: string[]) => {
  return pcx(
    ...(defaultStyle || []),
    'magneto-ui-candidate-profile__text',
    text?.size && `magneto-ui-candidate-profile__text--size-${text.size}`,
    text?.color && `magneto-ui-candidate-profile__text--color-${text.color}`,
    text?.weight && `magneto-ui-candidate-profile__text--weight-${text.weight}`,
    text?.separation && `magneto-ui-candidate-profile__text--separation-${text.separation}`
  )
}
