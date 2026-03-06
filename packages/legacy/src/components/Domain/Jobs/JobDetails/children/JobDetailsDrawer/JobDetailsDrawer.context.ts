import { createContext } from 'react'
import { IJobDetailsDrawerContext } from '.'

export const JobDetailsDrawerContext = createContext<IJobDetailsDrawerContext>({
  onClose: () => undefined
})
