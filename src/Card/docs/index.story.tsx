import React from "react";
import { View } from "react-native";
import Card from "../Card";

import { storiesOf } from "@storybook/react-native";

storiesOf("Card", module)
  .addDecorator((getStory: () => React.ReactNode) => (
    <View style={{ flex: 1, alignItems: "center" }}>{getStory()}</View>
  ))
  .add("default", () => (
    <Card
      image={require("../../images/charizard.jpg")}
      text={"Charizard"}
      isFavorite={false}
      action={() => {
        console.log("clicked!");
      }}
      isFavourite={false}
    />
  ))
  .add("favourites", () => (
    <Card
      image={require("../../images/lugia.jpg")}
      text={"Lugia"}
      isFavorite={true}
      action={() => {
        console.log("clicked!");
      }}
      isFavourite={true}
    />
  ));
