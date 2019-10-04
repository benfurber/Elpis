import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";

import { NavigationType, Notification as NotificationType } from "interfaces";
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
    const { content } = props.item;
    const { post, reply } = content;

    const params = {
      id: post.id,
      commentId: reply && reply.comment.id,
      setDisplay: reply ? "comments" : "body",
    };

    return props.navigation.navigate("Post", params);
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
