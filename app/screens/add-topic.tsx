import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_COMMENT } from "mutations";
import { FormContainerScreen } from "screens";
import { form } from "styles";
import { firstSentence } from "utils";

interface Props {
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  editable: boolean;
  titleInput: string;
  contentInput: string;
}

class AddTopicScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      contentInput: "",
      editable: true,
      titleInput: "",
    };
  }
  secondtitleInput = TextInput as any;

  componentDidUpdate(_props, state) {
    const titleInput = firstSentence(state.titleInput);

    if (titleInput !== state.titleInput) {
      this.setState({ titleInput });
      return this.secondtitleInput.focus();
    }
  }

  onSubmitEditing(query, id) {
    const { titleInput, contentInput } = this.state;
    this.setState({ editable: false });

    const title = titleInput.length > 0 ? titleInput : null;

    query({
      variables: {
        content: contentInput,
        id,
        title,
      },
    }).then(() => {
      this.setState({ editable: true, titleInput: "" });
      this.props.navigation.dismiss();
    });
  }

  form() {
    const { titleInput, editable, contentInput } = this.state;

    const args = {
      editable,
      multiline: true,
      onChangeText: titleInput => this.setState({ titleInput }),
    };

    return (createComment, {}) => (
      <View style={form.fieldContainer}>
        <Text style={form.label}>{labels.title}</Text>
        <TextInput
          onSubmitEditing={() => this.secondtitleInput.focus()}
          style={form.title}
          autoFocus={true}
          placeholder={labels.addPlaceholderTitle}
          value={titleInput}
          returnKeyLabel={labels.next}
          returnKeyType="next"
          {...args}
        />
        <Text style={form.label}>{labels.body} *</Text>
        <TextInput
          {...args}
          autoFocus={false}
          ref={input => (this.secondtitleInput = input)}
          onChangeText={contentInput => this.setState({ contentInput })}
          onSubmitEditing={() =>
            this.onSubmitEditing(createComment, this.props.postId)
          }
          value={contentInput}
          style={form.text}
          placeholder={labels.addPlaceholderBody}
          returnKeyLabel={labels.submit}
          returnKeyType="send"
        />
      </View>
    );
  }

  renderAddResponse(mutation) {
    return <Mutation mutation={mutation}>{this.form()}</Mutation>;
  }

  render() {
    return (
      <FormContainerScreen
        analyticsContent={{
          contentId: this.props.postId,
          contentType: "AddTopic",
        }}
        navigation={this.props.navigation}
        title={labels.addNewTopic}
      >
        {this.renderAddResponse(ADD_COMMENT)}
      </FormContainerScreen>
    );
  }
}

const wrappedAddTopicScreen = withMappedNavigationParams()(AddTopicScreen);
export {
  wrappedAddTopicScreen as AddTopicScreen,
  AddTopicScreen as UnwrappedAddTopicScreen,
};
