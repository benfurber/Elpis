import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { withApollo } from "react-apollo";
import { ApolloClient } from "apollo-client";

import { NavigationType, Notification as NotificationType } from "interfaces";
import { AGE_NOTIFICATION } from "mutations";
import { colours, layout } from "styles";

import { Avatar } from "./avatar";
import { Details } from "./details";
import { Title } from "./title";

interface Props {
  item: NotificationType;
  client: ApolloClient<{}>;
  navigation: NavigationType;
}

class Notification extends Component<Props> {
  onPress = () => {
    const { item, client } = this.props;
    const { content, id } = item;
    const { post, reply } = content;

    const params = {
      id: post.id,
      commentId: reply && reply.comment.id,
      setDisplay: reply ? "comments" : "body",
    };

    client.mutate({ mutation: AGE_NOTIFICATION, variables: { id } });
    return this.props.navigation.navigate("Post", params);
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={this.onPress}>
        <View style={styles.row}>
          <Avatar item={item} />
          <Title item={item} />
        </View>
        <Details item={item} />
      </TouchableOpacity>
    );
  }
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

const withMutation = withApollo(Notification);
export { withMutation as Notification };
