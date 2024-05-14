import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url'
import path from 'path'
import dotEnv from 'dotenv'

export const MAIN_PLUGINS = [
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
