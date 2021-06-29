import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
// import { terser } from 'rollup-plugin-terser'

const extensions = ['.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/js/kui.esm.js',
        format: 'esm',
      },
      {
        file: 'dist/js/kui.cjs.js',
        format: 'cjs',
      },
    ],
    external: ['vue'],
    plugins: [nodeResolve({ extensions }), babel({ babelHelpers: 'bundled', extensions })],
  },
  {
    input: 'src/index.umd.ts',
    output: [
      {
        file: 'dist/js/kui.umd.js',
        format: 'umd',
        name: 'KUI',
        globals: {
          vue: 'Vue',
        },
      },
    ],
    external: ['vue'],
    plugins: [nodeResolve({ extensions }), babel({ babelHelpers: 'bundled', extensions })],
  },
]
