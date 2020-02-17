import { AppRegistry } from "react-native";
import { name as appName } from "./src/app.json";
import StorybookUIRoot from "./storybook";

AppRegistry.registerComponent(appName, () => StorybookUIRoot);
