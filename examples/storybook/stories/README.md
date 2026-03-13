# Storybook Stories - Organization Guide

This directory contains all Storybook stories for the Magneto365 UI Library, organized by package.

## 📁 Directory Structure

```
stories/
├── primitives/        # Core primitive components (Button, Icon, Typography, etc.)
├── inputs/            # Input components (Field, etc.)
├── feedback/          # Feedback components (Alert, Toast, etc.)
├── navigation/        # Navigation components (Menu, Breadcrumb, etc.)
├── overlays/          # Overlay components (Modal, Drawer, etc.)
├── data-display/      # Data display components (Table, Card, etc.)
├── layout/            # Layout components (Grid, Stack, etc.)
├── domain/            # Domain-specific components (Jobs, etc.)
└── shared/            # Shared utilities, hooks, contexts
```

## 🎯 Why Centralized Stories?

Stories are centralized in this package rather than co-located with components because:

1. **No Type Errors**: Component packages don't need Storybook types as dependencies
2. **Clean Separation**: Component packages remain pure and focused
3. **Easy Imports**: This package already has all workspace packages as dependencies
4. **Better Performance**: Single build context, faster type checking
5. **Industry Standard**: Used by major UI libraries (Chakra, Radix, Material-UI)

## 📝 Story File Naming Convention

- **File name**: `{ComponentName}.stories.tsx`
- **Location**: `stories/{package-name}/{ComponentName}.stories.tsx`

Examples:

- `stories/primitives/Button.stories.tsx`
- `stories/inputs/Field.stories.tsx`
- `stories/navigation/Menu.stories.tsx`

## 🔧 Story Template

### Basic Story Structure

```typescript
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ComponentName from '@magneto365-ui/{package-name}/{ComponentName}'

const meta: Meta<typeof ComponentName> = {
  title: '{Package}/{ComponentName}',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    // Define controls for props
    propName: {
      control: 'text',
      description: 'Description of the prop'
    },
    disabled: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    // Default prop values
  }
}

export const Variant: Story = {
  args: {
    // Variant prop values
  }
}
```

### Story with Hooks/State

```typescript
import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ComponentName from '@magneto365-ui/{package-name}/{ComponentName}'

const meta: Meta<typeof ComponentName> = {
  title: '{Package}/{ComponentName}',
  component: ComponentName,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return <ComponentName value={value} onChange={(newValue) => setValue(newValue)} />
  }
}
```

## 📦 Import Patterns

### Importing Components

```typescript
// Import from workspace package using exports
import Button from '@magneto365-ui/primitives/Button'
import { Field } from '@magneto365-ui/inputs/Field'
import { Icon } from '@magneto365-ui/primitives/Icon'

// For components that need multiple exports
import ComponentName, { ComponentSubPart } from '@magneto365-ui/{package}/{Component}'
```

### Importing Shared Resources

```typescript
// Design tokens
import '@magneto365-ui/design-tokens/css/tokens.css'

// Shared utilities
import { cn } from '@magneto365-ui/shared/utils'
```

## 🎨 Story Organization Best Practices

### 1. Title Convention

Use the format: `{Package Category}/{ComponentName}`

Examples:

- `'Primitives/Button'`
- `'Inputs/Field'`
- `'Navigation/Menu'`
- `'Domain/Jobs/JobCard'`

### 2. Story Variants

Create stories for different states and use cases:

```typescript
export const Default: Story = {
  /* base case */
}
export const WithIcon: Story = {
  /* with icons */
}
export const Disabled: Story = {
  /* disabled state */
}
export const Loading: Story = {
  /* loading state */
}
export const Error: Story = {
  /* error state */
}
```

### 3. Documentation

- Use `tags: ['autodocs']` to generate automatic documentation
- Add descriptive `argTypes` with `description` fields
- Include JSDoc comments for complex examples

### 4. Interactive Examples

For components with state or complex interactions:

```typescript
export const Interactive: Story = {
  render: () => {
    // Use hooks for stateful examples
    const [state, setState] = useState(initialValue)

    return <Component value={state} onChange={setState} />
  }
}
```

## 🚀 Creating a New Story

1. **Create the story file** in the appropriate package directory:

   ```bash
   touch examples/storybook/stories/{package-name}/{ComponentName}.stories.tsx
   ```

2. **Copy the template** from above and customize:

   - Import your component
   - Set the title
   - Define argTypes
   - Create story variants

3. **Test locally**:

   ```bash
   cd examples/storybook
   pnpm dev
   ```

4. **Verify** the story appears in Storybook UI

## 📚 Additional Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [Component Story Format (CSF)](https://storybook.js.org/docs/react/api/csf)
- [ArgTypes](https://storybook.js.org/docs/react/api/argtypes)
- [Stories for Multiple Components](https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components)

## 🔄 Migrating Stories

If you need to migrate a story from a component package:

1. **Copy the story file** to the appropriate directory here
2. **Update imports** from relative (`./Component`) to workspace package (`@magneto365-ui/package/Component`)
3. **Test** the migrated story
4. **Delete** the old story file from the component package
5. **Update** the title if needed to match the new structure

## ⚠️ Important Notes

- **Do NOT** add story files to component packages (primitives, inputs, etc.)
- **All new stories** should be created in this centralized location
- **Legacy package stories** remain co-located for now (gradual migration)
- **Storybook types** should only exist in this package's devDependencies
