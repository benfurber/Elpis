import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, Title } from "components";
import { NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_COMMENT, ADD_REPLY } from "mutations";
import { layout, typography, colours } from "styles";
import { Analytics, firstSentence } from "utils";

interface Props {
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  editable: boolean;
  textInput: string;
  textInputExtra: string;
  title: string;
}

class AddTopicScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
      textInput: "",
      textInputExtra: "",
      title: "",
    };
  }
  secondTextInput = TextInput as any;

  componentDidMount() {
    Analytics.trackContent({
      contentType: "AddTopic",
      contentId: this.props.postId,
    });
  }

  componentDidUpdate(_props, state) {
    const textInput = firstSentence(state.textInput);

    if (textInput !== state.textInput) {
      this.setState({ textInput });
      return this.secondTextInput.focus();
    }
  }

  onSubmitEditing(query, id) {
    const { textInput, textInputExtra } = this.state;
    this.setState({ editable: false });

    const content = textInput + " " + textInputExtra;

    query({
      variables: {
        content,
        id,
      },
    }).then(() => {
      this.setState({ textInput: "", editable: true });
      this.props.navigation.pop();
    });
  }

  form() {
    const { textInput, editable, textInputExtra } = this.state;

    const args = {
      editable,
      multiline: true,
      onChangeText: textInput => this.setState({ textInput }),
    };

    return (createComment, {}) => (
      <View style={styles.textInputContainer}>
        <Text style={styles.label}>{labels.title}</Text>
        <TextInput
          onSubmitEditing={() => this.secondTextInput.focus()}
          style={styles.title}
          autoFocus={true}
          placeholder={labels.addPlaceholderTitle}
          value={textInput}
          returnKeyLabel={"Next"}
          {...args}
        />
        <Text style={styles.label}>{labels.body}</Text>
        <TextInput
          {...args}
          autoFocus={false}
          ref={input => (this.secondTextInput = input)}
          onChangeText={textInputExtra => this.setState({ textInputExtra })}
          onSubmitEditing={() =>
            this.onSubmitEditing(createComment, this.props.postId)
          }
          value={textInputExtra}
          style={styles.text}
          placeholder={labels.addPlaceholderBody}
          returnKeyLabel={labels.submit}
        />
      </View>
    );
  }

  renderAddResponse(mutation) {
    return <Mutation mutation={mutation}>{this.form()}</Mutation>;
  }

  render() {
    const text = labels.addNewTopic;
    const mutation = ADD_COMMENT;

    return (
      <BackgroundContainer>
        <View style={styles.header}>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.dismiss()}>
              <Icon name="times-circle" size={30} />
            </TouchableOpacity>
          </View>
          <Title style={styles.ctaText} text={text + ":"} small />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.row}>{this.renderAddResponse(mutation)}</View>
          </ScrollView>
        </View>
      </BackgroundContainer>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colours.whiteTransparent,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    flex: 1,
    paddingTop: layout.spacing,
  },
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  ctaText: {
    paddingHorizontal: layout.spacing,
  },
  header: {},
  label: {
    color: colours.mediumGrey,
    fontWeight: "bold",
    paddingTop: layout.spacingXL,
    paddingHorizontal: layout.spacingL,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row",
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "column",
  },
  title: {
    padding: layout.spacingL,
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeXL,
    flexWrap: "wrap",
  },
  text: {
    fontFamily: "creteround-regular",
    fontSize: typography.fontSizeL,
    padding: layout.spacingL,
    width: "100%",
  },
});

const wrappedAddTopicScreen = withMappedNavigationParams()(AddTopicScreen);
export {
  wrappedAddTopicScreen as AddTopicScreen,
  AddTopicScreen as UnwrappedAddTopicScreen,
};
