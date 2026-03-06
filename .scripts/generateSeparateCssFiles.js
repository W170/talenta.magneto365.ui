const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

// Accept package name as CLI argument. When provided, operate on
// packages/{packageName}/dist; otherwise default to repository root dist.
const packageName = process.argv[2]
const basePath = packageName ? path.resolve(__dirname, '..', 'packages', packageName) : path.resolve(__dirname, '..')

const distCss = path.resolve(basePath, 'dist/cjs/css/magneto.ui.lib.min.css')

// Validate that the CSS file exists and exit gracefully if not.
if (!fs.existsSync(distCss)) {
  console.error(`Error: CSS file not found at ${distCss}`)
  console.error('Please ensure the build has completed successfully before running this script.')
  process.exit(0)
}

const cssContent = fs.readFileSync(distCss, 'utf-8')
const scssJsJobsDir = path.resolve(basePath, 'dist/cjs/components/Domain/Jobs')

// If the Jobs directory doesn't exist, nothing to extract — exit.
if (!fs.existsSync(scssJsJobsDir)) {
  console.error(`Error: Jobs directory not found at ${scssJsJobsDir}`)
  console.error('Skipping CSS extraction - no Jobs domain files found.')
  process.exit(0)
}

function getAllScssJsFiles(dir) {
  let files = []
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files = files.concat(getAllScssJsFiles(fullPath))
    } else if (entry.name.endsWith('.module.scss.js')) {
      files.push(fullPath)
    }
  })
  return files
}

function overrideMainCss(root) {
  const cssCjs = path.resolve(basePath, 'dist/cjs/css/magneto.ui.lib.min.css')
  const cssEsm = path.resolve(basePath, 'dist/esm/css/magneto.ui.lib.min.css')

  fs.writeFileSync(cssCjs, root.toString(), 'utf-8')
  fs.writeFileSync(cssEsm, root.toString(), 'utf-8')
}

function extractDomainCss(scssJsDir, name) {
  const scssJsFiles = getAllScssJsFiles(scssJsDir)

  const root = postcss.parse(cssContent)
  const extractedRules = []

  scssJsFiles.forEach((file) => {
    const stylesModule = require(file)
    const styles = stylesModule || {}

    const classNames = Object.values(styles)

    root.walkRules((rule) => {
      if (classNames.some((cls) => rule.selector.includes(`.${cls}`))) {
        extractedRules.push(rule.toString())
        rule.remove()
      }
    })
  })

  const domainCssFile = path.resolve(basePath, `dist/css/magneto.ui.${name}.min.css`)
  const domainCssDir = path.dirname(domainCssFile)

  if (!fs.existsSync(domainCssDir)) {
    fs.mkdirSync(domainCssDir, { recursive: true })
  }

  fs.writeFileSync(domainCssFile, extractedRules.join(''), 'utf-8')

  overrideMainCss(root)

  console.log(`Extracted ${extractedRules.length} rules from ${distCss} to ${domainCssFile}`)
}

extractDomainCss(scssJsJobsDir, 'Jobs')
