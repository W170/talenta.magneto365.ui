import fs from 'fs'
import path from 'path'
import stringHash from 'string-hash'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import packageJson from './package.json'
import { MAIN_PLUGINS } from './rollup.plugins'
import { UI_MODULES } from './rollup.modules'

const cssMapModules = new Map()

export const GET_DIRECTORIES = (path) => {
  const directories = fs.readdirSync(path, { withFileTypes: true })
  return directories
    .filter((directory) => directory.isDirectory() && directory.name !== '@types')
    .map((directory) => directory.name)
}

export const CONFIG_POSTCSS_PLUGIN = (isSub) => {
  return postcss({
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
    extract: 'css/magneto.ui.lib.min.css',
    exclude: !isSub ? ['*.css'] : [],
    extensions: ['.css'],
    minimize: true,
    sourceMap: false
  })
}

export const GENERATE_MODULE_PLUGINS = (folderName, map) => [
  ...MAIN_PLUGINS,
  CONFIG_POSTCSS_PLUGIN(true),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false
  }),
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${map.outputMap}/${folderName}`,
      private: true,
      main: '../../cjs/index.js', // --> points to cjs format entry point of whole library
      module: './index.js', // --> points to esm format entry point of individual component
      types: `../../esm/types/${map.inputMap}/${folderName}/index.d.ts` // --> points to types definition file of individual component
    }
  })
]

export const GENERATE_MODULES = (environment) => {
  const modules = []
  for (const [module, path] of UI_MODULES) {
    if (!environment || module !== environment) continue
    const subModules = GET_DIRECTORIES(`./src/${path}`).map((folder) => ({
      input: [`src/${path}/${folder}/index.ts`],
      output: [
        {
          file: `dist/${module}/${folder}/index.js`,
          sourcemap: true,
          exports: 'named',
          format: 'esm'
        }
      ],
      plugins: GENERATE_MODULE_PLUGINS(folder, { inputMap: path, outputMap: module }),
      external: ['antd', 'react', 'axios', 'react-dom']
    }))
    modules.push(...subModules)
  }
  return modules
}
