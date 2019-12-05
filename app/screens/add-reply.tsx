import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { Comment, NavigationType } from "interfaces";
import { labels } from "labels";
import { ADD_REPLY } from "mutations";
import { FormContainerScreen } from "screens";
import { layout, typography, colours } from "styles";

interface Props {
  commentId: Comment["id"];
  navigation: NavigationType;
}

interface State {
  textInput: string;
  textInputEditable: boolean;
}

class AddReplyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInputEditable: true,
      textInput: "",
    };
  }

  onSubmitEditing(query) {
    const { textInput } = this.state;
    const { commentId, navigation } = this.props;

    this.setState({ textInputEditable: false });

    query({
      variables: {
        content: textInput,
        id: commentId,
      },
    }).then(() => {
      this.setState({ textInput: "", textInputEditable: true });
      navigation.dismiss();
    });
  }

  renderAddResponse(mutation) {
    return (
      <Mutation mutation={mutation}>
        {(createReply, {}) => (
          <TextInput
            onSubmitEditing={() => this.onSubmitEditing(createReply)}
            style={styles.text}
            autoFocus={true}
            editable={this.state.textInputEditable}
            multiline={true}
            placeholder={labels.addPlaceholderTitle}
            onChangeText={textInput => this.setState({ textInput })}
            value={this.state.textInput}
            returnKeyLabel={labels.submit}
          />
        )}
      </Mutation>
    );
  }

  render() {
    const { commentId, navigation } = this.props;

    return (
      <FormContainerScreen
        analyticsContent={{ contentType: "AddReply", contentId: commentId }}
        navigation={navigation}
        title={labels.addYourReply}
      >
        {this.renderAddResponse(ADD_REPLY)}
      </FormContainerScreen>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: colours.mediumGrey,
    fontWeight: "bold",
    paddingTop: layout.spacingXL,
    paddingHorizontal: layout.spacingL,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "column",
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
