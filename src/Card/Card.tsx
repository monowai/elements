import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import ImageButton from "../ImageButton";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const styles = {
  container: {
    width: width - 40,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: width - 100
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

const Card = ({ image, text, isFavourite, action }: PruCardProps): JSX.Element => {
  const icon = isFavourite ? "heart" : "heart-o";
  return (
    <View style={styles.container}>
      <Image source={image} resizeMode={"contain"} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <ImageButton icon={icon} color={"#333"} onPress={action} />
    </View>
  );
};

export interface PruCardProps {
  action: any;
  image: number;
  isFavourite: boolean;
  text: string;
}
Card.propTypes = {
  action: PropTypes.func.isRequired,
  image: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
