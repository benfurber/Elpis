import React, { Component } from "react";
import { Animated, StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Icon, Title } from "components";
import { colours, layout } from "styles";

interface Props {
  onPress: () => void;
  text: string;
}

interface State {
  fade: Animated.Value;
}

class ButtonOverlay extends Component<Props, State> {
  state = {
    delay: new Animated.Value(0),
    fade: new Animated.Value(0),
  };

  componentDidMount() {
    this.animate();
  }

  animate() {
    const delayTiming = {
      duration: 2000,
      toValue: 1,
    };

    const timing = {
      duration: 1000,
      toValue: 0.85,
    };

    Animated.sequence([
      Animated.timing(this.state.delay, delayTiming),
      Animated.timing(this.state.fade, timing),
    ]).start(() => {
      this.animate();
    });
  }

  render() {
    const { onPress, text } = this.props;
    const { fade } = this.state;

    return (
      <Animated.View style={[styles.container, { opacity: fade }]}>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Icon style={styles.icon} name="comment-medical" />
          <Title text={text} style={styles.buttonText} small />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
  },
  buttonText: {
    color: colours.pureWhite,
  },
  container: {
    backgroundColor: colours.navyBlueDark,
    borderRadius: layout.borderRadiusL,
    bottom: layout.spacing,
    flexDirection: "row",
    left: layout.spacingS,
    margin: layout.spacing,
    paddingHorizontal: layout.spacing * 1.5,
    paddingVertical: layout.spacing,
    position: "absolute",
    zIndex: 1,
  },
  icon: {
    color: colours.pureWhite,
    paddingRight: layout.spacing,
  },
});

export { ButtonOverlay };