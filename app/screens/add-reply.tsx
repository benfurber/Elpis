import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Mutation } from "react-apollo";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

import { BackgroundContainer, Icon, Title } from "components";
import { Comment, NavigationType, Post } from "interfaces";
import { labels } from "labels";
import { ADD_REPLY } from "mutations";
import { layout, typography, colours } from "styles";
import { Analytics } from "utils";

interface Props {
  commentId: Comment["id"];
  navigation: NavigationType;
  postId: Post["id"];
}

interface State {
  textInput: string;
  textInputEditable: boolean;
  title: string;
}

class AddReplyScreen extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      textInputEditable: true,
      textInput: "",
      title: "",
    };
  }

  componentDidMount() {
    Analytics.trackContent({
      contentType: "AddReply",
      contentId: this.props.commentId,
    });
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
      navigation.pop();
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
    const text = labels.addYourReply;
    const mutation = ADD_REPLY;

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

const wrappedAddReplyScreen = withMappedNavigationParams()(AddReplyScreen);
export {
  wrappedAddReplyScreen as AddReplyScreen,
  AddReplyScreen as UnwrappedAddReplyScreen,
};
