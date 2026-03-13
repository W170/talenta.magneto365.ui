# Examples

Development and testing applications for the Magneto365 UI Library.

**Important:** Examples are **excluded from the global build pipeline** and should be run on-demand only.

---

## 📦 Packages

### `storybook/`

Component documentation and interactive playground using Storybook v7.

**Quick Start:**

```bash
# From root (recommended)
pnpm storybook

# Or with filter
pnpm --filter @magneto365-ui/storybook dev

# Build static site (for deployment)
pnpm storybook:build
```

**Purpose:**

- 📖 Component documentation with live examples
- 🎨 Interactive component testing and development
- 🎭 Design system showcase
- 📸 Visual regression testing baseline
- 🚀 Shareable component library reference

**URL:** http://localhost:6006 (when running)

**Key Features:**

- All component stories organized by package (Primitives, Inputs, etc.)
- Interactive controls for testing props
- Auto-generated documentation from TypeScript types
- Dark/light mode support
- Responsive viewport testing

---

### `primitives-test/`

Vite-based test application for primitives package validation.

**Quick Start:**

```bash
# Run dev server
pnpm example:primitives

# Build for production
pnpm example:primitives:build

# Analyze bundle size
pnpm example:primitives:analyze
```

**Purpose:**

- ✅ **CSS Auto-Loading Verification** - Validate side-effects work correctly
- 📦 **Tree-Shaking Testing** - Ensure unused components are excluded from bundle
- 📊 **Bundle Size Analysis** - Monitor and optimize package size
- 🔧 **Integration Testing** - Test components in a real Vite environment
- 🐛 **Development Debugging** - Quick environment for testing component behavior

**URL:** http://localhost:5173 (when running)

**Testing CSS Loading:**

This app helps verify that each component loads only its own CSS file:

1. Run `pnpm example:primitives`
2. Open DevTools → Network tab
3. Filter by CSS
4. Toggle components on/off in the UI
5. Verify only relevant CSS files are loaded dynamically

**Expected Behavior:**

- Logo component → Only `Logo.min.css` loads
- Button component → Only `Button.min.css` loads
- Toggling off a component → CSS remains cached but unused

**Bundle Analysis:**

```bash
# Build and analyze
pnpm example:primitives:build
pnpm example:primitives:analyze

# Opens visualization showing:
# - Chunk sizes
# - Module dependencies
# - Tree-shaking effectiveness
# - Vendor vs app code split
```

---

## 🚫 Important: Build Pipeline Exclusion

### Examples Are NOT Included in Global Commands

When you run these commands from the root, examples are **automatically excluded**:

```bash
pnpm build    # ✅ Only builds packages/* (publishable)
pnpm test     # ✅ Only tests packages/*
pnpm lint     # ✅ Only lints packages/*
```

**Why?**

- ⚡ **Performance** - Examples can be slow to build (especially Storybook)
- 🎯 **CI/CD Efficiency** - Only build what gets published
- 🔒 **Safety** - Prevents accidentally publishing example code
- 🧹 **Clean Separation** - Development tools vs publishable packages

### Running All (Including Examples)

If you really need to build/test/lint everything (rare):

```bash
pnpm build:all    # Builds packages + examples
pnpm test:all     # Tests packages + examples
pnpm lint:all     # Lints packages + examples
```

**Note:** These commands are escape hatches and rarely needed.

---

## 🔧 Architecture Details

### Workspace Configuration

Examples are **included in the pnpm workspace** (`pnpm-workspace.yaml`):

```yaml
packages:
  - 'packages/*' # Publishable packages
  - 'examples/*' # Development/testing apps
```

**Benefits:**

- ✅ Dependency hoisting (shared node_modules)
- ✅ `workspace:*` protocol support
- ✅ Shared tooling and configurations
- ✅ Monorepo conveniences (pnpm filtering, etc.)

### Turbo Filtering

The exclusion happens via Turbo filters in root `package.json`:

```json
{
  "build": "turbo run build --filter='./packages/**'",
  "test": "turbo run test --filter='./packages/**'",
  "lint": "turbo run lint --filter='./packages/**'"
}
```

The `--filter='./packages/**'` tells Turbo to only run tasks in `packages/*` directories.

### Safety Layer

Each example has a `.turboignore` file as an extra safety mechanism:

```
examples/storybook/.turboignore
examples/primitives-test/.turboignore
```

This ensures examples are ignored even if Turbo config changes.

---

## 📋 Available Commands (From Root)

### Storybook Commands

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `pnpm storybook`       | Run Storybook dev server on port 6006      |
| `pnpm storybook:build` | Build static Storybook site for deployment |

### Primitives Test Commands

| Command                           | Description                                 |
| --------------------------------- | ------------------------------------------- |
| `pnpm example:primitives`         | Run primitives test dev server on port 5173 |
| `pnpm example:primitives:build`   | Build primitives test app for production    |
| `pnpm example:primitives:analyze` | Open bundle size visualization              |

### Global Commands (Packages Only)

| Command      | Description                                        |
| ------------ | -------------------------------------------------- |
| `pnpm build` | Build all publishable packages (excludes examples) |
| `pnpm test`  | Test all publishable packages (excludes examples)  |
| `pnpm lint`  | Lint all publishable packages (excludes examples)  |

