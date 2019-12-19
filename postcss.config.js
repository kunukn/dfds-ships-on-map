const cssImports = [
    './styles/variables.css',
    './styles/breakpoints.css',
    './styles/helpers.css',
  ]
  
  // Use same order as in:
  // https://github.com/csstools/postcss-preset-env/blob/master/src/lib/ids-by-execution-order.js
  module.exports = {
    plugins: {
      'postcss-mixins': {
        mixinsFiles: './styles/mixins.css',
      },
      'postcss-nested': {}, // Nesting that look like SCSS
      'postcss-preset-env': {
        stage: 3, // https://preset-env.cssdb.org/features
        importFrom: cssImports, // https://github.com/csstools/postcss-preset-env#importfrom
        preserve: false, // https://github.com/csstools/postcss-preset-env#preserve
        features: {
          'nesting-rules': false, // Disable 'postcss-nesting'
          'custom-media-queries': true,
          'custom-properties': true,
          'media-query-ranges': true,
        },
      },
    },
  }
