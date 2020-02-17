import React from "react";
import { View } from "react-native";
import Card from "../Card";

import { storiesOf } from "@storybook/react-native";

storiesOf("Card", module)
  .addDecorator((getStory: () => React.ReactNode) => (
    <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
  ))
  .add("Item", () => (
    <Card
      image={require("../../images/pills.jpeg")}
      text={"Nurofen"}
      inCart={false}
      action={() => {
        console.log("clicked!");
      }}
    />
  ))
  .add("Item in Cart", () => (
    <Card
      image={require("../../images/pills.jpeg")}
      text={"Panadol"}
      inCart={true}
      action={() => {
        console.log("clicked!");
      }}
    />
  ));
