import React, { useRef } from 'react'
import style from './InputFile.module.scss'
import { InputFileText, InputFileButton } from './index'
import { IInputFileInterface } from '@components/UI/atoms/InputFile/inputFile.interface'

const Component: React.FC<IInputFileInterface> = ({ children, className, onFileSelect }) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null)

  const handleFileClick = () => {
    inputFileRef.current?.click()
  }

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = Array.from(event.dataTransfer.files)
    if (files.length && onFileSelect) {
      onFileSelect(files)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length && onFileSelect) {
      onFileSelect(files)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }
  return (
    <div
      className={`${style['magneto-ui-input-file--container']} ${className}`}
      onClick={handleFileClick}
      onDrop={handleFileDrop}
      onDragOver={handleDragOver}
    >
      {children}
      <input
        type="file"
        ref={inputFileRef}
        style={{ display: 'none' }} // Oculta el input
        onChange={handleFileChange}
        multiple
      />
    </div>
  )
}

export const InputFile = Object.assign(Component, {
  Text: InputFileText,
  Button: InputFileButton
})
