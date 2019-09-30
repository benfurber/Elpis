import React, { Component } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

import { Icon, Title } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { colours, layout } from "styles";

interface Props {
  commentId: null | Comment["id"];
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  fade: Animated.Value;
}

class ButtonAddReply extends Component<Props, State> {
  state = {
    fade: new Animated.Value(0),
    delay: new Animated.Value(0),
  };

  componentDidMount() {
    this.animate();
  }

  animate() {
    const delayTiming = {
      toValue: 1,
      duration: 2000,
    };

    const timing = {
      toValue: 0.85,
      duration: 1000,
    };

    Animated.sequence([
      Animated.timing(this.state.delay, delayTiming),
      Animated.timing(this.state.fade, timing),
    ]).start(() => {
      this.animate();
    });
  }

  onPress() {
    const { commentId, postId } = this.props;
    this.props.navigation.navigate("AddReply", { postId, commentId });
  }

  render() {
    const { commentId } = this.props;
    let { fade } = this.state;

    const text = commentId ? labels.addYourReply : labels.addNewTopic;

    return (
      <Animated.View style={{ opacity: fade }}>
        <TouchableOpacity style={styles.button} onPress={() => this.onPress()}>
          <Icon style={styles.icon} name="comment-medical" />
          <Title text={text} style={styles.buttonText} small />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.navyBlueDark,
    borderRadius: layout.borderRadiusL,
    bottom: layout.spacingS,
    flexDirection: "row",
    margin: layout.spacing,
    paddingVertical: layout.spacing,
    paddingHorizontal: layout.spacing * 1.5,
    position: "absolute",
    left: layout.spacingS,
    zIndex: 1,
  },
  buttonText: {
    color: colours.pureWhite,
  },
  icon: {
    color: colours.pureWhite,
    paddingRight: layout.spacing,
  },
});

export { ButtonAddReply };
