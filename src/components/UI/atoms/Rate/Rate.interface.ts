export interface IOptionCheck {
  type: string
  id: string
  name: string
  value: number
  checked?: boolean
  onChange: () => void
}

export interface IRate {
  score?: number
  numberRates: number
  setScore: (index: number) => void
}
