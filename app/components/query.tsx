import React, { Component, ReactNode } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Query } from "react-apollo";

import { ErrorMessage, Loading } from "components";
import { bugTracker } from "utils";

interface Props {
  blueMode?: boolean;
  children: (object) => ReactNode;
  pollInterval?: number;
  query: any;
  variables?: object;
}

interface State {
  refreshing: boolean;
}

class NewQuery extends Component<Props, State> {
  state = {
    refreshing: false,
  };

  renderError(error) {
    return (
      <View style={styles.container}>
        <ErrorMessage error={error} />
      </View>
    );
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Loading blueMode={this.props.blueMode} />
      </View>
    );
  }

  renderData(args, data) {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={args.networkStatus === 4}
            onRefresh={() => args.refetch()}
          />
        }
      >
        {this.renderContent(data)}
      </ScrollView>
    );
  }

  renderContent(data) {
    return this.props.children(data);
  }

  render() {
    return (
      <Query
        query={this.props.query}
        variables={this.props.variables}
        pollInterval={this.props.pollInterval || undefined}
        notifyOnNetworkStatusChange
      >
        {args => {
          if (args.networkStatus === 1) {
            return this.renderLoading();
          }

          if (args.error) {
            bugTracker.notify(args.error);
            return this.renderError(args.error);
          }

          return this.renderData(args, args.data);
        }}
      </Query>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    flex: 1,
  },
});

export { NewQuery as Query };
