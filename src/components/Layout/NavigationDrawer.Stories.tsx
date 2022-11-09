import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NavigationDrawer from './NavigationDrawer.Component'
import 'antd/dist/antd.compact.css'

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
  args: {
    lang: 'es-CO',
    visible: true,
    placement: 'left',
    width: 300,
    onClose: action('onClose'),
    onRegionChange: action('onRegionChange'),
    queryString: {
      lng: 'es-CO',
      access_token: 'YWJjMTIz'
    }
  }
} as ComponentMeta<typeof NavigationDrawer>

const Template: ComponentStory<typeof NavigationDrawer> = (args) => <NavigationDrawer {...(args as never)} />

export const MountDrawer = Template.bind({})
MountDrawer.storyName = 'Mounting drawer'

export const ChangeRegion = Template.bind({})
ChangeRegion.storyName = 'Select Region'
