import styles from "rollup-plugin-styles";
const autoprefixer = require('autoprefixer');
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";


// the entry point for the library
const input = 'src/Flag.js'

//
var MODE = [
  {
    fomart: 'cjs'
  },
  {
    fomart: 'esm'
  },
  {
    fomart: 'umd'
  }
]




var config = []


MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      // then name of your package
      name: "react-flag-cdn",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto"
    },
    // this externelizes react to prevent rollup from compiling it
    external: [
      'react',
      'react-proptypes'
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      })
    ]
  }
  config.push(conf)
})

export default [
  ...config,
]
