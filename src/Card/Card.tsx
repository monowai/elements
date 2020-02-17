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
    borderColor: "#D8D8D8",
    padding: 10,
    marginTop: 5,
    marginBottom: 5
  },
  image: {
    width: width - 100,
    size: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
};

const Card = ({ image, text, inCart, action }: PruCardProps): JSX.Element => {
  const icon = inCart ? "check-circle" : "circle";
  return (
    <View style={styles.container}>
      <ImageButton icon={icon} color={"#2c9f45"} onPress={action} />
      <Image source={image} resizeMode={"contain"} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export interface PruCardProps {
  action: any;
  image: number;
  inCart: boolean;
  text: string;
}
Card.propTypes = {
  action: PropTypes.func.isRequired,
  image: PropTypes.number.isRequired,
  inCart: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Card;
