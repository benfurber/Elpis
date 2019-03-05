import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlexImage from "react-native-flex-image";

import { Post } from "interfaces";
import { colours, layout } from "styles";

const formatDate = (date: Date) => {
  const formatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return date.toLocaleString("en-GB", formatOptions);
};

interface Props {
  date: Post["date"];
  description: Post["description"];
  imagePath: Post["imagePath"];
}

const Body = (props: Props) => {
  const renderBodyText = () => {
    if (props.description) {
      return <Text style={styles.text}>{props.description}</Text>;
    }
  };

  return (
    <View style={styles.body}>
      <FlexImage source={props.imagePath} style={styles.image} />
      {renderBodyText()}
      <Text style={[styles.date, styles.text]}>{formatDate(props.date)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.padding,
    width: "100%"
  },
  date: {
    fontStyle: "italic"
  },
  text: {
    marginVertical: 10
  },
  image: {
    borderRadius: layout.borderRadius,
    overflow: "hidden"
  }
});

export { Body };
