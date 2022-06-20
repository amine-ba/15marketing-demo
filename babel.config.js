module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.cjs',
        ],
        root: ['./src'],
        alias: {
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@consts': './src/consts',
        },
      },
    ],
  ],
};
