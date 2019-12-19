module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'transform-runtime': {},
        'styled-jsx': {
          plugins: [
            //['styled-jsx-plugin-postcss'], // TODO use this
            [  // TODO remove this
              'styled-jsx-plugin-sass',
              {
                sassOptions: {
                  includePaths: ['./styles'],
                  data: "@import './styles/import';",
                  precision: 4,
                },
              },
            ],
          ],
        },
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    'macros',
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        root: ['./src'],
        alias: {
          /* This is for NodeJS tools like Jest */
          '~': '.',
        },
      },
    ],
  ],
};
