import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { BackgroundModal, Badge, Notification, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { Analytics } from "utils";
import { colours, layout, typography } from "styles";

const commentNotificationNew = {
  author: {
    name: "May",
    avatarPath: "",
  },
  content:
    "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  date: new Date("2019-09-23"),
  newNotification: true,
  type: "comment",
};

const postNotificationNew = {
  author: {
    name: "E2M",
    avatarPath: "",
  },
  content:
    "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  date: new Date("2019-09-23"),
  imagePath: "",
  newNotification: true,
  type: "post",
};

const commentNotification = {
  author: {
    name: "May",
    avatarPath: "",
  },
  content:
    "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  date: new Date("2019-09-23"),
  newNotification: false,
  type: "comment",
};

const postNotification = {
  author: {
    name: "E2M",
    avatarPath: "",
  },
  content:
    "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
  date: new Date("2019-09-23"),
  imagePath: "",
  newNotification: false,
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
      <BackgroundModal>
        <ScrollView>
          <Title style={styles.title} text={labels.notifications.title} />
          <View style={styles.heading}>
            <Title text={labels.notifications.newMultiple} />
            <Badge left={65} number={2} />
          </View>
          <Notification item={commentNotificationNew} />
          <Notification item={postNotificationNew} />

          <View style={styles.heading}>
            <Title text={labels.notifications.oldMultiple} />
          </View>
          <Notification item={commentNotification} />
          <Notification item={postNotification} />
        </ScrollView>
      </BackgroundModal>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
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
