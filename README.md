## ADR

Prettier for formatting
Linting via esLint
Typescript

## Legacy:

Make sure you have removed `react-native-cli` using which ever package manager you used to install it.

```
brew remove react-native-cli
```

### Android

```
// Doesn't work with Java >9.  I use `jenv version 1.8`
brew cask install android-sdk
# you need to accept the licenses
sdkmanager --licenses

sdkmanager "system-images;android-29;google_apis;x86"
# create an emulator

avdmanager create avd --force --name pru-dev --device "Galaxy Nexus" -k 'system-images;android-29;google_apis;x86'

```

https://dl.google.com/android/repository/sdk-tools-darwin-4333796.zip

### Running

npx react-native run-ios

npx react-native run-android
