import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { DesignSystem } from './DesignSystem.component'
import {
  DesignSystemBorder,
  DesignSystemColor,
  DesignSystemGap,
  DesignSystemMargin,
  DesignSystemOpacity,
  DesignSystemPadding,
  DesignSystemRadius,
  DesignSystemScreen,
  DesignSystemShadow,
  DesignSystemText,
  DesignSystemScale,
  DesignSystemUtilityClass
} from './children'

const meta: Meta<typeof DesignSystem> = {
  title: 'Design System',
  parameters: {
    docs: {
      page: null,
      description: {
        component: `Design system showcase. Here you can find things such as colors, borders, gaps, margins, opacities, paddings, radius, screens, shadows, texts, scales and utility classes. Use the first column of each table to use the design system. Design system is NOT exported as a React component.`
      }
    }
  },
  component: DesignSystem
}

export default meta

type Story = StoryObj<typeof DesignSystem>

export const Default: Story = {
  render: () => <DesignSystem />
}

type ColorStory = StoryObj<typeof DesignSystemColor>

export const Color: ColorStory = {
  parameters: {
    docs: {
      description: {
        story: 'Color design system showcase.'
      }
    }
  },
  render: () => <DesignSystemColor />
}

type BorderStory = StoryObj<typeof DesignSystemBorder>

export const Border: BorderStory = {
  parameters: {
    docs: {
      description: {
        story: 'Border design system showcase.'
      }
    }
  },
  render: () => <DesignSystemBorder />
}

type GapStory = StoryObj<typeof DesignSystemGap>

export const Gap: GapStory = {
  parameters: {
    docs: {
      description: {
        story: 'Gap design system showcase.'
      }
    }
  },
  render: () => <DesignSystemGap />
}

type MarginStory = StoryObj<typeof DesignSystemMargin>

export const Margin: MarginStory = {
  parameters: {
    docs: {
      description: {
        story: 'Margin design system showcase.'
      }
    }
  },
  render: () => <DesignSystemMargin />
}

type OpacityStory = StoryObj<typeof DesignSystemOpacity>

export const Opacity: OpacityStory = {
  parameters: {
    docs: {
      description: {
        story: 'Opacity design system showcase.'
      }
    }
  },
  render: () => <DesignSystemOpacity />
}

type PaddingStory = StoryObj<typeof DesignSystemPadding>

export const Padding: PaddingStory = {
  parameters: {
    docs: {
      description: {
        story: 'Padding design system showcase.'
      }
    }
  },
  render: () => <DesignSystemPadding />
}

type RadiusStory = StoryObj<typeof DesignSystemRadius>

export const Radius: RadiusStory = {
  parameters: {
    docs: {
      description: {
        story: 'Radius design system showcase.'
      }
    }
  },
  render: () => <DesignSystemRadius />
}

type ScreenStory = StoryObj<typeof DesignSystemScreen>

export const Screen: ScreenStory = {
  parameters: {
    docs: {
      description: {
        story: 'Screen design system showcase. Resize your window to see how it works.'
      }
    }
  },
  render: () => <DesignSystemScreen />
}

type ShadowStory = StoryObj<typeof DesignSystemShadow>

export const Shadow: ShadowStory = {
  parameters: {
    docs: {
      description: {
        story: 'Shadow design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShadow />
}

type TextStory = StoryObj<typeof DesignSystemText>

export const Text: TextStory = {
  parameters: {
    docs: {
      description: {
        story: 'Text design system showcase.'
      }
    }
  },
  render: () => <DesignSystemText />
}

type ScaleStory = StoryObj<typeof DesignSystemScale>

export const Scale: ScaleStory = {
  parameters: {
    docs: {
      description: {
        story: 'Scale design system showcase.'
      }
    }
  },
  render: () => <DesignSystemScale />
}

type UtilityClassesStory = StoryObj<typeof DesignSystemUtilityClass>

export const UtilityClass: UtilityClassesStory = {
  parameters: {
    docs: {
      description: {
        story: 'Utility classes design system showcase.'
      }
    }
  },
  render: () => <DesignSystemUtilityClass />
}
