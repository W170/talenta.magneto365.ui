import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ECandidateState, ImageCarousel } from './'
import { carouselProps } from '@constants/stories/carousel.constants'
import { MainButton } from '@components/UI/atoms'

const meta: Meta<typeof ImageCarousel> = {
  title: 'Organism/Image Carousel',
  component: ImageCarousel,
  args: {
    title: '¡Crea tu hoja de vida y accede a miles de libros gratis!',
    titleFinished: 'Libros recomendados',
    values: carouselProps,
    buttonAction: <MainButton buttonText="Crear cuenta" />,
    candidateState: ECandidateState.FINISHED
  }
}
export default meta

type Story = StoryObj<typeof ImageCarousel>

export const Default: Story = {}
