import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";
import { Mutation } from "react-apollo";

import {
  ButtonSubmit,
  MessageBox,
  ProfilePictureField,
  Title,
} from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { ADD_USER_PROFILE_PICTURE } from "mutations";
import { layout } from "styles";
import { sendImage } from "utils";

interface Props {
  navigation: NavigationType;
  onPress: () => void;
}

interface State {
  display: "active" | "error" | "loading";
  displayMessage: "passive" | "error";
  selectedImage: null | PhotoIdentifier;
  message: null | string;
  progressPercentage: number;
  remoteImagePath?: void | string;
  uploadCondition: null | "uploading" | "uploaded";
}

class FormAddProfilePicture extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      display: "active",
      displayMessage: "passive",
      message: labels.profilePictureRequest,
      progressPercentage: 0,
      selectedImage: null,
      uploadCondition: null,
    };
  }

  clearUploadCondition() {
    this.setState({
      uploadCondition: null,
    });
  }

  sendImageCallback = () => {
    const { selectedImage } = this.state;

    const setState = remoteImagePath =>
      this.setState({
        display: "active",
        displayMessage: "passive",
        message: null,
        remoteImagePath,
        uploadCondition: "uploaded",
      });

    const setProgress = progressPercentage =>
      this.setState({
        progressPercentage,
      });

    const setError = error =>
      this.setState({
        display: "error",
        displayMessage: "error",
        message: error,
        selectedImage: null,
        uploadCondition: null,
      });

    this.setState({ uploadCondition: "uploading" });
    sendImage({
      selectedImage,
      setProgress,
      setState,
      setError,
    });
  };

  onPress(mutation) {
    if (this.imageCheck()) {
      this.setState({ display: "loading" });
      mutation({
        variables: {
          avatarPath: this.state.remoteImagePath,
        },
      }).then(() => {
        this.setState({ display: "active" });
        return this.props.onPress();
      });
    }
  }

  imageCheck() {
    if (this.state.selectedImage) {
      return true;
    }

    this.setState({
      display: "error",
      displayMessage: "error",
      message: labels.imageEmpty,
    });

    return false;
  }

  render() {
    const {
      display,
      displayMessage,
      uploadCondition,
      message,
      selectedImage,
    } = this.state;
    const { navigation } = this.props;

    if (uploadCondition === "uploading") {
      return (
        <View style={styles.centre}>
          <Title
            text={`${
              labels.uploadingImage
            }: ${this.state.progressPercentage.toFixed(0)}%`}
          />
        </View>
      );
    }

    return (
      <View>
        <MessageBox display={displayMessage} message={message} />

        <ProfilePictureField
          clearUploadCondition={() => this.clearUploadCondition}
          display={display}
          image={selectedImage}
          navigation={navigation}
          sendImage={this.sendImageCallback}
          setImage={selectedImage => {
            this.setState({ selectedImage });
          }}
        />

        <View style={styles.row}>
          <Mutation mutation={ADD_USER_PROFILE_PICTURE}>
            {(linkUserProfilePicture, {}) => (
              <ButtonSubmit
                display={display}
                label={labels.formButton}
                onPress={() => this.onPress(linkUserProfilePicture)}
              />
            )}
          </Mutation>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centre: {
    alignItems: "center",
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row-reverse",
    marginBottom: layout.spacingL,
  },
});

export { FormAddProfilePicture };
