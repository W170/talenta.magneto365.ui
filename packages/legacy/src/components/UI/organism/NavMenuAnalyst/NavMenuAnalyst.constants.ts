import {
  AdvertisementBold,
  AdvertisementOutline,
  BookBlueBold,
  BookWhiteOutline,
  BriefcaseBlueBold,
  BriefcaseWhiteOutline,
  DocTextBlueBold,
  DocTextWhiteOutline,
  DollarCircleBlueBold,
  DollarCircleWhiteOutline,
  GridBlueBold,
  GridWhiteOutline,
  HomeBlueBold,
  HomeWhiteOutline,
  ImageBlueBold,
  ImageWhiteOutline,
  PeopleBlueBold,
  PeopleWhiteOutline,
  SettingBlueBold,
  SettingWhiteOutline,
  TaskBlueBold,
  TaskWhiteOutline,
  UserSearchBlueBold,
  UserSearchWhiteOutline
} from '@constants/icons.constants'

export const navMenuAnalystIcons: { [key: string]: { normal: string; active: string } } = {
  home: {
    normal: HomeWhiteOutline,
    active: HomeBlueBold
  },
  requestVacancies: {
    normal: TaskWhiteOutline,
    active: TaskBlueBold
  },
  vacancies: {
    normal: BriefcaseWhiteOutline,
    active: BriefcaseBlueBold
  },
  candidatesCatalogue: {
    normal: UserSearchWhiteOutline,
    active: UserSearchBlueBold
  },
  resources: {
    normal: ImageWhiteOutline,
    active: ImageBlueBold
  },
  settings: {
    normal: SettingWhiteOutline,
    active: SettingBlueBold
  },
  users: {
    normal: PeopleWhiteOutline,
    active: PeopleBlueBold
  },
  dashboard: {
    normal: GridWhiteOutline,
    active: GridBlueBold
  },
  reports: {
    normal: DocTextWhiteOutline,
    active: DocTextBlueBold
  },
  userManual: {
    normal: BookWhiteOutline,
    active: BookBlueBold
  },
  plans: {
    normal: DollarCircleWhiteOutline,
    active: DollarCircleBlueBold
  },
  socialMediaRecruiting: {
    normal: AdvertisementOutline,
    active: AdvertisementBold
  }
}
