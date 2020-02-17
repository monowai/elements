import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = {
  button: {
    alignSelf: "center",
    marginTop: 10
  }
};

const ImageButton = ({ icon, color, onPress }: PruIconProps): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon.Button name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
};

interface PruIconProps {
  icon: string;
  color: string;
  onPress: any;
}
ImageButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ImageButton;
