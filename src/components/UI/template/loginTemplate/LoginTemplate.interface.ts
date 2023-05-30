import { IAvatar } from '../../atoms'
import { IBreadcrumbs, IHeaderTabs } from '../../molecules'
import { IListMenuItems } from '../../molecules/ListMenuItems/ListMenuItems.interface'
import { IlistMenuUserProps } from '../../organism/LoginHeader'
export interface ILoginTemplate {
  className?: string
  listMenuProps: IListMenuItems
  listMenuUserProps: IlistMenuUserProps
  breadcrumbsProps: IBreadcrumbs
  profileImage: IAvatar
  jobsTabsProps: IHeaderTabs
  processTabsProps: IHeaderTabs
  curriculumTabProps: IHeaderTabs
}
