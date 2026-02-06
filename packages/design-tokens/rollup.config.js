import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    }
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        declaration: true,
        declarationDir: './dist/types',
        rootDir: './src'
      }
    })
  ],
  external: []
}
