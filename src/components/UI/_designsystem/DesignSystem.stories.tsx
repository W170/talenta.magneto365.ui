import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { DesignSystemShowCase } from './DesignSystem.component'
import {
  DesignSystemShowCaseBorder,
  DesignSystemShowCaseColor,
  DesignSystemShowCaseGap,
  DesignSystemShowCaseMargin,
  DesignSystemShowCaseOpacity,
  DesignSystemShowCasePadding,
  DesignSystemShowCaseRadius,
  DesignSystemShowCaseScreen,
  DesignSystemShowCaseShadow,
  DesignSystemShowCaseText,
  DesignSystemShowCaseScale
} from './children'

const meta: Meta<typeof DesignSystemShowCase> = {
  title: 'Design System',
  parameters: {
    docs: {
      description: {
        component:
          'Design system showcase. Here you can find things such as colors, border, gap, margin, opacity, padding, radius, screen, shadow, text and scale. When using SCSS variables, use the first column token in each table, for example: $color-transparent.'
      }
    }
  }
}

export default meta

type ColorStory = StoryObj<typeof DesignSystemShowCaseColor>

export const Color: ColorStory = {
  parameters: {
    docs: {
      description: {
        story: 'Color design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseColor />
}

type BorderStory = StoryObj<typeof DesignSystemShowCaseBorder>

export const Border: BorderStory = {
  parameters: {
    docs: {
      description: {
        story: 'Border design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseBorder />
}

type GapStory = StoryObj<typeof DesignSystemShowCaseGap>

export const Gap: GapStory = {
  parameters: {
    docs: {
      description: {
        story: 'Gap design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseGap />
}

type MarginStory = StoryObj<typeof DesignSystemShowCaseMargin>

export const Margin: MarginStory = {
  parameters: {
    docs: {
      description: {
        story: 'Margin design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseMargin />
}

type OpacityStory = StoryObj<typeof DesignSystemShowCaseOpacity>

export const Opacity: OpacityStory = {
  parameters: {
    docs: {
      description: {
        story: 'Opacity design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseOpacity />
}

type PaddingStory = StoryObj<typeof DesignSystemShowCasePadding>

export const Padding: PaddingStory = {
  parameters: {
    docs: {
      description: {
        story: 'Padding design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCasePadding />
}

type RadiusStory = StoryObj<typeof DesignSystemShowCaseRadius>

export const Radius: RadiusStory = {
  parameters: {
    docs: {
      description: {
        story: 'Radius design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseRadius />
}

type ScreenStory = StoryObj<typeof DesignSystemShowCaseScreen>

export const Screen: ScreenStory = {
  parameters: {
    docs: {
      description: {
        story: 'Screen design system showcase. Resize your window to see how it works.'
      }
    }
  },
  render: () => <DesignSystemShowCaseScreen />
}

type ShadowStory = StoryObj<typeof DesignSystemShowCaseShadow>

export const Shadow: ShadowStory = {
  parameters: {
    docs: {
      description: {
        story: 'Shadow design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseShadow />
}

type TextStory = StoryObj<typeof DesignSystemShowCaseText>

export const Text: TextStory = {
  parameters: {
    docs: {
      description: {
        story: 'Text design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseText />
}

type ScaleStory = StoryObj<typeof DesignSystemShowCaseScale>

export const Scale: ScaleStory = {
  parameters: {
    docs: {
      description: {
        story: 'Scale design system showcase.'
      }
    }
  },
  render: () => <DesignSystemShowCaseScale />
}
