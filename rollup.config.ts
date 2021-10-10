import path from 'path'
import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import url from 'postcss-url'

export default defineConfig({
  input: path.resolve(__dirname, 'src/layer.js'),
  plugins: [
    esbuild({
      sourceMap: true,
      minify: true,
      target: 'esnext',
    }),
    postcss({
      minimize: true,
      sourceMap: true,
      extract: true,
      plugins: [url({ url: 'inline' })],
    }),
  ],

  output: [
    {
      file: path.resolve(__dirname, 'dist/layer.js'),
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: path.resolve(__dirname, 'dist/layer.umd.js'),
      format: 'umd',
      sourcemap: true,
      name: 'layer',
    },
    {
      file: path.resolve(__dirname, 'dist/layer.mjs'),
      format: 'esm',
      sourcemap: true,
      exports: 'auto',
    },
  ],
})
