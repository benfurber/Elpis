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
  textInput: string;
  textInputExtra: string;
}

class AddTopicScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
      textInput: "",
      textInputExtra: "",
    };
  }
  secondTextInput = TextInput as any;

  componentDidUpdate(_props, state) {
    const textInput = firstSentence(state.textInput);

    if (textInput !== state.textInput) {
      this.setState({ textInput });
      return this.secondTextInput.focus();
    }
  }

  onSubmitEditing(query, id) {
    const { textInput, textInputExtra } = this.state;
    this.setState({ editable: false });

    const content = textInput + " " + textInputExtra;

    query({
      variables: {
        content,
        id,
      },
    }).then(() => {
      this.setState({ textInput: "", editable: true });
      this.props.navigation.dismiss();
    });
  }

  form() {
    const { textInput, editable, textInputExtra } = this.state;

    const args = {
      editable,
      multiline: true,
      onChangeText: textInput => this.setState({ textInput }),
    };

    return (createComment, {}) => (
      <View style={form.fieldContainer}>
        <Text style={form.label}>{labels.title}</Text>
        <TextInput
          onSubmitEditing={() => this.secondTextInput.focus()}
          style={form.title}
          autoFocus={true}
          placeholder={labels.addPlaceholderTitle}
          value={textInput}
          returnKeyLabel={"Next"}
          {...args}
        />
        <Text style={form.label}>{labels.body}</Text>
        <TextInput
          {...args}
          autoFocus={false}
          ref={input => (this.secondTextInput = input)}
          onChangeText={textInputExtra => this.setState({ textInputExtra })}
          onSubmitEditing={() =>
            this.onSubmitEditing(createComment, this.props.postId)
          }
          value={textInputExtra}
          style={form.text}
          placeholder={labels.addPlaceholderBody}
          returnKeyLabel={labels.submit}
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
          contentType: "AddTopic",
          contentId: this.props.postId,
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
