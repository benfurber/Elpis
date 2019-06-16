import React, { Component } from "react";
import { Animated, StyleSheet } from "react-native";

class Loading extends Component {
  state = {
    fade1: new Animated.Value(0),
    fade2: new Animated.Value(0),
    fade3: new Animated.Value(0),
    fade4: new Animated.Value(0),
  };

  componentDidMount() {
    this.animationLoop();
  }

  animationLoop() {
    const fadeIn = {
      toValue: 1,
      duration: 500,
    };
    const fadeOut = {
      toValue: 0,
      duration: 500,
    };

    Animated.sequence([
      Animated.timing(this.state.fade1, fadeIn),
      Animated.timing(this.state.fade2, fadeIn),
      Animated.timing(this.state.fade3, fadeIn),
      Animated.timing(this.state.fade4, fadeIn),
      Animated.timing(this.state.fade4, fadeOut),
      Animated.timing(this.state.fade3, fadeOut),
      Animated.timing(this.state.fade2, fadeOut),
      Animated.timing(this.state.fade1, fadeOut),
    ]).start(() => {
      this.animationLoop();
    });
  }

  render() {
    let { fade1, fade2, fade3, fade4 } = this.state;

    return (
      <Animated.View style={[{ opacity: fade1 }, styles.circle1]}>
        <Animated.View style={[{ opacity: fade2 }, styles.circle2]}>
          <Animated.View style={[{ opacity: fade3 }, styles.circle3]}>
            <Animated.View style={[{ opacity: fade4 }, styles.circle4]} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  circle1: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 150,
    height: 300,
    width: 300,
  },
  circle2: {
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 125,
    height: 250,
    width: 250,
    marginTop: 35,
    marginLeft: 30,
  },
  circle3: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 80,
    height: 160,
    width: 160,
    marginTop: 50,
    marginLeft: 25,
  },
  circle4: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 40,
    height: 80,
    width: 80,
    marginTop: 20,
    marginLeft: 50,
  },
});

export { Loading };
