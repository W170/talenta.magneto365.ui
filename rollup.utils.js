import autoprefixer from 'autoprefixer'
import fs from 'fs'
import path from 'path'
import stringHash from 'string-hash'
import postcss from 'rollup-plugin-postcss'

const cssMapModules = new Map()

export const listDirectory = (path) => {
  const directs = fs.readdirSync(path, { withFileTypes: true })
  return directs
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => {
      return dirent.name !== '@types'
    })
    .map((dirent) => dirent.name)
}

export const postcssPlugin = (isSub) =>
  postcss({
    plugins: [autoprefixer],
    autoModules: false,
    onlyModules: false,
    modules: {
      generateScopedName: (name, filename, css) => {
        if (filename.includes('global')) {
          return name
        }
        const hash = stringHash(css).toString(36).substring(0, 5)
        const mappedHash = cssMapModules.get(name)
        if (mappedHash === null) {
          cssMapModules.set(name, hash)
        }
        const { base } = path.parse(
          filename.replace(/\.modules?\.scss/g, '').replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        )
        return `mg_${base}_${name}_${mappedHash || hash}`.replace(/_{2,}/g, '_')
      }
    },
    extract: !isSub ? 'css/magneto.ui.lib.min.css' : undefined,
    exclude: !isSub ? ['*.css'] : [],
    extensions: ['.css'],
    minimize: true,
    sourceMap: false
  })
