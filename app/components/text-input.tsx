import React, { Component } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { elements } from "styles";

interface Props {
  displayStyle: "active" | "error" | "loading";
  forwardedRef?: any;
  style?: object;
}

class NewTextInput extends Component<TextInputProps & Props> {
  render() {
    const { displayStyle, forwardedRef } = this.props;

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
        ref={forwardedRef}
        editable={isEditable[displayStyle]}
        style={[styleDisplay[displayStyle], propStyles]}
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
