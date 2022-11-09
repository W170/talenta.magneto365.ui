module.exports = {
  stories: ['../src/**/*.Stories.mdx', '../src/**/*.Stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  features: {
    previewMdx2: true
  }
}
