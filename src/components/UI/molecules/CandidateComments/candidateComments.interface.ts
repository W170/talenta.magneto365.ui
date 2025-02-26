import { ReactElement } from "react"

export  interface ICandidateComments  {
    children: ReactElement
    data: Idata[]
}

interface Idata {
    src: string,
    name: string,
    rating: number ,
    date: string,
    description: string
}

export  interface ICandidateCommentsContext  {
    data: Idata[]
}

