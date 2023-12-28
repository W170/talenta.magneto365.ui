import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import dotEnv from 'dotenv'
import path from 'path'
import dts from 'rollup-plugin-dts'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from './package.json'
import { listDirectory, postcssPlugin } from './rollup.utils'

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
  })
]

const folderList = [
  // { inputMap: 'components/UI/atoms', outputMap: 'atoms' },
  // { inputMap: 'components/UI/molecules', outputMap: 'molecules' },
  // { inputMap: 'components/UI/organism', outputMap: 'organism' },
  // { inputMap: 'components/UI/page', outputMap: 'page' },
  { inputMap: 'components/UI/template', outputMap: 'template' }
]

const subfolderPlugins = (folderName, map) => [
  ...plugins,
  postcssPlugin(true),
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

const folderBuilds = folderList.flatMap((map) =>
  listDirectory(`./src/${map.inputMap}`).map((folder) => {
    return {
      input: [`src/${map.inputMap}/${folder}/index.ts`],
      output: [
        {
          file: `dist/${map.outputMap}/${folder}/index.js`,
          sourcemap: true,
          exports: 'named',
          format: 'esm'
        }
      ],
      plugins: subfolderPlugins(folder, map),
      external: ['antd', 'react', 'axios', 'react-dom']
    }
  })
)

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
    plugins: [...plugins, postcssPlugin(false), typescript({ tsconfig: './tsconfig.json', declaration: true })]
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
