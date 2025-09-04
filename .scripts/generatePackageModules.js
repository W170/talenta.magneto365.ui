const fs = require('fs')
const path = require('path')
const { getAllEntryPoints } = require('../rollup.input.js')

const domainInputs = Object.fromEntries(
  getAllEntryPoints('src/components/Domain').map((file) => {
    const name = path.relative('src', file).replace(/\.(tsx?|jsx?)$/, '')
    return [name, file]
  })
)

function updatePackageJsonExports(entries, moduleName) {
  const pkgPath = path.resolve('package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  pkg.exports = pkg.exports || {}
  Object.keys(entries).forEach((entry) => {
    const [, key] = entry.match(
      // take entry name from moduleName until component name omitting the index file.
      new RegExp(`(${moduleName}.+)\\/index$`)
    )
    pkg.exports[`./${key}`] = {
      import: `./dist/esm/src/${entry}.js`,
      require: `./dist/cjs/src/${entry}.js`,
      types: `./dist/types/${entry}.d.ts`
    }
  })

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
  console.log('✅ package.json exports updated')
}

updatePackageJsonExports(domainInputs, 'Domain')
