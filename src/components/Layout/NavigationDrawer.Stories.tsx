import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NavigationDrawer from './NavigationDrawer.Component'

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer
} as ComponentMeta<typeof NavigationDrawer>

const Template: ComponentStory<typeof NavigationDrawer> = (args) => <NavigationDrawer {...(args as never)} />

export const HelloDrawer = Template.bind({})
HelloDrawer.storyName = 'Mounting drawer'
HelloDrawer.args = {
  lang: 'es-CO',
  visible: true,
  placement: 'left',
  width: 300,
  onClose: () => console.info('Closing drawer'),
  queryString: {
    lng: 'es-CO',
    access_token: 'YWJjMTIz'
  }
}

export const ChangeRegion = Template.bind({})

ChangeRegion.storyName = 'On Change Region'
ChangeRegion.args = {
  lang: 'es-CO',
  visible: true,
  placement: 'left',
  width: 300,
  onClose: () => console.info('Closing drawer')
}
