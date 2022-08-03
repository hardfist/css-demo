/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: {
    webpack: './src/index.css'
  },
  experiments: {
    css: true
  }
}