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

    const propStyles = { ...this.props.style };

    return (
      <TextInput
        {...this.props}
        editable={isEditable[this.props.displayStyle]}
        style={[styleDisplay[this.props.displayStyle], propStyles]}
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
