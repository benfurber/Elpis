import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { BackgroundModal, Badge, Notification, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { Analytics } from "utils";
import { layout, typography } from "styles";

const commentNotificationNew = {
  content: {
    author: {
      name: "May",
      avatarPath: "",
    },
    content:
      "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
    createdAt: new Date("2019-09-23"),
    id: "ck0o4wspk00540917wutatfi5",
  },
  newNotification: true,
  type: "comment",
  postId: "ck0o4wsph00530917sningx0z",
};

const postNotificationNew = {
  content: {
    author: {
      name: "E2M",
      avatarPath: "",
    },
    content:
      "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
    createdAt: new Date("2019-09-23"),
    imagePath: "",
    id: "ck0o4wsph00530917sningx0z",
  },
  newNotification: true,
  type: "post",
};

const commentNotification = {
  content: {
    author: {
      name: "May",
      avatarPath: "",
    },
    content:
      "Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
    createdAt: new Date("2019-09-23"),
    id: "ck0o4wspk00540917wutatfi5",
  },
  newNotification: false,
  type: "comment",
  postId: "ck0o4wsmd004q0917s30ywm4r",
};

const postNotification = {
  content: {
    author: {
      name: "E2M",
      avatarPath: "",
    },
    content:
      "Mara fisto yoda ben jade. Mace ben wedge jinn leia luke. Moff solo obi-wan antilles grievous lando mandalore.",
    createdAt: new Date("2019-09-23"),
    id: "ck0o4wsmd004q0917s30ywm4r",
    imagePath: "",
  },
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
    const { navigation } = this.props;

    return (
      <BackgroundModal>
        <ScrollView>
          <Title style={styles.title} text={labels.notifications.title} />
          <View style={styles.heading}>
            <Title text={labels.notifications.newMultiple} />
            <Badge left={65} number={2} />
          </View>
          <Notification item={commentNotificationNew} navigation={navigation} />
          <Notification item={postNotificationNew} navigation={navigation} />

          <View style={styles.heading}>
            <Title text={labels.notifications.oldMultiple} />
          </View>
          <Notification item={commentNotification} navigation={navigation} />
          <Notification item={postNotification} navigation={navigation} />
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
