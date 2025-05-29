import { ImageCard } from '@components/UI/molecules'
import { cityCards } from '@constants/stories'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Carousel } from './Carousel.component'
const { Header, Items } = Carousel
const meta: Meta<typeof Carousel> = {
  title: 'Organism/Carousel',
  component: Carousel
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      <Header>
        <div>
          <h2>Descubre las mejores ofertas de trabajo cerca de ti.</h2>
          <p>Te conectamos con vacantes disponibles en todas las ciudades de Colombia.</p>
        </div>
      </Header>

      {cityCards.map((card, index) => (
        <Items key={index}>
          <ImageCard
            dimensions={{ width: 146, height: 176 }}
            title={card.title}
            description={card.description}
            imagePath={card.imagePath}
            alt={card.alt}
            link={card.link}
          />
        </Items>
      ))}
    </Carousel>
  ),
  args: {
    autoScroll: true,
    mobileScrollable: true,
    scrollInterval: 15,
    itemsPerSection: 5,
    gap: 16,
    maxContainerWidth: '1000px'
  }
}
