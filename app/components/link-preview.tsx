import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useQuery } from "@apollo/react-hooks";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Title } from "components";
import { NavigationType } from "interfaces";
import { LINK } from "queries";
import { colours, layout, typography } from "styles";

interface Props {
  navigation: NavigationType;
  url: string;
}

function Author({ author }: { author: string | null }) {
  if (author) return <Text style={styles.text}>{author}</Text>;
  return null;
}

function Description({ description }: { description: string | null }) {
  if (description) return <Text style={styles.text}>{description}</Text>;
  return null;
}

function ImagePreview({ image }: { image: string | null }) {
  if (image) return <Image source={{ uri: image }} style={styles.image} />;
  return null;
}

function LinkPreview(props: Props) {
  const { navigation, url } = props;
  const variables = { url };
  const { data } = useQuery(LINK, { variables });

  if (data) {
    const { author, description, image, title } = data.link;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Browser", { uri: url })}
      >
        <View style={styles.container}>
          <ImagePreview image={image} />
          <View style={styles.containerText}>
            <Title style={styles.title} text={title} small />
            <Author author={author} />
            <Description description={description} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: layout.borderRadius,
    flexDirection: "row",
    marginBottom: layout.spacing,
    padding: layout.spacingS,
  },
  containerText: {
    flex: 1,
    paddingHorizontal: layout.spacingS,
  },
  image: {
    borderRadius: layout.borderRadius,
    width: 80,
  },
  text: {
    color: colours.pureWhite,
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
