import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default {
  input: 'src/Meting.js',
  output: {
    file: 'dist/Meting.min.js',
    format: 'iife',
    name: 'MetingJS'
  },
  plugins: [
    replace({
      delimiters: ['', ''],
      values: {
        '__VERSION__': pkg.version
      },
      preventAssignment: true
    }),
    terser({
      format: {
        comments: false
      }
    })
  ]
}