import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { Title } from "components";
import { LINK } from "queries";
import { colours, layout, typography } from "styles";

interface Props {
  url: string;
}

function LinkPreview(props: Props) {
  const { url } = props;
  const variables = { url };
  const { data } = useQuery(LINK, { variables });

  if (data) {
    const { description, image, title } = data.link;

    return (
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.containerText}>
          <Title style={styles.title} text={title} small />
          <Text style={styles.url}>{url}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: layout.borderRadius,
    flexDirection: "row",
    padding: layout.spacingS,
    marginBottom: layout.spacing,
  },
  containerText: {
    flex: 1,
    paddingHorizontal: layout.spacingS,
  },
  description: {
    color: colours.pureWhite,
  },
  image: {
    borderRadius: layout.borderRadius,
    width: 80,
  },
  title: {
    color: colours.pureWhite,
    marginBottom: 0,
  },
  url: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeXS,
    marginBottom: layout.spacingS,
  },
});

export { LinkPreview };
