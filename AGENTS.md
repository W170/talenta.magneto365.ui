# AGENTS.md - Magneto365 UI Library

Developer guide for AI coding agents working in this repository.

## Project Overview

This is a React TypeScript UI component library (magneto365.ui) that provides reusable components following atomic design principles (atoms, molecules, organisms, templates, pages). Built with Rollup, uses Storybook for component documentation, and follows conventional commits.

## Build, Lint, and Test Commands

### Build Commands

```bash
# Full build pipeline (generates tokens, builds, generates CSS)
yarn build

# Build only
rollup -c rollup.config.js --configPlugin typescript

# Generate design tokens (runs before build)
yarn generate:tokens

# Generate CSS files (runs after build)
yarn generate:css

# Generate package modules
yarn generate:modules
```

### Linting and Formatting

```bash
# Run ESLint on all TypeScript/React files
yarn lint

# Auto-fix linting issues
yarn lint --fix

# Format all files with Prettier
yarn prettier

# Prettier will auto-format on pre-commit via husky
```

### Testing

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run a single test file
yarn test path/to/file.test.tsx

# Run tests matching a pattern
yarn test --testNamePattern="ComponentName"

# Run tests with coverage
yarn test --coverage
```

### Storybook

```bash
# Start Storybook dev server on port 6006
yarn storybook

# Build static Storybook
yarn build-storybook
```

## Project Structure

```
src/
├── @types/          # TypeScript type definitions
├── assets/          # Images, icons, fonts
├── components/
│   ├── context/     # React contexts and providers
│   ├── hoc/         # Higher-order components
│   ├── hooks/       # Custom React hooks
│   └── UI/
│       ├── atoms/      # Basic building blocks
│       ├── molecules/  # Composite components
│       ├── organism/   # Complex components
│       ├── page/       # Page-level components
│       └── template/   # Layout templates
├── constants/       # Application constants
├── shared/          # Shared utilities and tokens
│   ├── stylesheets/ # SCSS tokens and styles
│   ├── tokens/      # Design tokens
│   └── utils/       # Utility functions
└── utils/           # Additional utilities
```

## Code Style Guidelines

### Imports

- Use path aliases defined in tsconfig.json:
  - `@*` - maps to src/\*
  - `@assets` - maps to src/assets/\*
  - `@components` - maps to src/components/\*
  - `@constants` - maps to src/constants
  - `@shared` - maps to src/shared
  - `@utils` - maps to src/utils
  - `@tokens` - maps to tokens stylesheet

Example:

```typescript
import { DateDropdown } from '@components/UI/atoms/DateDropdown'
import { monthOptionsValue } from '@constants/stories/DatePicker.constants'
```

### TypeScript

- **Strict mode enabled**: All strict TypeScript checks are enforced
- Use explicit types for function parameters and return values
- Define interfaces for component props (e.g., `IDatePicker`)
- Use type guards for runtime type checking (e.g., `value instanceof Date`)
- Prefer interfaces over types for object shapes
- Use `React.FC<IPropsInterface>` for functional components

### Naming Conventions

- **Components**: PascalCase with descriptive names (e.g., `DatePicker`, `HeaderTabs`)
- **Files**: Match component name with extensions:
  - `ComponentName.component.tsx` - React components
  - `ComponentName.interface.ts` - TypeScript interfaces
  - `ComponentName.module.scss` - Component styles
  - `ComponentName.stories.tsx` - Storybook stories
  - `utils.ts` or `name.util.ts` - Utility functions
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `FIRST_OF_MONTH`)
- **Variables/Functions**: camelCase (e.g., `handleMonthChange`, `selectedYear`)
- **CSS Classes**: BEM-style with prefix `magneto-ui--component-name__element`

### Component Structure

```typescript
import React from 'react'
import { IComponentName } from './ComponentName.interface'
import styles from './ComponentName.module.scss'

const Component: React.FC<IComponentName> = ({ prop1, prop2 }) => {
  // State and hooks at the top
  const [state, setState] = useState<string>('')

  // Event handlers
  const handleEvent = () => {
    // handler logic
  }

  // Effects
  useEffect(() => {
    // effect logic
  }, [dependencies])

  // Render
  return <div className={styles['magneto-ui--component-name__wrapper']}>{/* JSX */}</div>
}

export const ComponentName = Component
```

### Formatting (Prettier Config)

- **Print width**: 120 characters
- **No semicolons**: `semi: false`
- **Single quotes**: `singleQuote: true`
- **No trailing commas**: `trailingComma: 'none'`
- **2 spaces**: `tabWidth: 2`
- **Spaces over tabs**: `useTabs: false`

### React Hooks Rules

- Follow React Hooks rules strictly (enforced by ESLint)
- `react-hooks/rules-of-hooks`: error
- `react-hooks/exhaustive-deps`: error
- Add ESLint disable comments sparingly and only when necessary:
  ```typescript
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ```

### Error Handling

- Use type guards for runtime validation (e.g., `isDate`, `isInvalidDate`)
- Handle null/undefined with proper type checking
- Provide meaningful error messages in development

### CSS/SCSS

- Use CSS Modules for component styles
- Follow BEM naming with `magneto-ui--` prefix
- Import styles: `import styles from './Component.module.scss'`
- Access classes: `styles['magneto-ui--component__element']`

## Git Workflow

### Commit Messages

- Follow **Conventional Commits** (enforced by commitlint)
- Format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(datepicker): add future years support`

### Pre-commit Hooks

- Husky runs on pre-commit, pre-push, and commit-msg
- Prettier auto-formats staged files
- ESLint checks for errors
- Tests may run on pre-push

## Peer Dependencies

- React 17.0.2 is a peer dependency
- React DOM 17.0.2 is required

## Package Exports

- Main entry: `dist/cjs/index.js` (CommonJS)
- Module entry: `dist/esm/index.js` (ES Modules)
- Types: `dist/types/index.d.ts`
- Individual CSS files: `./dist/*.css`
- Domain-specific exports available (e.g., `./Domain/Jobs`)

## Important Notes

- Run `yarn generate:tokens` before building to ensure design tokens are up to date
- The library uses Rollup for bundling with multiple output formats (CJS, ESM)
- Storybook is the primary development environment for components
- TypeScript strict mode is enabled - all code must be properly typed
