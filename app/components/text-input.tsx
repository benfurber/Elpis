import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { elements } from "styles";

interface Props {
  displayStyle: "active" | "error" | "loading";
  style?: object;
}

const TextInput = (props: Props) => {
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
    <NativeTextInput
      {...props}
      editable={isEditable[props.displayStyle]}
      style={[styleDisplay[props.displayStyle], props.style]}
    />
  );
};

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

export { TextInput };
