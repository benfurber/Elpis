import React, { Component } from "react";
import { TextInput, View } from "react-native";

import { DocumentNode } from "graphql";
import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { UploadImage } from "components";
import { Comment, NavigationType } from "interfaces";
import { labels } from "labels";
import { ADD_REPLY, UPDATE_REPLY } from "mutations";
import { FormContainerScreen } from "screens";
import { form } from "styles";

interface Props {
  commentId: Comment["id"];
  navigation: NavigationType;
  currentReply?: {
    id: string;
    content: string;
    imagePath: null | string;
  };
}

interface State {
  content: string;
  id: string;
  imagePath: null | string;
  mutation: DocumentNode;
  textInputEditable: boolean;
}

class AddReplyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      id: props.commentId,
      imagePath: null,
      mutation: ADD_REPLY,
      textInputEditable: true,
    };
  }

  componentDidMount() {
    const { currentReply } = this.props;

    if (currentReply) {
      const { content, id, imagePath } = currentReply;
      const mutation = UPDATE_REPLY;

      this.setState({ content, id, imagePath, mutation });
    }
  }

  onSubmitEditing(query) {
    const { id, imagePath, content } = this.state;
    const { navigation } = this.props;

    this.setState({ textInputEditable: false });

    query({
      variables: {
        content,
        id,
        imagePath,
      },
    }).then(() => {
      this.setState({ content: "", textInputEditable: true });
      navigation.dismiss();
    });
  }

  setImagePath = imagePath => {
    this.setState({ imagePath });
  };

  render() {
    const { commentId, navigation } = this.props;
    const { content, imagePath, mutation, textInputEditable } = this.state;

    const buttonDisplay = textInputEditable && content.length !== 0;

    return (
      <Mutation mutation={mutation}>
        {(call, {}) => (
          <FormContainerScreen
            analyticsContent={{ contentId: commentId, contentType: "AddReply" }}
            buttonDisplay={buttonDisplay}
            navigation={navigation}
            onSubmitEditing={() => this.onSubmitEditing(call)}
            title={labels.addYourReply}
          >
            <View style={form.fieldContainer}>
              <TextInput
                onSubmitEditing={() => this.onSubmitEditing(call)}
                style={form.text}
                autoFocus={true}
                editable={this.state.textInputEditable}
                multiline={true}
                placeholder={labels.addPlaceholderBody}
                onChangeText={content => this.setState({ content })}
                value={this.state.content}
                returnKeyLabel={labels.submit}
                returnKeyType="send"
              />
              <UploadImage
                imagePath={imagePath}
                navigation={navigation}
                setImagePath={this.setImagePath}
              />
            </View>
          </FormContainerScreen>
        )}
      </Mutation>
    );
  }
}

const wrappedAddReplyScreen = withMappedNavigationParams()(AddReplyScreen);
export {
  wrappedAddReplyScreen as AddReplyScreen,
  AddReplyScreen as UnwrappedAddReplyScreen,
};
