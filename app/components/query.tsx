import React, { Component, ReactNode } from "react";
import { RefreshControl, ScrollView, StyleSheet, View } from "react-native";
import { Query } from "react-apollo";

import { ErrorMessage, Loading } from "components";

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

  renderContent(data) {
    if (!data || data === undefined) {
      return this.renderLoading();
    }
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
        {({ error, data, refetch, networkStatus }) => {
          if (error) {
            return this.renderError(error);
          }

          return (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={networkStatus === 4}
                  onRefresh={() => refetch()}
                />
              }
            >
              {this.renderContent(data)}
            </ScrollView>
          );
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
