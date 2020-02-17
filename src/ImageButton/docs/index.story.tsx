import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import ImageButton from "../ImageButton";

storiesOf("ImageButtons", module)
  .addDecorator((getStory: () => React.ReactNode) => (
    <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
  ))
  .add("In Cart", () => (
    <ImageButton icon={"check-circle"} color={"#2c9f45"} onPress={() => console.log("clicked!")} />
  ))
  .add("Not in Cart", () => (
    <ImageButton icon={"circle"} color={"#2c9f45"} onPress={() => console.log("clicked!")} />
  ))
  .add("Plus", () => (
    <ImageButton icon={"plus"} color={"#e50023"} onPress={() => console.log("clicked!")} />
  ))
  .add("Minus", () => (
    <ImageButton icon={"minus"} color={"#e50023"} onPress={() => console.log("clicked!")} />
  ));
