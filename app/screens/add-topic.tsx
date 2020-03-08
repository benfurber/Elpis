import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";
import { DocumentNode } from "graphql";

import { Comment as CommentType, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_COMMENT, UPDATE_COMMENT } from "mutations";
import { FormContainerScreen } from "screens";
import { form } from "styles";
import { firstSentence } from "utils";

interface Props {
  currentComment?: {
    content: CommentType["content"];
    id: CommentType["id"];
    title: CommentType["title"];
  };
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  content: CommentType["content"];
  editable: boolean;
  id: string;
  mutation: DocumentNode;
  title: CommentType["title"];
}

class AddTopicScreen extends Component<Props, State> {
  secondField = TextInput as any;

  state = {
    content: "",
    editable: true,
    id: this.props.postId,
    mutation: ADD_COMMENT,
    title: "",
  };

  componentDidMount() {
    const { currentComment } = this.props;
    if (currentComment) {
      const { content, id, title } = currentComment;
      const mutation = UPDATE_COMMENT;

      this.setState({ content, id, mutation, title });
    }
  }

  componentDidUpdate(_props, state) {
    const { title } = state;

    if (title) {
      const title = firstSentence(state.title);

      if (title !== state.title) {
        this.setState({ title });
        return this.secondField.focus();
      }
    }
  }

  onSubmitEditing(call) {
    const { title, id, content } = this.state;
    this.setState({ editable: false });

    call({
      variables: {
        content,
        id,
        title: title && title.length > 0 ? title : null,
      },
    }).then(() => {
      this.props.navigation.dismiss();
    });
  }

  form() {
    const { title, editable, content } = this.state;

    const args = {
      editable,
      multiline: true,
    };

    return (createComment, {}) => (
      <View style={form.fieldContainer}>
        <Text style={form.label}>{labels.title}</Text>
        <TextInput
          autoFocus={false}
          onChangeText={title => this.setState({ title })}
          onSubmitEditing={() => this.secondField.focus()}
          style={form.title}
          placeholder={labels.addPlaceholderTitle}
          value={title}
          returnKeyLabel={labels.next}
          returnKeyType="next"
          {...args}
        />
        <Text style={form.label}>{labels.body} *</Text>
        <TextInput
          {...args}
          autoFocus={true}
          ref={input => (this.secondField = input)}
          onChangeText={content => this.setState({ content })}
          onSubmitEditing={() => this.onSubmitEditing(createComment)}
          value={content}
          style={form.text}
          placeholder={labels.addPlaceholderBody}
          returnKeyLabel={labels.submit}
          returnKeyType="send"
        />
      </View>
    );
  }

  render() {
    const { mutation } = this.state;

    return (
      <FormContainerScreen
        analyticsContent={{
          contentId: this.props.postId,
          contentType: "AddTopic",
        }}
        navigation={this.props.navigation}
        title={labels.addNewTopic}
      >
        <Mutation mutation={mutation}>{this.form()}</Mutation>
      </FormContainerScreen>
    );
  }
}

const wrappedAddTopicScreen = withMappedNavigationParams()(AddTopicScreen);
export {
  wrappedAddTopicScreen as AddTopicScreen,
  AddTopicScreen as UnwrappedAddTopicScreen,
};
