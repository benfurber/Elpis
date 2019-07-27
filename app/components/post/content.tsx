import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Post } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate, validURL } from "utils";

interface Props {
  content: Post["content"];
  date?: Post["date"];
  imagePath: Post["imagePath"];
}

const Content = (props: Props) => {
  const renderText = () => {
    if (props.content) {
      return <Text style={styles.text}>{props.content}</Text>;
    }
  };

  const renderDate = () => {
    if (props.date) {
      return (
        <Text style={[elements.textDate, styles.text]}>
          {formatDate(props.date)}
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
  text: {
    marginVertical: 10,
  },
  image: {
    borderRadius: layout.borderRadius,
    overflow: "hidden",
  },
});

export { Content };
