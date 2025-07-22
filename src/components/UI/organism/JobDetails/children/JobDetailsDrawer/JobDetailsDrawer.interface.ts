import { IDrawer } from '@components/UI/molecules'

export type IJobDetailsDrawer = Omit<IDrawer, 'hideButton' | 'direction' | 'fit-content' | 'customPadding'>
