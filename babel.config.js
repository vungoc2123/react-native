module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
          },
        },
      ],
      ['react-native-reanimated/plugin', {relativeSourceLocation: true}],
      ['@babel/plugin-proposal-decorators', {legacy: true}],
    ],
  };
};
