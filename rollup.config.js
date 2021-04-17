import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: {
    file: 'docs/static/ziro.bundled.js'
  },
  plugins: [
    filesize({
      showBrotliSize: true,
    })
  ]
}
