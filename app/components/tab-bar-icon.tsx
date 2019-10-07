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
  Notifications: "bell",
};

function TabBarIcon(props: Props) {
  const { focused, routeName } = props;
  const { data } = useQuery(NOTIFICATIONS_UNREAD);

  const name = routeNameIcon[routeName];

  const badge = number =>
    routeName === "Notifications" && <Badge left={20} number={number} />;

  return (
    <View>
      <Icon
        colour={focused ? colours.darkGrey : colours.mediumGrey}
        name={name}
        size={35}
        solid={focused}
      />
      {data && badge(data.me.unreadNotifications)}
    </View>
  );
}

export { TabBarIcon };
