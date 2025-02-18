import { IInputFileInterface } from '@components/UI/atoms/InputFile/inputFile.interface'
import { IInputFileButton } from '@components/UI/atoms/InputFile/children/InputButton/InputFileButton.interface'
import { IInputFileText } from '@components/UI/atoms/InputFile/children/InputText/InputFileText.interface'

export interface ICandidateDocuments {
  classname?: string
  inputFileInterfaceProps: IInputFileInterface
  inputFileButton: IInputFileButton
  inputFileText: IInputFileText
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
