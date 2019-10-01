import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, Title } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_COMMENT, ADD_REPLY } from "mutations";
import { layout, typography, colours } from "styles";
import { Analytics, firstSentence } from "utils";

interface Props {
  commentId: null | Comment["id"];
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  textInput: string;
  textInputExtra: string;
  textInputEditable: boolean;
  title: string;
}

class AddReplyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInputEditable: true,
      textInput: "",
      textInputExtra: "",
      title: "",
    };
  }
  secondTextInput = TextInput as any;

  componentDidMount() {
    Analytics.trackContent({
      contentType: "AddReply",
      contentId: this.props.postId,
    });
  }

  componentDidUpdate(_props, state) {
    const textInput = firstSentence(state.textInput);

    if (textInput !== state.textInput) {
      this.setState({ textInput });
      if (this.secondTextInput) {
        return this.secondTextInput.focus();
      }
    }
  }

  onSubmitEditing(query, id) {
    const { textInput, textInputExtra } = this.state;
    this.setState({ textInputEditable: false });

    const content = textInput + " " + textInputExtra;

    query({
      variables: {
        content,
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
      placeholder: labels.addPlaceholderTitle,
      onChangeText: textInput => this.setState({ textInput }),
      value: this.state.textInput,
      returnKeyLabel: labels.submit,
    };

    if (mutation === ADD_COMMENT) {
      return (createComment, {}) => (
        <View style={styles.textInputContainer}>
          <Text style={styles.label}>{labels.title}</Text>
          <TextInput
            onSubmitEditing={() =>
              this.onSubmitEditing(createComment, this.props.postId)
            }
            style={styles.title}
            {...args}
          />
          <Text style={styles.label}>{labels.body}</Text>
          <TextInput
            {...args}
            autoFocus={false}
            ref={input => (this.secondTextInput = input)}
            onSubmitEditing={() =>
              this.onSubmitEditing(createComment, this.props.postId)
            }
            onChangeText={textInputExtra => this.setState({ textInputExtra })}
            value={this.state.textInputExtra}
            style={styles.text}
            placeholder={labels.addPlaceholderBody}
          />
        </View>
      );
    }

    return (createReply, {}) => (
      <TextInput
        onSubmitEditing={() =>
          this.onSubmitEditing(createReply, this.props.commentId)
        }
        style={styles.text}
        {...args}
      />
    );
  }

  renderAddResponse(mutation) {
    return <Mutation mutation={mutation}>{this.input(mutation)}</Mutation>;
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
              <Icon name="times-circle" size={30} />
            </TouchableOpacity>
          </View>
          <Title style={styles.ctaText} text={text + ":"} small />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.row}>{this.renderAddResponse(mutation)}</View>
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
  textInputContainer: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    padding: layout.spacingL,
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeXL,
    flexWrap: "wrap",
  },
  text: {
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeL,
    padding: layout.spacingL,
    width: "100%",
  },
});

const wrappedAddReplyScreen = withMappedNavigationParams()(AddReplyScreen);
export {
  wrappedAddReplyScreen as AddReplyScreen,
  AddReplyScreen as UnwrappedAddReplyScreen,
};
