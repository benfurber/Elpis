import React from "react";
import { View } from "react-native";
import { useQuery } from "@apollo/react-hooks";

import { Badge, Icon } from "components";
import { NOTIFICATIONS_UNREAD } from "queries";
import { colours } from "styles";

interface Props {
  routeName: string;
  focused: boolean;
}

const routeNameIcon = {
  Feed: "newspaper",
  Feedback: "file-alt",
  Notification: "bell",
  Settings: "cog",
};

function NotificationBadge() {
  const { data } = useQuery(NOTIFICATIONS_UNREAD);

  if (data) return <Badge left={20} number={data.me.unreadNotifications} />;
  return null;
}

function IconTabBar(props: Props) {
  const { focused, routeName } = props;

  const name = routeNameIcon[routeName];

  return (
    <View>
      <Icon
        colour={focused ? colours.darkGrey : colours.mediumGrey}
        name={name}
        size={30}
        solid={focused}
      />
      {routeName === "Notification" && <NotificationBadge />}
    </View>
  );
}

export { IconTabBar };
