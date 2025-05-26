export type IDesignSystem = {
  values: IDesignSystemValues
  utilities?: IDesignSystemUtilities
  docs?: IDesignSystemDocs
}

export type IDesignSystemValues = {
  [key: string]: string | number | IDesignSystemValues
}

export type IDesignSystemUtilities = {
  imports?: IDesignSystemImport[]
  classes?: IDesignSystemClass[]
}

export type IDesignSystemImport = {
  file: string
  alias?: string
}

export type IDesignSystemClass = {
  name: string
  prefix: string
  conditions?: IDesignSystemConditions
  properties: IDesignSystemProperty[]
}

export type IDesignSystemConditions = {
  excludeValues?: string[]
  removeFromClass?: string[]
}

export type IDesignSystemProperty = {
  property: string
}

export type IDesignSystemDocs = {
  [key: string]: string | boolean | number
}
