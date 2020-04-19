import React, { Component, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { Mutation } from "react-apollo";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";

import { ButtonIcon, TextInput } from "components";
import { Conversation } from "interfaces";
import { layout, colours } from "styles";
import { ADD_MESSAGE } from "mutations";

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
        hideBorder={true}
        style={styles.keyboardContainer}
      >
        <View style={styles.textInputView}>
          <Mutation mutation={ADD_MESSAGE}>
            {add => (
              <Fragment>
                <View style={styles.textInputContainer}>
                  <TextInput
                    displayStyle={display}
                    multiline={true}
                    onChangeText={content => this.setState({ content })}
                    onSubmitEditing={() => this.onPress(add)}
                    returnKeyLabel={"Send"}
                    returnKeyType="send"
                    style={styles.textInput}
                    value={content}
                  />
                </View>
                <ButtonIcon
                  display={content.length > 0 ? display : "loading"}
                  onPress={() => this.onPress(add)}
                  style={styles.submit}
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
  keyboardContainer: {
    alignSelf: "baseline",
    backgroundColor: "transparent",
    margin: 0,
    padding: 0,
  },
  submit: {
    alignSelf: "flex-end",
    backgroundColor: colours.navyBlueDark,
    right: 20,
    zIndex: 1,
  },
  textInput: {
    alignSelf: "stretch",
    flex: 1,
    fontSize: 16,
    height: "auto",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
  textInputContainer: {
    alignItems: "center",
    backgroundColor: colours.pureWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  textInputView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export { KeyboardAddMessage };