### Emergency Commands (All Workspaces)

| Command          | Description                 |
| ---------------- | --------------------------- |
| `pnpm build:all` | Build packages AND examples |
| `pnpm test:all`  | Test packages AND examples  |
| `pnpm lint:all`  | Lint packages AND examples  |

---

## 🆕 Adding New Examples

When creating a new example application:

### 1. Create Directory Structure

```bash
mkdir -p examples/my-example
cd examples/my-example
pnpm init
```

### 2. Configure package.json

```json
{
  "name": "my-example",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "@magneto365-ui/primitives": "workspace:*",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

**Important:**

- ✅ Set `"private": true` (prevents accidental publishing)
- ✅ Use `workspace:*` for internal dependencies
- ✅ Add only necessary external dependencies

### 3. Add .turboignore

```bash
echo "*" > examples/my-example/.turboignore
```

This ensures it's excluded from global builds.

### 4. Add Convenience Script (Optional)

Add to root `package.json`:

```json
{
  "scripts": {
    "example:my-example": "pnpm --filter my-example dev"
  }
}
```

### 5. Install Dependencies

```bash
# From root
pnpm install
```

Dependencies will be hoisted automatically.

### 6. Document in This README

Add your example to the "Packages" section above with:

- Purpose and use case
- Quick start commands
- Key features
- Any special instructions

---

## 🎯 Development Workflow

### Working on Components

1. **Make changes** to component in `packages/*`
2. **Build the package** (if not in watch mode):
   ```bash
   pnpm --filter @magneto365-ui/primitives build
   ```
3. **Test in Storybook**:
   ```bash
   pnpm storybook
   # Changes appear automatically via workspace links
   ```
4. **Or test in primitives-test**:
   ```bash
   pnpm example:primitives
   # Hot reload should work via Vite
   ```

### Before Committing

```bash
# Lint and test packages (examples excluded)
pnpm lint
pnpm test

# Build packages (examples excluded)
pnpm build
```

This ensures only publishable code is validated.

### Deploying Storybook

If you deploy Storybook (e.g., to GitHub Pages, Vercel):

```bash
# Build static site
pnpm storybook:build

# Output will be in examples/storybook/storybook-static/
# Deploy that directory to your hosting service
```

**Note:** Storybook builds are **intentionally excluded** from `pnpm build` because they're not part of the published packages.

---

## 🤔 FAQ

### Why not co-locate stories with components?

**Problem:** Co-locating stories creates TypeScript errors because component packages would need `@storybook/*` types as devDependencies, which bloats the packages.

**Solution:** Centralized stories in the Storybook package (see `examples/storybook/stories/README.md`).

### Why keep examples in the workspace?

**Benefits:**

- Shared dependency hoisting (saves disk space)
- Use `workspace:*` protocol (automatic version management)
- Monorepo tooling works seamlessly
- Easy cross-package development

**No Downside:** Filtering ensures they don't slow down builds.

### When should I use `build:all`?

**Rarely.** Only when you specifically need to:

- Build Storybook for deployment
- Build primitives-test for bundle analysis
- Debug issues that involve examples

For regular development and CI/CD, use `pnpm build` (which excludes examples).

### Can I add more examples?

**Absolutely!** Follow the "Adding New Examples" guide above. Examples are encouraged for:

- Testing specific use cases
- Demonstrating integrations (Next.js, Remix, etc.)
- Performance testing
- Accessibility testing
- Visual regression testing

### Why are example dependencies installed globally?

**By design.** Since examples are in the workspace, `pnpm install` hoists their dependencies. This is good because:

- Saves disk space (shared dependencies)
- Faster installs (fewer duplicates)
- Easier development (workspace protocol works)

If you don't want example dependencies installed, you'd need to remove examples from `pnpm-workspace.yaml` (not recommended).

---

## 📚 Related Documentation

- **Storybook Stories Organization:** `examples/storybook/stories/README.md`
- **Story Migration Summary:** `examples/storybook/MIGRATION_SUMMARY.md`
- **Component Development:** `AGENTS.md` in root
- **Monorepo Structure:** Root `README.md`

---

## 🐛 Troubleshooting

### "Storybook won't start"

```bash
# Ensure dependencies are installed
pnpm install

# Rebuild packages
pnpm build

# Clear Storybook cache
cd examples/storybook
rm -rf node_modules/.cache
pnpm dev
```

### "Primitives test shows no components"

```bash
# Rebuild primitives package
pnpm --filter @magneto365-ui/primitives build

# Restart dev server
pnpm example:primitives
```

### "Changes not reflecting in examples"

Examples use workspace links, so changes should appear immediately. If not:

1. Ensure the package is built: `pnpm --filter @magneto365-ui/package-name build`
2. Restart the example dev server
3. Clear browser cache
4. Check that you're importing from the correct package

### "pnpm build is still building examples"

Check that:

1. Root `package.json` has `--filter='./packages/**'` in the build script
2. `.turboignore` files exist in example directories
3. You're running `pnpm build`, not `pnpm build:all`

---

**Last Updated:** March 8, 2026

For questions or issues, refer to the root `AGENTS.md` or consult the team.
