const ios = require("@react-native-community/cli-platform-ios");
const android = require("@react-native-community/cli-platform-android");

module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx", "js"];
  },
  project: {
    ios: {},
    android: {}
  }
  // assets: ['Resources/fonts'], // stays the same
  // commands: require('./path-to-commands.js'),
};
