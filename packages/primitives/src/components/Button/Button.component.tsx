import React, { forwardRef } from 'react'
import { IButton } from './Button.interface'

const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  )
})

Button.displayName = 'Button'

export { Button }
