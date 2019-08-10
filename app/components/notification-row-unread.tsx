import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FlexImage from "react-native-flex-image";

import { Avatar, Icon, Title } from "components";
import { labels } from "labels";
import { get } from "lodash";
import { colours, layout, typography } from "styles";
import { firstSentence, formatDate } from "utils";

interface Props {
  item: any;
}

const NotificationRowUnread = (props: Props) => {
  let {
    avatar,
    container,
    icon,
    heading,
    row,
    description,
    contentImage,
    headingContainer,
    contentContainer,
    imageContainer,
  } = styles;
  let { item } = props;

  let itemType = get(item, "type", "");
  let { post, reply } = labels.notification;
  let supportText = itemType == "post" ? post : reply;

  let headingText = `${get(item.author, "name", "")}  ${supportText}`;

  return (
    <View style={container}>
      <View style={row}>
        <View style={{ flex: 1 }}>
          <Avatar avatarPath={item.author.image} size={"xl"} styles={avatar} />
          <View styles={icon}>
            <Icon name="comments" size={35} />
          </View>
        </View>
        <View style={headingContainer}>
          <Title text={headingText} style={heading} />
          <Text>{formatDate(item.date)}</Text>
        </View>
      </View>
      <View style={row}>
        <View style={imageContainer}>
          <FlexImage source={{ uri: item.imagePath }} style={contentImage} />
        </View>
        <View style={contentContainer}>
          <Text style={description}>{firstSentence(item.content)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 4,
    borderColor: colours.navyBlueDark,
  },
  container: {
    flex: 1,
    backgroundColor: colours.whiteTransparent,
    paddingTop: layout.spacing,
    paddingHorizontal: layout.spacing,
    marginBottom: layout.spacing,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    paddingBottom: layout.spacingL,
  },
  heading: {
    color: colours.darkGrey,
  },
  description: {
    fontSize: typography.fontSize,
  },
  contentImage: {
    overflow: "hidden",
  },
  headingContainer: {
    flex: 2,
    paddingHorizontal: layout.spacing,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: layout.spacing,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    alignContent: "center",
    aspectRatio: 16 / 9,
    overflow: "hidden",
  },
});

export { NotificationRowUnread };
