import { TInputFile } from '@components/UI/atoms/InputFile/inputFile.interface'
import { TInputFileButton } from '@components/UI/atoms/InputFile/children/InputFileButton/InputFileButton.interface'

export interface ICandidateDocuments {
  classname?: string
  errorMessage: string
  inputFileInterfaceProps: TInputFile
  inputFileButton: TInputFileButton
  inputFileText: string
  child: ICandidateDocumentSection[]
}

export interface ICandidateDocumentSection {
  sectionTitle: string
  sectionChild: ICandidateDocumentChildren
}

export interface ICandidateDocumentChildren {
  title?: string
  child: ICandidateDocumentItem[]
}

export interface ICandidateDocumentItem {
  icon: string
  title: string
  info: string
}
