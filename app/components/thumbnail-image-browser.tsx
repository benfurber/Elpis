import React from "react";
import { Image, StyleSheet, TouchableHighlight } from "react-native";

import { colours } from "styles";

type Props = {
  image: { node: { image: { uri: string } } };
  imageIndex: string;
  selected: boolean;
  setIndexCallback: (string) => void;
  width: number;
};

const ThumbnailImageBrowser = (props: Props) => {
  const { image, imageIndex, selected, setIndexCallback, width } = props;
  const borderWidth = 3;
  const imageWidth = width / 3 - borderWidth * 2;

  const styles = StyleSheet.create({
    highlight: {
      backgroundColor: colours.whiteTransparentHigh,
      borderWidth,
    },
    selectedHighlight: {
      borderColor: colours.emeraldGreen,
      opacity: 0.5,
    },
    unselectedHighlight: {
      borderColor: colours.whiteTransparentHigh,
      opacity: 1,
    },
  });

  const selectStyles = selected
    ? styles.selectedHighlight
    : styles.unselectedHighlight;
  const underlayColor = selected ? "transparent" : colours.emeraldGreen;

  return (
    <TouchableHighlight
      key={imageIndex}
      onPress={() => setIndexCallback(imageIndex)}
      style={[styles.highlight, selectStyles]}
      underlayColor={underlayColor}
    >
      <Image
        style={{
          height: imageWidth,
          width: imageWidth,
        }}
        source={{ uri: image.node.image.uri }}
      />
    </TouchableHighlight>
  );
};

export { ThumbnailImageBrowser };
