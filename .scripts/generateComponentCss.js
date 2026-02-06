#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const postcss = require('postcss')
const cssnano = require('cssnano')

/**
 * CSS Extraction Script for Magneto365 UI Components
 *
 * This script extracts per-component CSS from the bundled styles.css file
 * and injects CSS imports into component index files for automatic loading.
 *
 * Usage: node .scripts/generateComponentCss.js <packageName>
 * Example: node .scripts/generateComponentCss.js primitives
 */

const packageName = process.argv[2]

if (!packageName) {
  console.error('❌ Error: Package name required')
  console.error('Usage: node .scripts/generateComponentCss.js <packageName>')
  console.error('Example: node .scripts/generateComponentCss.js primitives')
  process.exit(1)
}

const distDir = path.join(__dirname, '..', 'packages', packageName, 'dist')
const cssSourceESM = path.join(distDir, 'esm', 'styles.css')
const cssSourceCJS = path.join(distDir, 'cjs', 'styles.css')
const cssOutputDir = path.join(distDir, 'css')
const componentsDir = path.join(distDir, 'esm', 'components')

console.log(`\n🎨 Extracting CSS for @magneto365-ui/${packageName}\n`)

/**
 * Recursively find all .module.scss.js files in a directory
 */
function findAllScssJsFiles(dir) {
  let files = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files = files.concat(findAllScssJsFiles(fullPath))
    } else if (entry.name.endsWith('.module.scss.js')) {
      files.push(fullPath)
    }
  }

  return files
}

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

/**
 * Inject CSS import statement into component index file
 */
function injectCssImport(distDir, componentName, format, hasCss = true) {
  // Try the expected location first
  let indexPath = path.join(distDir, format, 'components', componentName, 'index.js')

  // If it doesn't exist, try the nested location (from rollup entry points)
  if (!fs.existsSync(indexPath)) {
    const nestedPath = path.join(distDir, format, 'components', componentName, 'components', componentName, 'index.js')

    if (fs.existsSync(nestedPath)) {
      // Move the nested index.js to the correct location
      const content = fs.readFileSync(nestedPath, 'utf-8')
      fs.writeFileSync(indexPath, content, 'utf-8')

      // Clean up nested structure
      const nestedComponentDir = path.join(distDir, format, 'components', componentName, 'components')
      if (fs.existsSync(nestedComponentDir)) {
        fs.rmSync(nestedComponentDir, { recursive: true, force: true })
      }
    } else {
      throw new Error(`Component index not found at:\n  ${indexPath}\n  or ${nestedPath}`)
    }
  }

  // Only inject CSS import if component has CSS
  if (!hasCss) {
    return
  }

  let content = fs.readFileSync(indexPath, 'utf-8')

  // CSS import path (relative from component index to css directory)
  const cssImport = `import '../../../css/${componentName}.min.css';\n`

  // Check if already injected (idempotent)
  if (!content.includes(cssImport)) {
    // Prepend to file
    content = cssImport + content
    fs.writeFileSync(indexPath, content, 'utf-8')
  }
}

/**
 * Format bytes to human-readable string
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

/**
 * Inject CSS import statement into component index file
 */
function injectCssImport(distDir, componentName, format) {
  // Try the expected location first
  let indexPath = path.join(distDir, format, 'components', componentName, 'index.js')

  // If it doesn't exist, try the nested location (from rollup entry points)
  if (!fs.existsSync(indexPath)) {
    const nestedPath = path.join(distDir, format, 'components', componentName, 'components', componentName, 'index.js')

    if (fs.existsSync(nestedPath)) {
      // Move the nested index.js to the correct location
      const content = fs.readFileSync(nestedPath, 'utf-8')
      fs.writeFileSync(indexPath, content, 'utf-8')

      // Clean up nested structure
      const nestedComponentDir = path.join(distDir, format, 'components', componentName, 'components')
      if (fs.existsSync(nestedComponentDir)) {
        fs.rmSync(nestedComponentDir, { recursive: true, force: true })
      }
    } else {
      throw new Error(`Component index not found at:\n  ${indexPath}\n  or ${nestedPath}`)
    }
  }

  let content = fs.readFileSync(indexPath, 'utf-8')

  // CSS import path (relative from component index to css directory)
  const cssImport = `import '../../../css/${componentName}.min.css';\n`

  // Check if already injected (idempotent)
  if (!content.includes(cssImport)) {
    // Prepend to file
    content = cssImport + content
    fs.writeFileSync(indexPath, content, 'utf-8')
  }
}

/**
 * Main extraction function
 */
