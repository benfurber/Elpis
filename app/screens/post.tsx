import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Post } from "components";
import { NavigationType } from "interfaces";
import { colours } from "styles";

interface Props {
  navigation: NavigationType;
}

class PostScreen extends Component<Props> {
  getPost() {
    const { navigation } = this.props;
    return navigation.getParam("post", null);
  }

  getSetDisplay() {
    const { navigation } = this.props;

    let setDisplay;
    if (navigation) {
      setDisplay = navigation.getParam("setDisplay", "body");
    }
    return setDisplay;
  }

  getParam(param: string) {
    const { navigation } = this.props;

    let theParam;
    if (navigation) {
      theParam = navigation.getParam(param);
    }
    return theParam;
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Post
          navigation={this.props.navigation}
          post={this.getParam("post")}
          setDisplay={this.getParam("setDisplay")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.transparentBlue,
    flex: 1,
    flexDirection: "column"
  }
});

export { PostScreen };
