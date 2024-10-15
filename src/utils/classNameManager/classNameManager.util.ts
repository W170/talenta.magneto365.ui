import { classMUI } from '@constants/stories'

interface IStylesConfig {
  cls: (string | string[] | null | boolean | undefined)[]
  styles?: { [key: string]: string }
}

class CNM {
  static get({ cls, styles }: IStylesConfig): string {
    const appliedStyles = styles || {}

    const validClassNames = CNM.getValidClassNames(cls.flat(Infinity) as (string | null | false | undefined)[])

    if (validClassNames.length === 0) return ''

    const classNamesArray = CNM.classNamesToArray(appliedStyles, ...validClassNames)

    return classNamesArray.join(' ')
  }

  static getValidClassNames(cls: (string | null | false | undefined)[]): (string | null | false | undefined)[] {
    return cls.filter((cn) => cn !== null && cn !== false && cn !== undefined && typeof cn === 'string')
  }

  static classNamesToArray(
    styles: { [key: string]: string },
    ...cls: (string | null | false | undefined)[]
  ): (string | null | false | undefined)[] {
    return cls.map((cn) => styles[`${classMUI ? `${classMUI}-` : ''}${cn}`] || cn)
  }
}

export default CNM
