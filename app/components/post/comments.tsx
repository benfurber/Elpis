import React from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import { Post } from "interfaces";
import { colours, layout, typography } from "styles";
import { firstSentence } from "utils";

interface Props {
  description: Post["description"];
}

const Comments = (props: Props) => {
  const renderDescription = () => {
    if (props.description) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{firstSentence(props.description)}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {renderDescription()}
        <View style={styles.commentsHeadingContainer}>
          <Text style={styles.commentsHeading}>x Comments - x Topics</Text>
        </View>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>4</Text>
            </View>
            <View>
              <Image
                source={require("assets/images/profile-pic-may.jpg")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            <Text style={styles.commentTitle}>
              Meu pai fez o que ela mandou…
            </Text>
            <Text style={styles.commentDate}>Há 7 minutos atrás</Text>
            <Text>
              Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos
              e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena
              que a violência só piorou.
            </Text>
          </View>
        </View>
        <View style={styles.commentContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>4</Text>
            </View>
            <View>
              <Image
                source={require("assets/images/profile-pic-may.jpg")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.commentBodyContainer}>
            <Text style={styles.commentTitle}>
              Meu pai fez o que ela mandou…
            </Text>
            <Text style={styles.commentDate}>Há 7 minutos atrás</Text>
            <Text>
              Dá certo sim, o meu pai, por exemplo, fugiu quando eu tinha 5 anos
              e eu não faço ideia da onde ele esteja. Nunca mais voltou, pena
              que a violência só piorou.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60
  },
  container: {
    backgroundColor: colours.whiteTransparent,
    borderTopRightRadius: layout.borderRadius,
    padding: layout.spacing,
    width: "100%"
  },
  commentContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: layout.spacing
  },
  commentBodyContainer: {
    marginLeft: layout.spacing
  },
  commentDate: {
    color: colours.darkGrey,
    fontStyle: "italic",
    marginBottom: layout.spacing
  },
  commentTitle: {
    fontSize: typography.fontSizeL,
    marginBottom: layout.spacingS
  },
  commentsHeadingContainer: {
    marginBottom: layout.spacing
  },
  commentsHeading: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold"
  },
  badge: {
    alignItems: "center",
    backgroundColor: colours.navyBlueDark,
    borderRadius: 11,
    flexDirection: "column",
    height: 22,
    justifyContent: "center",
    left: 35,
    position: "absolute",
    width: 22,
    zIndex: 1
  },
  badgeText: {
    color: colours.pureWhite,
    fontSize: typography.fontSizeS
  },
  date: {
    fontStyle: "italic"
  },
  titleContainer: {
    backgroundColor: colours.whiteTransparent,
    borderRadius: layout.borderRadius,
    marginBottom: layout.spacing,
    padding: layout.spacing
  },
  title: {
    fontSize: typography.fontSizeL,
    fontWeight: "bold"
  },
  image: {
    backgroundColor: colours.emeraldGreen,
    borderRadius: 25,
    height: 50,
    marginTop: 10,
    overflow: "hidden",
    width: 50
  }
});

export { Comments };
