import React, { useRef } from 'react'
import { useWithElement } from './index'
import { Meta, StoryObj } from '@storybook/react'

const getStylesProps = (background: string, maxWidth = '100%') => ({
  height: 50,
  display: 'grid',
  placeItems: 'center',
  background,
  maxWidth
})

const Demo = () => {
  const ref1 = useRef<HTMLDivElement>(null)
  const width1 = useWithElement(ref1)

  const ref2 = useRef<HTMLDivElement>(null)
  const width2 = useWithElement(ref2)

  const ref3 = useRef<HTMLDivElement>(null)
  const width3 = useWithElement(ref3)
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={getStylesProps('oklch(0.577 0.245 27.325)')} ref={ref1}>
        {width1}
      </div>
      <div style={getStylesProps('oklch(0.546 0.245 262.881)', '1000px')} ref={ref2}>
        {width2}
      </div>
      <div style={getStylesProps('oklch(0.541 0.281 293.009)', '700px')} ref={ref3}>
        {width3}
      </div>
    </article>
  )
}
/**
 * This hook allows to observe the html element width using react ref.
 */
const meta: Meta<typeof Demo> = {
  title: 'Hooks/useWithElement',
  component: Demo
}

export default meta

type Story = StoryObj<typeof Demo>

export const Default: Story = {}
