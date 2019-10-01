import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Avatar, Icon } from "components";
import { Notification as NotificationType } from "interfaces";
import { colours } from "styles";

interface Props {
  item: NotificationType;
}

class NotificationAvatar extends Component<Props> {
  typeIcon() {
    const { type } = this.props.item;
    const name = type === "comment" ? "comments" : "image";

    return (
      <View style={styles.icon}>
        <Icon colour={colours.pureWhite} name={name} size={30} />
      </View>
    );
  }

  render() {
    const { newNotification } = this.props.item;
    const size = newNotification ? "xl" : "medium";
    const style = newNotification ? styles.avatar : {};

    return (
      <View style={styles.row}>
        <Avatar avatarPath={null} size={size} styles={style} />
        {newNotification ? this.typeIcon() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    borderColor: colours.navyBlueDark,
    borderWidth: 4,
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
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export { NotificationAvatar as Avatar };
