import { CSSProperties } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toCSSVariables = (input?: any): CSSProperties => {
  const output: Record<string, string> = {}

  if (typeof input !== 'object') {
    return output
  }

  for (const key in input) {
    const cssVar = `--${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`
    if (typeof input[key] !== 'boolean') output[cssVar] = input[key]
  }

  return output as CSSProperties
}
