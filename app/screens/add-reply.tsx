import React, { Component } from "react";
import { 
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from 'react-navigation-props-mapper'

import { BackgroundContainer, Icon, Title } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_COMMENT, ADD_REPLY } from "mutations";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  commentId: null | Comment["id"]
  navigation: NavigationType;
  postId: Post["id"]
}

interface State {
  title: string;
  textInput: string;
  textInputEditable: boolean;
}

class AddReplyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInputEditable: true,
      textInput: "",
      title: "",
    }
  }

  componentDidMount() {
    Analytics.trackContent({
      contentType: "AddReply",
      contentId: this.props.postId,
    });
  }

  onSubmitEditing(query, id) {
    this.setState({ textInputEditable: false });

    query({
      variables: {
        content: this.state.textInput,
        id,
      },
    }).then(() => {
      this.setState({ textInput: "", textInputEditable: true });
      this.props.navigation.pop();
    });
  }

  input(mutation) {
    const { textInputEditable } = this.state;

    const args = {
      autoFocus: true,
      editable: textInputEditable,
      multiline: true,
      placeholder: labels.addPlaceholder,
      onChangeText: textInput => this.setState({ textInput }),
      value: this.state.textInput,
      returnKeyLabel: labels.submit,
    }

    if (mutation === ADD_COMMENT) {
      return (createComment, {}) => (
        <TextInput
          onSubmitEditing={
            () => this.onSubmitEditing(createComment, this.props.postId)
          }
          style={styles.title}
          { ...args }
        />
      )
    }

    return (createReply, {}) => (
      <TextInput
        onSubmitEditing={
          () => this.onSubmitEditing(createReply, this.props.commentId)
        }
        style={styles.text}
        { ...args }
      />
    )
  }

  renderAddResponse(mutation) {
    return (
      <Mutation mutation={mutation}>
        {this.input(mutation)}
      </Mutation>
    );
  }

  render() {
    const { commentId } = this.props;

    const text = commentId ? labels.addYourReply : labels.addNewTopic;
    const mutation = commentId ? ADD_REPLY : ADD_COMMENT;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
              <Icon
                name="times-circle"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Title style={styles.ctaText} text={text + ":"} small />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.row}>
              {this.renderAddResponse(mutation)}
            </View>
          </ScrollView>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    flex: 1,
    paddingTop: layout.spacing,
  },
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  ctaText: {
    paddingHorizontal: layout.spacing,
  },
  header: {},
  label: {
    color: colours.mediumGrey,
    fontWeight: "bold",
    paddingTop: layout.spacingXL,
    paddingHorizontal: layout.spacingL,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  title: {
    padding: layout.spacingL,
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeXL,
    width: "100%",
  },
  text: {
    padding: layout.spacingL,
    fontSize: typography.fontSizeL,
    width: "100%",
  }
});

const wrappedAddReplyScreen = withMappedNavigationParams()(AddReplyScreen)
export { 
  wrappedAddReplyScreen as AddReplyScreen,
  AddReplyScreen as UnwrappedAddReplyScreen,
};
