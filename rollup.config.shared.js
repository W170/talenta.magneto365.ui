import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'
import { CONFIG_POSTCSS_PLUGIN } from './rollup.tools.js'
import { MAIN_PLUGINS } from './rollup.plugins.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

/**
 * Creates a Rollup configuration for a package
 * @param {string} packageName - The name of the package (e.g., 'primitives', 'inputs')
 * @returns {Array} Rollup configuration array
 */
export default function createRollupConfig(packageName) {
  const packageDir = path.resolve(__dirname, 'packages', packageName)
  const packageJson = require(path.join(packageDir, 'package.json'))
  const input = path.join(packageDir, 'src/index.ts')

  return [
    // ESM and CJS builds
    {
      input,
      output: [
        {
          dir: path.join(packageDir, 'dist/esm'),
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: path.join(packageDir, 'src'),
          sourcemap: true
        },
        {
          dir: path.join(packageDir, 'dist/cjs'),
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: path.join(packageDir, 'src'),
          sourcemap: true
        }
      ],
      external: [
        'react',
        'react-dom',
        'axios',
        /^magneto365\.ui\// // External workspace packages
      ],
      plugins: [
        ...MAIN_PLUGINS,
        typescript({
          tsconfig: path.join(packageDir, 'tsconfig.json'),
          declaration: false
        }),
        CONFIG_POSTCSS_PLUGIN(false, `${packageName}/styles.css`)
      ]
    },
    // Type definitions
    {
      input,
      output: {
        dir: path.join(packageDir, 'dist/types'),
        preserveModules: true,
        preserveModulesRoot: path.join(packageDir, 'src')
      },
      plugins: [dts()],
      external: [/\.(css|scss)$/, /^magneto365\.ui\//]
    }
  ]
}
