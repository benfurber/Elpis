import React, { Component } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";

import { NavigationType } from "interfaces";
import { labels } from "labels";
import { ButtonSubmit } from "components";
import { FormValidator, RequiredValidator } from "utils";

const TITLE = 'title';
const CONTENT = 'content';

interface Props {
  navigation: NavigationType;
  onPress: (state: State) => void;
}

class State {
  [TITLE] = "";
  imageUrl = "";
  [CONTENT] = "";
}


const formValidator = new FormValidator(
  new RequiredValidator(TITLE),
  new RequiredValidator(CONTENT)
)

class FormAddPost extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = new State();
  }

  render() {

    let titleError = formValidator.validate(TITLE, this.state);
    let contentError = formValidator.validate(CONTENT, this.state);

    return (
      <View>
        <Input
          placeholder='Title*'
          onBlur={title => {
            titleError = formValidator.validate(TITLE, this.state);
            return title;
          }}
          onChangeText={title => {
            titleError = formValidator.validate(TITLE, this.state);
            return this.setState({ title });
          }}
          errorMessage={titleError}
        />
        <Input
          placeholder='Image URL'
          onChangeText={title => {
            return this.setState({ title });
          }}
        />
        <Input
          placeholder='Content*'
          onBlur={content => {
            contentError = formValidator.validate(CONTENT, this.state);
            return content;
          }}
          onChangeText={content => {
            contentError = formValidator.validate(CONTENT, this.state);
            return this.setState({ content });
          }}
          errorMessage={contentError}
        />

        <View>
        <ButtonSubmit
            display="active"
            label={labels.formButton}
            onPress={() => {
              if(!titleError && !contentError) {
                this.props.onPress(this.state);
              }
            }}
          />
          {/* <Mutation mutation={UPDATE_USER_PASSWORD}>
            {(updatePassword, {}) => (
              <ButtonSubmit
                display={display}
                label={labels.formButton}
                onPress={() => this.onPress(updatePassword)}
              />
            )}
          </Mutation> */}
        </View>
      </View>
    )
  }
}

export { FormAddPost };