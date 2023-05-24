import { withTheme } from './withTheme.decorator'
import { withContext } from './withContext.decorator'
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [withTheme, withContext]
