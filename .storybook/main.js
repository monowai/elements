module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: ['@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.module.rules.push({
      context: path.resolve(__dirname, '..', 'src'),
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx', '.js');
    return config;
  },
};