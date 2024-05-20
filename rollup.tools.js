import path from 'path'
import stringHash from 'string-hash'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import typescript from '@rollup/plugin-typescript'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import packageJson from './package.json'
import { MAIN_PLUGINS } from './rollup.plugins'

const cssMapModules = new Map()

export const NORMALIZE_CSS_SUFFIX = (suffix) => {
  if (suffix.length === 0) return ''
  const lowerCamelSuffix = suffix.charAt(0).toLowerCase() + suffix.slice(1)
  return lowerCamelSuffix.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

export const CONFIG_POSTCSS_PLUGIN = (isSub, suffix = 'lib') => {
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
    extract: `css/magneto.ui.${suffix}.min.css`,
    exclude: !isSub ? ['*.css'] : [],
    extensions: ['.css'],
    minimize: true,
    sourceMap: false
  })
}

export const GENERATE_MODULE_PLUGINS = (folderName, map) => [
  ...MAIN_PLUGINS,
  CONFIG_POSTCSS_PLUGIN(false, NORMALIZE_CSS_SUFFIX(folderName)),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: true
  }),
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${map.outputMap}/${folderName}`,
      private: true,
      // main: '../../cjs/index.js', // --> points to cjs format entry point of whole library
      module: './index.js', // --> points to esm format entry point of individual component
      types: `./types/index.d.ts` // --> points to types definition file of individual component
    }
  })
]

export const GENERATE_MODULES = (environment) => {
  const [module, feature, path] = environment.toString().split(':')
  return [
    {
      input: [`src/${path}/index.ts`],
      output: [
        {
          file: `dist/${module}/${feature}/index.js`,
          sourcemap: true,
          exports: 'named',
          format: 'esm'
        }
      ],
      plugins: GENERATE_MODULE_PLUGINS(feature, { inputMap: path, outputMap: module }),
      external: ['antd', 'react', 'axios', 'react-dom']
    }
  ]
}
