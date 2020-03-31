import React from "react";
import { StyleSheet, View } from "react-native";

import { useMutation } from "@apollo/react-hooks";
import { TouchableOpacity } from "react-native-gesture-handler";

import { NavigationType, Notification as NotificationType } from "interfaces";
import { labels } from "labels";
import { AGE_NOTIFICATION } from "mutations";
import { colours, layout } from "styles";

import { Avatar } from "./avatar";
import { Details } from "./details";
import { Title } from "./title";

interface Props {
  item: NotificationType;
  navigation: NavigationType;
}

function Notification(props: Props) {
  const onPress = () => {
    const { item, navigation } = props;
    const { content } = item;
    const { post, reply } = content;

    const backToText = labels.back.toNotifications;

    if (reply) {
      const params = {
        backToText,
        id: reply.comment.id,
        postId: post.id,
      };
      return navigation.push("Reply", params);
    }

    const params = {
      backToText,
      id: post.id,
      setDisplay: "body",
    };
    return navigation.push("Post", params);
  };

  const { item } = props;
  const [ageNotification] = useMutation(AGE_NOTIFICATION);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        ageNotification({ variables: { id: item.id } });
        return onPress();
      }}
    >
      <View style={styles.row}>
        <Avatar item={item} />
        <Title item={item} />
      </View>
      <Details item={item} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colours.whiteTransparent,
    marginBottom: layout.spacing,
    padding: layout.spacing,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export { Notification };
