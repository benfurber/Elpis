import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

import { Post as PostInterface } from "interfaces";

import { Body } from "./body";
import { Comments } from "./comments";
import { Footer } from "./footer";
import { Tabs } from "./tabs";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  post: PostInterface;
  setDisplay?: string;
}

interface State {
  display: string;
}

class Post extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      display: "body"
    };
  }

  componentDidMount() {
    if (this.props.setDisplay) {
      this.setState({ display: this.props.setDisplay });
    }
  }

  onPressComments = () => {
    const { navigation, post } = this.props;
    return navigation.navigate("Post", {
      post,
      setDisplay: "comments"
    });
  };

  onPressPost = () => {
    return this.props.navigation.goBack();
  };

  renderBody() {
    const { date, description, imagePath } = this.props.post;
    return <Body date={date} description={description} imagePath={imagePath} />;
  }

  renderComments() {
    const { comments, description } = this.props.post;
    return <Comments comments={comments} description={description} />;
  }

  renderContent() {
    switch (this.state.display) {
      case "body":
        return this.renderBody();
      case "comments":
        return this.renderComments();
      default:
        return this.renderLoading();
    }
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );
  }

  render() {
    const { author } = this.props.post;

    return (
      <View style={styles.container}>
        <Tabs
          onPressComments={this.onPressComments}
          onPressPost={this.onPressPost}
          display={this.state.display}
        />
        {this.renderContent()}
        <Footer avatarPath={author.avatarPath} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  }
});

export { Post };
