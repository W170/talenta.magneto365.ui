import scale from '@shared/tokens/data/scale.json'
import color from '@shared/tokens/data/color.json'
import opacity from '@shared/tokens/data/opacity.json'

export const flattenTokens = (obj: Record<string, any>, prefix: string[] = []): [string, string][] => {
  const entries: [string, string][] = []

  for (const [key, value] of Object.entries(obj)) {
    const path = [...prefix, key]

    if (typeof value === 'string' || typeof value === 'number') {
      entries.push([path.join('-'), value.toString()])
    } else if (typeof value === 'object' && value !== null) {
      entries.push(...flattenTokens(value, path))
    }
  }

  return entries
}

export const evaluateCalc = (value: string): string => {
  const match = value.match(/^calc\((.+)\)\s*\*\s*(\d*\.?\d*\w+)$/)
  if (!match) return value

  const [, expression] = match

  const variables = expression.match(/\d+(\.\d+)?(px|rem|%)?/g)
  if (!variables) return value

  let numericExpr = expression
  for (const variable of variables) {
    const num = parseFloat(variable)
    numericExpr = numericExpr.replace(variable, num.toString())
  }

  try {
    return `${Math.trunc(eval(numericExpr) * 1000) / 1000}rem`
  } catch (e) {
    return value
  }
}

export const resolveValue = (input: string): string => {
  const flatten = (obj: any, prefix: string, path: string[] = []): Record<string, string> =>
    Object.entries(obj).reduce((acc, [key, value]) => {
      const newPath = [...path, key]
      if (typeof value === 'string' || typeof value === 'number') {
        acc[`$${prefix}-${newPath.join('-')}`] = value.toString()
      } else {
        Object.assign(acc, flatten(value, prefix, newPath))
      }
      return acc
    }, {} as Record<string, string>)

  const flattenScales = flatten(scale.values, 'scale')
  const flattenColors = flatten(color.values, 'color')
  const flattenOpacities = flatten(opacity.values, 'opacity')

  const aliases = ['scale', 'color', 'opacity']

  const resolve = (value: string): string => {
    const aliasPattern = aliases.join('|')
    const regex = new RegExp(`(?:(${aliasPattern})\\.)?\\$[\\w-]+`, 'g')

    let prev: string
    do {
      prev = value
      value = value.replace(regex, (match) => {
        const key = match.replace(/^(\w+\.)?/, '')

        return flattenScales[key] || flattenColors[key] || flattenOpacities[key] || match
      })
    } while (value !== prev)

    return value
  }

  return resolve(input)
}
