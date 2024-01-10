interface IHeaderChildren {
  component: React.FC<any>
  props: any
}

export interface IHeaderChilds {
  firstSection: IHeaderChildren[]
  secondSection: IHeaderChildren[]
}
export interface IHeaderSection {
  firstSection: IHeaderChildren[]
  secondSection: IHeaderChildren[]
}
