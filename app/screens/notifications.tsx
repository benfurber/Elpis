import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Avatar, BackgroundContainer, Icon, Title } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { Analytics } from "utils";
import { colours, layout, typography } from "styles";

interface Props {
  navigation: NavigationType;
}

class NotificationsScreen extends Component<Props> {
  componentDidMount() {
    Analytics.track("Notifications");
  }

  render() {
    const notificationTitle =
      "May left a response to your comment on POST TITLE";

    return (
      <BackgroundContainer>
        <Title style={styles.title} text={labels.notifications.title} />
        <View style={styles.heading}>
          <Title text={labels.notifications.new} />
        </View>
        <View style={styles.item}>
          <View style={styles.row}>
            <View style={styles.row}>
              <Avatar avatarPath={null} size="xl" styles={styles.avatar} />
              <View style={styles.icon}>
                <Icon colour={colours.pureWhite} name="comments" size={30} />
              </View>
            </View>
            <View style={styles.notificationHeadings}>
              <Title
                text={notificationTitle}
                style={styles.notificationTitle}
                small
              />
              <Text style={styles.date}>15 minutes ago</Text>
            </View>
          </View>
          <View style={[styles.row, styles.content]}>
            <View style={styles.quotes}>
              <Icon name="quote-left" size={20} style={styles.quote} />
              <Icon name="quote-right" size={20} style={styles.quote} />
            </View>
            <Text style={styles.text}>
              Lucas ipsum dolor sit amet organa c-3p0 hutt anakin ponda biggs
              yoda moff jinn solo. Mara fisto yoda ben jade. Mace ben wedge jinn
              leia luke. Moff solo obi-wan antilles grievous lando mandalore.
            </Text>
          </View>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: colours.navyBlueDark,
    borderWidth: 4,
  },
  content: {
    paddingVertical: layout.spacingL,
  },
  date: {
    color: colours.mediumGrey,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colours.transparentBlue,
    borderRadius: 60,
    left: -10,
    width: 35 + 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    zIndex: -1,
  },
  heading: {
    backgroundColor: colours.transparentBlue,
    marginVertical: layout.spacing,
    paddingHorizontal: layout.spacingL,
    paddingTop: layout.spacingS,
  },
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacing,
  },
  notificationContent: {
    padding: layout.spacing,
  },
  notificationHeadings: {
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
  notificationTitle: {
    color: colours.darkGrey,
    fontWeight: "normal",
  },
  quote: {
    paddingBottom: layout.spacingS,
  },
  quotes: {
    alignSelf: "flex-start",
    paddingLeft: layout.spacingS,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colours.mediumGrey,
    flex: 1,
    paddingHorizontal: layout.spacing,
  },
  title: {
    fontSize: typography.fontSizeXL,
    margin: layout.spacingL,
  },
});

export { NotificationsScreen };
