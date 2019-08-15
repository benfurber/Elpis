import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colours, layout } from "styles";

const textInputHeight = 45;
const keyboardVerticalOffset = Platform.OS === "ios" ? 93 + textInputHeight : 0;
const keyboardBehaviour = Platform.OS === "ios" ? "position" : undefined;
let textInputRef;

interface Props {
  buttonText: string;
  editable: boolean;
  inputText: string;
  onChangeText: (string) => void;
  onSubmit: () => void;
  value: string;
}

class TextField extends Component<Props> {
  focusKeyboard() {
    textInputRef.focus();
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={keyboardBehaviour}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <View style={styles.button}>
          <TouchableOpacity onPress={() => this.focusKeyboard()}>
            <Text style={styles.buttonText}>{this.props.buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            ref={component => (textInputRef = component)}
            multiline={true}
            onChangeText={text => this.props.onChangeText(text)}
            onSubmitEditing={() => this.props.onSubmit()}
            placeholder={this.props.inputText}
            placeholderTextColor={colours.darkGrey}
            returnKeyType={"send"}
            style={styles.textInput}
            value={this.props.value}
            editable={this.props.editable}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.navyBlueDark,
    borderRadius: layout.borderRadiusL,
    bottom: layout.spacingS + textInputHeight,
    margin: layout.spacing,
    padding: layout.spacing,
    position: "absolute",
    left: layout.spacingS,
    zIndex: 1,
  },
  buttonText: {
    color: colours.pureWhite,
    fontWeight: "bold",
  },
  commentsHeadingContainer: {
    marginVertical: layout.spacingL,
    marginHorizontal: layout.spacing,
  },
  textInput: {
    backgroundColor: colours.pureWhite,
    borderRadius: layout.borderRadius,
    padding: layout.spacingS,
  },
  textInputContainer: {
    backgroundColor: colours.transparentBlue,
    borderTopLeftRadius: layout.borderRadius,
    borderTopRightRadius: layout.borderRadius,
    minHeight: textInputHeight,
    padding: layout.spacing,
    zIndex: 2,
  },
});

export { TextField };
