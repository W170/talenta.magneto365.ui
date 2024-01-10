import { ICollectionSection } from '@components/UI/organism'
import { IHeaderSection } from './children/headerSection/HeaderSection.interface'

export interface IOvedrivePage {
  header: IHeaderSection
  collectionSection: ICollectionSection[]
}
