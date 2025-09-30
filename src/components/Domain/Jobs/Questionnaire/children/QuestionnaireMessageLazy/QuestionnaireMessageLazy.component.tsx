import React, { useState, useEffect, useRef } from 'react'
import { IQuestionnaireMessageLazy } from './QuestionnaireMessageLazy.interface'
import { Chat } from '@components/UI/molecules/Chat'

const waitFor = (ms: number) =>
  new Promise((res) => {
    setTimeout(() => res(undefined), ms)
  })

export const QuestionnaireMessageLazy: React.FC<IQuestionnaireMessageLazy> = ({
  children,
  waitFor: waitForTime = 500,
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const onLoadRef = useRef(onLoad)

  useEffect(() => {
    onLoadRef.current = onLoad
  }, [onLoad])

  useEffect(() => {
    async function wait() {
      await waitFor(waitForTime)
      setIsLoading(false)
      onLoadRef.current?.()
    }

    wait()
  }, [waitForTime])

  if (isLoading) return <Chat.LoadingDots />

  return <>{children}</>
}
