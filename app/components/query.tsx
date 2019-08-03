import React, { Component, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Query } from "react-apollo";

import { ErrorMessage, Loading } from "components";

interface Props {
  blueMode?: boolean;
  children: (object) => ReactNode;
  query: any;
  variables?: object;
}

class NewQuery extends Component<Props> {
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

  render() {
    return (
      <Query query={this.props.query} variables={this.props.variables}>
        {({ loading, error, data }) => {
          if (loading) {
            return this.renderLoading();
          }
          if (error) {
            return this.renderError(error);
          }

          return this.props.children(data);
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
