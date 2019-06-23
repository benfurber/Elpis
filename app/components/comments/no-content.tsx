import React, { Component } from "react";
import { Image, StyleSheet, View } from "react-native";

import { Title } from "components";
import { layout, typography } from "styles";

const noCommentsBoxPath = "../../assets/images/no-comments-box.png";

interface Props {
  text: string;
}

class NoContent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require(noCommentsBoxPath)} />
        <Title style={styles.title} text={this.props.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.spacing,
    paddingTop: layout.spacingL,
    paddingBottom: layout.spacingXL,
  },
  image: {
    alignSelf: "center",
  },
  title: {
    alignContent: "center",
    alignSelf: "center",
    fontSize: typography.fontSizeXL,
    textAlign: "center",
  },
});

export { NoContent };
