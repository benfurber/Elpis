import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { BackgroundContainer, Notification, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { Analytics } from "utils";
import { colours, layout, typography } from "styles";

const commentNotification = {
  author: {
    name: "May",
    avatarPath: "",
  },
  content:
    "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  date: new Date("2019-09-23"),
  type: "comment",
};

const postNotification = {
  author: {
    name: "E2M",
    avatarPath: "",
  },
  content:
    "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  imagePath: "",
  date: new Date("2019-09-23"),
  type: "post",
};

interface Props {
  navigation: NavigationType;
}

class NotificationsScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Notifications");
  }

  render() {
    return (
      <BackgroundContainer>
        <Title style={styles.title} text={labels.notifications.title} />
        <View style={styles.heading}>
          <Title text={labels.notifications.new} />
        </View>
        <Notification item={commentNotification} />
        <Notification item={postNotification} />
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: colours.transparentBlue,
    marginVertical: layout.spacing,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacingS,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { NotificationsScreen };
