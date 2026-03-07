# Magneto365 UI - Storybook

Interactive component documentation for the entire Magneto365 UI library.

## Quick Start

### 1. Navigate to Storybook

```bash
cd examples/storybook
```

### 2. Install Dependencies (first time only)

```bash
pnpm install
```

This installs Storybook and imports all component packages from the workspace.

### 3. Run Development Server

```bash
pnpm dev
```

Storybook opens at **http://localhost:6006**

The `dev` command automatically:

- Generates design tokens
- Starts Storybook dev server
- Watches for file changes

### 4. Build Static Site

```bash
pnpm build
```

Outputs to `storybook-static/` directory for deployment.

## What's Documented

This Storybook instance includes all Magneto365 UI packages.

## Development Workflow

### Working on Storybook

```bash
cd examples/storybook
pnpm dev
```

### Building Component Packages

```bash
cd ../..  # Back to monorepo root
pnpm build
```

### Building for CI/CD

```bash
# From monorepo root
pnpm --filter @magneto365-ui/storybook build
```

## Adding Stories

Add `.stories.tsx` files alongside your components. Cross-package examples go in `./stories/`.
