import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import ImageButton from "../ImageButton";

storiesOf("ImageButton", module)
  .addDecorator((getStory: () => React.ReactNode) => (
    <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
  ))
  .add("on", () => (
    <ImageButton icon={"heart"} color={"#333"} onPress={() => console.log("clicked!")} />
  ))
  .add("off", () => (
    <ImageButton icon={"heart-o"} color={"#333"} onPress={() => console.log("clicked!")} />
  ));
