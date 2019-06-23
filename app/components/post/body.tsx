import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Post } from "interfaces";
import { colours, elements, layout } from "styles";
import { formatDate } from "utils";

interface Props {
  body: Post["body"];
  date?: Post["date"];
  imagePath: Post["imagePath"];
}

const Body = (props: Props) => {
  const renderBodyText = () => {
    if (props.body) {
      return <Text style={styles.text}>{props.body}</Text>;
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

  const validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i",
    ); // fragment locator
    return !!pattern.test(str);
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
      {renderBodyText()}
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

export { Body };
