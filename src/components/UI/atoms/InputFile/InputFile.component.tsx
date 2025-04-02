import React, { useRef } from 'react'
import { TInputFile } from '@components/UI/atoms/InputFile/inputFile.interface'
import { classNames } from '@shared/utils/common'
import { Button, Container } from './children'
import style from './InputFile.module.scss'

const cx = classNames.bind(style)

const Component: React.FC<TInputFile> = ({ children, className, onChange, ...props }) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null)

  const handleFileClick = () => {
    inputFileRef.current?.click()
  }

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const files = event.dataTransfer.files

    if (files.length && inputFileRef.current) {
      const dataTransfer = new DataTransfer()
      Array.from(files).forEach((file) => dataTransfer.items.add(file))

      inputFileRef.current.files = dataTransfer.files

      inputFileRef.current.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div className={cx(className)} onClick={handleFileClick} onDrop={handleFileDrop} onDragOver={handleDragOver}>
      {children}
      <input
        className={cx('magneto-ui-input-file')}
        onChange={handleFileChange}
        ref={inputFileRef}
        type="file"
        {...props}
      />
    </div>
  )
}

/**
 * Atom UI component of Input File
 */
export const InputFile = Object.assign(Component, {
  Button,
  Container
})
