export type PossibleAnswer = {
  id: number
  titleAnswer: string
}

export type TCloseAnswer = {
  id: number
  answer: number[]
  type: number
}

export type TQuestion = {
  id: number
  titleQuestion: string
  answerType: number
  possibleAnswers: PossibleAnswer[]
}

export type TUniqueQuestion = {
  question: TQuestion
  onChange: (answer: TCloseAnswer) => void
  /**
   * this property displays the answer options
   */
  showOptions: boolean
  textHelp: string
  className?: {
    component?: string
    buble?: string
    answers?: string
    question?: string
    textHelp?: string
    option?: string
  }
}