async function extractComponentCss() {
  try {
    // 1. Check if source CSS exists
    if (!fs.existsSync(cssSourceESM)) {
      throw new Error(`Source CSS not found: ${cssSourceESM}`)
    }

    // 1a. Copy styles.css to CJS directory if it doesn't exist
    if (!fs.existsSync(cssSourceCJS)) {
      fs.copyFileSync(cssSourceESM, cssSourceCJS)
    }

    // 2. Read the complete CSS bundle
    const fullCss = fs.readFileSync(cssSourceESM, 'utf-8')
    const cssRoot = postcss.parse(fullCss)

    // 3. Create output directory
    fs.mkdirSync(cssOutputDir, { recursive: true })

    // 4. Get all component directories
    if (!fs.existsSync(componentsDir)) {
      throw new Error(`Components directory not found: ${componentsDir}`)
    }

    const components = fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    if (components.length === 0) {
      console.warn('⚠️  No components found in', componentsDir)
      return
    }

    console.log(`Found ${components.length} components to process\n`)

    // 5. Process each component
    const stats = []

    for (const componentName of components) {
      const componentDir = path.join(componentsDir, componentName)

      // 5a. Find all .module.scss.js files
      const scssJsFiles = findAllScssJsFiles(componentDir)

      if (scssJsFiles.length === 0) {
        console.log(`⚠️  ${componentName.padEnd(20)} No CSS (skipped)`)
        // Still need to fix index.js location but don't inject CSS import
        try {
          injectCssImport(distDir, componentName, 'esm', false)
          injectCssImport(distDir, componentName, 'cjs', false)
        } catch (err) {
          // Ignore errors for components without CSS
        }
        continue
      }

      // 5b. Extract class names from modules
      const classNames = new Set()

      for (const file of scssJsFiles) {
        try {
          // Clear require cache to ensure fresh load
          delete require.cache[path.resolve(file)]

          const moduleExports = require(path.resolve(file))
          const styles = moduleExports.default || moduleExports.styles || moduleExports

          if (typeof styles === 'object' && styles !== null) {
            Object.values(styles).forEach((className) => {
              if (typeof className === 'string') {
                classNames.add(className)
              }
            })
          }
        } catch (err) {
          throw new Error(`Failed to load SCSS module: ${file}\n` + `Error: ${err.message}`)
        }
      }

      if (classNames.size === 0) {
        console.warn(`⚠️  No class names found for ${componentName}, creating empty CSS file`)
      }

      // 5c. Extract matching CSS rules (EXACT matching)
      const componentCss = postcss.root()

      // Extract rules that match our class names
      cssRoot.walkRules((rule) => {
        const usesComponentClass = Array.from(classNames).some((cls) => {
          // Match .className or .className:pseudo or .parent .className
          const pattern = new RegExp(`\\.${escapeRegex(cls)}([:\\s,\\.>+~\\[]|$)`)
          return pattern.test(rule.selector)
        })

        if (usesComponentClass) {
          componentCss.append(rule.clone())
        }
      })

      // Extract at-rules that contain our class names (@media, @keyframes, etc.)
      cssRoot.walkAtRules((atRule) => {
        const atRuleString = atRule.toString()
        const containsComponentClass = Array.from(classNames).some((cls) => {
          return atRuleString.includes(cls)
        })

        if (containsComponentClass) {
          componentCss.append(atRule.clone())
        }
      })

      // 5d. Minify CSS
      const minified = await postcss([
        cssnano({
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true
            }
          ]
        })
      ]).process(componentCss, { from: undefined })

      // 5e. Write CSS file
      const outputFile = path.join(cssOutputDir, `${componentName}.min.css`)
      fs.writeFileSync(outputFile, minified.css, 'utf-8')

      const fileSize = minified.css.length
      stats.push({ componentName, fileSize, classCount: classNames.size })

      console.log(
        `✅ ${componentName.padEnd(20)} ` + `${formatBytes(fileSize).padStart(8)} ` + `(${classNames.size} classes)`
      )

      // 5f. Inject CSS imports into component index files
      try {
        injectCssImport(distDir, componentName, 'esm')
        injectCssImport(distDir, componentName, 'cjs')
      } catch (err) {
        throw new Error(`Failed to inject CSS import for ${componentName}\n` + `Error: ${err.message}`)
      }
    }

    // 6. Delete temporary styles.css files
    if (fs.existsSync(cssSourceESM)) {
      fs.unlinkSync(cssSourceESM)
    }
    if (fs.existsSync(cssSourceCJS)) {
      fs.unlinkSync(cssSourceCJS)
    }

    // 7. Generate summary
    const totalSize = stats.reduce((sum, s) => sum + s.fileSize, 0)
    const totalClasses = stats.reduce((sum, s) => sum + s.classCount, 0)

    console.log(`\n${'─'.repeat(50)}`)
    console.log(`📦 Generated ${components.length} component CSS files`)
    console.log(`📊 Total size: ${formatBytes(totalSize)}`)
    console.log(`🎨 Total classes: ${totalClasses}`)
    console.log(`${'─'.repeat(50)}\n`)
  } catch (error) {
    console.error(`\n❌ CSS Extraction Failed:\n`)
    console.error(error.message)
    console.error('')
    process.exit(1)
  }
}

// Run extraction
extractComponentCss()
