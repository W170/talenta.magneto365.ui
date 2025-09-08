const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

const distCss = path.resolve('dist/esm/css/magneto.ui.lib.min.css')
const cssContent = fs.readFileSync(distCss, 'utf-8')
const scssJsJobsDir = path.resolve('dist/esm/components/Domain/Jobs')

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
  const cssCjs = path.resolve('dist/cjs/css/magneto.ui.lib.min.css')
  const cssEsm = path.resolve('dist/esm/css/magneto.ui.lib.min.css')

  fs.writeFileSync(cssCjs, root.toString(), 'utf-8')
  fs.writeFileSync(cssEsm, root.toString(), 'utf-8')
}

function extractDomainCss(scssJsDir, name) {
  const scssJsFiles = getAllScssJsFiles(scssJsDir)

  const root = postcss.parse(cssContent)
  const extractedRules = []

  scssJsFiles.forEach((file) => {
    const stylesModule = require(file)
    const styles = stylesModule.styles || stylesModule.default || {}

    const classNames = Object.values(styles)

    root.walkRules((rule) => {
      if (classNames.some((cls) => rule.selector.includes(`.${cls}`))) {
        extractedRules.push(rule.toString())
        rule.remove()
      }
    })
  })

  const domainCssFile = path.resolve(`dist/css/magneto.ui.${name}.min.css`)
  const domainCssDir = path.dirname(domainCssFile)

  if (!fs.existsSync(domainCssDir)) {
    fs.mkdirSync(domainCssDir, { recursive: true })
  }

  fs.writeFileSync(domainCssFile, extractedRules.join(''), 'utf-8')

  overrideMainCss(root)

  console.log(`Extraídas ${extractedRules.length} reglas de ${distCss} a ${domainCssFile}`)
}

extractDomainCss(scssJsJobsDir, 'Jobs')
