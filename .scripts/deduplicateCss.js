const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

function cleanEmptyRules(cssContent) {
  const root = postcss.parse(cssContent)

  root.walk((node) => {
    if ((node.type === 'rule' || node.type === 'atrule') && node.nodes && node.nodes.length === 0) {
      node.remove()
    }
  })

  return root.toString()
}

function deduplicate(cssDir) {
  const CSS_DIR = path.resolve(cssDir)
  const MAIN_FILE = path.join(CSS_DIR, 'magneto.ui.lib.min.css')

  const mainCss = fs.readFileSync(MAIN_FILE, 'utf8')
  const mainRoot = postcss.parse(mainCss)

  const rulesInMain = new Set()
  mainRoot.walkRules((rule) => {
    rulesInMain.add(rule.toString())
  })

  fs.readdirSync(CSS_DIR).forEach((file) => {
    if (file === 'magneto.ui.lib.min.css' || !file.endsWith('.css')) return

    const filePath = path.join(CSS_DIR, file)
    const cssContent = fs.readFileSync(filePath, 'utf8')
    const root = postcss.parse(cssContent)

    root.walkRules((rule) => {
      if (rulesInMain.has(rule.toString())) {
        rule.remove()
      }
    })

    const cleaned = cleanEmptyRules(root.toString())
    fs.writeFileSync(filePath, cleaned, 'utf8')
    console.log(`✔ Limpio duplicados y reglas vacías en ${cssDir}/${file}`)
  })
}

deduplicate('dist/esm/css')
deduplicate('dist/cjs/css')
