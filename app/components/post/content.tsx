import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { DisplayContent } from "components";
import { Post } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate, validURL } from "utils";

interface Props {
  content: Post["content"];
  createdAt?: Post["createdAt"];
  imagePath: Post["imagePath"];
}

const Content = (props: Props) => {
  const renderText = () => {
    if (props.content) {
      return (
        <View style={styles.text}>
          <DisplayContent content={props.content} />
        </View>
      );
    }
  };

  const renderDate = () => {
    if (props.createdAt) {
      return (
        <Text style={[elements.textDate, styles.text]}>
          {formatDate(props.createdAt)}
        </Text>
      );
    }
  };

  const renderImage = () => {
    const { imagePath } = props;

    if (imagePath && validURL(imagePath)) {
      return <FlexImage source={{ uri: imagePath }} style={styles.image} />;
    }
  };

  return (
    <View style={styles.body}>
      {renderImage()}
      {renderText()}
      {renderDate()}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.spacing,
    width: "100%",
  },
  image: {
    borderRadius: layout.borderRadius,
    overflow: "hidden",
  },
  text: {
    marginVertical: 10,
  },
});

export { Content };
