import { CSSProperties } from 'react'

export const toCSSVariables = (input?: any): CSSProperties => {
  const output: Record<string, string> = {}

  if (typeof input !== 'object') {
    return output
  }

  for (const key in input) {
    const cssVar = `--${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`
    output[cssVar] = input[key]
  }

  return output as CSSProperties
}
