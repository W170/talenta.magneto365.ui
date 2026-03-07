const path = require('path')

// Resolve paths relative to workspace root
const workspaceRoot = path.resolve(__dirname, '../../..')

module.exports = {
  stories: [
    // Legacy stories - all included for now,
    '../../../packages/legacy/src/**/*.stories.mdx',
    '../../../packages/legacy/src/**/*.stories.@(js|jsx|ts|tsx)',
    // New package stories
    '../../../packages/primitives/src/**/*.stories.@(js|jsx|ts|tsx)',
    // TODO: Fix broken imports in inputs package stories, then uncomment
    // '../../../packages/inputs/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/feedback/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/navigation/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/overlays/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/data-display/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/layout/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/domain/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite')

    return mergeConfig(config, {
      resolve: {
        alias: {
          // TEMPORARY: All legacy package aliases for backward compatibility
          // TODO: Migrate legacy stories to relative paths, then remove all aliases
          // Other packages (inputs, primitives, etc.) should use relative imports only
          '@constants': path.resolve(workspaceRoot, 'packages/legacy/src/constants'),
          '@components': path.resolve(workspaceRoot, 'packages/legacy/src/components'),
          '@shared': path.resolve(workspaceRoot, 'packages/legacy/src/shared'),
          '@utils': path.resolve(workspaceRoot, 'packages/legacy/src/utils'),
          '@assets': path.resolve(workspaceRoot, 'packages/legacy/src/assets')
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            // Allow absolute imports from legacy package src directory
            includePaths: [path.resolve(workspaceRoot, 'packages/legacy')]
          }
        }
      }
    })
  }
}
