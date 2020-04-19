import React, { Component, Fragment } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";

import { ButtonSubmit, TextInput } from "components";
import { Conversation } from "interfaces";
import { layout, colours } from "styles";
import { ADD_MESSAGE } from "mutations";
import { labels } from "labels";

interface Props {
  conversationId: Conversation["id"];
}

interface State {
  content: string;
  display: "active" | "error" | "loading";
}

class KeyboardAddMessage extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      display: "active",
    };
  }

  onPress(login) {
    const { conversationId } = this.props;
    const { content } = this.state;

    this.setState({ display: "loading" });

    login({
      variables: { content, conversationId },
    }).then(result => {
      if (!result.errors) {
        this.setState({ content: "", display: "active" });
      }
    });
  }

  render() {
    const { content, display } = this.state;

    return (
      <KeyboardAccessoryView
        androidAdjustResize
        animateOn="all"
        alwaysVisible={true}
        avoidKeyboard
      >
        <View style={styles.textInputView}>
          <Mutation mutation={ADD_MESSAGE}>
            {login => (
              <Fragment>
                <TextInput
                  displayStyle={display}
                  multiline={true}
                  onChangeText={content => this.setState({ content })}
                  onSubmitEditing={() => this.onPress(login)}
                  returnKeyLabel={"Send"}
                  returnKeyType="send"
                  value={content}
                />
                <ButtonSubmit
                  display={content.length > 0 ? display : "loading"}
                  label={labels.login}
                  onPress={() => this.onPress(login)}
                />
              </Fragment>
            )}
          </Mutation>
        </View>
      </KeyboardAccessoryView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    backgroundColor: colours.whiteTransparent,
    flex: 1,
    paddingTop: layout.spacing,
    width: "100%",
  },
  textInput: {
    borderColor: "#CCC",
    borderRadius: 10,
    borderWidth: 1,
    flexGrow: 1,
    fontSize: 16,
    marginRight: 10,
    padding: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
  textInputView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});

export { KeyboardAddMessage };
