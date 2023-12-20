import makePackageJson from 'rollup-plugin-generate-package-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import stringHash from 'string-hash'
import dotEnv from 'dotenv'
import path from 'path'
import packageJson from './package.json'
import { listDirectory } from './rollup.utils'

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  url({
    fileName: '[dirname][hash][extname]',
    sourceDir: path.join(__dirname, 'src/assets'),
    destDir: 'dist/assets',
    publicPath: dotEnv.config().parsed.ASSETS_CDN_URL,
    limit: 0,
    emitFiles: true
  }),
  typescript({ tsconfig: './tsconfig.json', useTsconfigDeclarationDir: true }),
  postcss({
    autoModules: false,
    onlyModules: false,
    plugins: [autoprefixer],
    modules: {
      generateScopedName: (name, filename, css) => {
        if (filename.includes('global')) {
          return name
        }
        const hash = stringHash(css).toString(36).substring(0, 5)
        const { base } = path.parse(
          filename.replace(/\.modules?\.scss/g, '').replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        )
        return `mg_${base}_${name}_${hash}`.replace(/_{2,}/g, '_')
      }
    },
    extract: 'css/magneto.ui.lib.min.css',
    extensions: ['.module.scss', '.modules.scss'],
    use: ['sass'],
    minimize: true,
    sourceMap: false
  })
]
const subFolderPlugins = (folderName) => [
  ...plugins,
  makePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: true,
      main: '../cjs/index.js', // --> points to cjs format entry point of whole library
      module: './index.js', // --> points to esm format entry point of individual component
      types: './types/index.d.ts' // --> points to types definition file of individual component
    }
  })
]

const folderBuilds = listDirectory('./src/components/UI/template').map((folder) => {
  return {
    input: `src/components/UI/template/${folder}/index.ts`,
    output: {
      file: `dist/${folder}/index.js`,
      sourcemap: true,
      exports: 'named',
      format: 'esm'
    },
    plugins: subFolderPlugins(folder),
    external: ['antd', 'react', 'axios', 'react-dom']
  }
})

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    external: ['antd', 'react', 'axios', 'react-dom'],
    plugins: [...plugins]
  },
  ...folderBuilds,
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    ],
    plugins: [
      dts(),
      url({
        fileName: '[dirname][hash][extname]',
        sourceDir: path.join(__dirname, 'src/assets')
      })
    ],
    external: [/\.(css|less|scss)$/]
  }
]
