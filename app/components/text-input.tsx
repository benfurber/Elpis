import React, { Component } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { elements } from "styles";

interface Props {
  displayStyle: "active" | "error" | "loading";
  style?: object;
}

class NewTextInput extends Component<TextInputProps & Props> {
  render() {
    const isEditable = {
      active: true,
      error: true,
      loading: false,
    };

    const styleDisplay = {
      active: styles.inputActive,
      error: styles.inputError,
      loading: styles.inputLoading,
    };

    return (
      <TextInput
        {...this.props}
        editable={isEditable[this.props.displayStyle]}
        style={[styleDisplay[this.props.displayStyle], this.props.style]}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputActive: {
    ...elements.textInputField,
  },
  inputError: {
    ...elements.textInputFieldError,
  },
  inputLoading: {
    ...elements.textInputFieldLoading,
  },
});

export { NewTextInput as TextInput };
