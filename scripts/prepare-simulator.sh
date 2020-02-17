#!/usr/bin/env bash

MODE=$1
MODE=${MODE:="android,ios"}

DEVICE_NAME=$2
DEVICE_NAME=${DEVICE_NAME:="PRUone-e2e-1"}

#onCi() {
#    return "$(test -n "${bamboo_buildNumber}")"
#}

prepareIosSimulator() {
    NAME="$*"
    SIMULATOR=`xcrun simctl list devices | grep "$NAME " | sed 's/.*\([A-Z0-9\\-]\{36\}\).*/\1/g'`
    if [[ -z "${SIMULATOR}" ]]; then
      # Not Found
      # Create a named simulator for a device type running a version of iOS
      SIMULATOR=`xcrun simctl create "$NAME" com.apple.CoreSimulator.SimDeviceType.iPad-Pro--10-5-inch- com.apple.CoreSimulator.SimRuntime.iOS-10-3`
      echo "Created named IOS simulator $NAME"
      # Attempting to figure out how to ensure keyboard will work
      # Currently simulator.app does not read the defaults when set via this method during first time run of a newly
      # created simulator
      # DEFS=$SIMULATOR'= { SimulatorWindowOrientation = "LandscapeLeft"; ConnectHardwareKeyboard = 0;};'
      # `defaults write com.apple.iphonesimulator DevicePreferences "$DEFS"`
    fi
    if [ "$SIMULATOR" ]; then
      BOOTED=`xcrun simctl list devices | grep "($SIMULATOR).*(Booted)" | sed 's/.*\([A-Z0-9\\-]\{36\}\).*/\1/g'`
      if [[ -z "${BOOTED}" ]]; then
        echo "Booting IOS $NAME with ID $SIMULATOR"
        `xcrun simctl boot $SIMULATOR &`
      else
         echo "Simulator $SIMULATOR / $NAME was already running"
      fi
    fi
}

prepareAndroidEmulator() {
    NAME="$*"
    AVD_CONFIG_FILE="${HOME}/.android/avd/${NAME}.avd/config.ini"

    if [ -z "$ANDROID_SDK_ROOT" ]; then
        echo "No ANDROID_SDK_ROOT defined; assumed no Android installed and skipping..."
        return
    fi

    if [ -z "$(avdmanager list avd --compact | grep "$NAME")" ]; then
        avdmanager create avd -n "$NAME" -d "pixel_c" -k "system-images;android-27;google_apis;x86" --force
        sed -i '' '/hw.keyboard=/d' $AVD_CONFIG_FILE
        echo "hw.keyboard=yes" >> $AVD_CONFIG_FILE
        echo "Created named Android AVD $NAME"
    fi

    BOOTED=`pgrep -f "qemu.*$NAME "`
    if [[ -z "${BOOTED}" ]]; then

    # Leaving commented for now
    ADDITIONAL_EMU_ARGS=$(if onCi; then echo "-no-window"; else echo ""; fi)

      echo "Booting Android $NAME"
      nohup emulator "@$NAME" -gpu host -partition-size 512 -no-boot-anim -no-audio $ADDITIONAL_EMU_ARGS >/dev/null 2>&1 &
      echo "Waiting for device to boot..."
      adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done'
      echo "Android $NAME booted."
    else
      echo "Android emulator $NAME was already running"
    fi
}

prepareSimulator() {
    if [[ "$MODE" =~ "ios" ]]; then
      prepareIosSimulator $DEVICE_NAME
    fi
    if [[ "$MODE" =~ "android" ]]; then
      prepareAndroidEmulator $DEVICE_NAME
    fi
}

## Want to free up some disk space?
# xcrun simctl delete unavailable
## Remove all simulator defaults
# defaults delete com.apple.iphonesimulator
## Dump configs
# plutil -convert json ~/Library/Preferences/com.apple.iphonesimulator.plist -o -
# defaults delete com.apple.iphonesimulator ; rm ~/Library/preferences/com.apple.iphonesimulator.plist

prepareSimulator

exit 0
