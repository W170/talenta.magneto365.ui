import React from 'react'
import {
    ICandidateDocuments,
    ICandidateDocumentChildren, ICandidateDocumentItem
} from '@components/UI/molecules/CandidatesFiles/CandidateDocuments.interface'
import { InputFile } from '@components/UI/atoms/InputFile/InputFile.component'
import style from './CandidateDocuments.module.scss'
import { IconItem } from '@components/UI/atoms'

const DocumentItem: React.FC<ICandidateDocumentItem> = ({ title, icon, info }) => (
  <div className={style['magneto-ui-candidate-documents__item']}>
    <IconItem icon={icon} />
    <div className={style['magneto-ui-candidate-documents__item--info']}>
      <p>{title}</p>
      <span>{info}</span>
    </div>
  </div>
)

const DocumentGroup: React.FC<ICandidateDocumentChildren> = ({ title, child }) => (
  <div className={style['magneto-ui-candidate-documents__group']}>
    {title && <p>{title}</p>}
    {child.map((doc, index) => (
      <DocumentItem key={index} title={doc.title} icon={doc.icon} info={doc.info} />
    ))}
  </div>
)

const CandidateDocuments: React.FC<ICandidateDocuments> = ({
  classname = '',
  inputFileInterfaceProps,
  inputFileButton,
  inputFileText,
  child
}) => {
  return (
    <div className={`${style['magneto-ui-candidate-documents__container']} ${classname}`}>
      <InputFile onFileSelect={inputFileInterfaceProps.onFileSelect}>
        <InputFile.Text text={inputFileText.text} className={inputFileText.className} />
        <InputFile.Button
          text={inputFileButton.text}
          icon={inputFileButton.icon}
          className={inputFileButton.className}
        />
      </InputFile>

      {child.map((section, index) => (
        <div key={index} className={style['magneto-ui-candidate-documents__section']}>
          {section.sectionTitle && <p>{section.sectionTitle}</p>}
          <DocumentGroup title={section.sectionChild.title} child={section.sectionChild.child} />
        </div>
      ))}
    </div>
  )
}

export { CandidateDocuments }
