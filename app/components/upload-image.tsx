import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Icon, RemoteImage, Loading } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";
import { colours, layout, typography } from "styles";
import { sendImage } from "utils";

const { width } = Dimensions.get("window");

interface Props {
  setImagePath: (image) => void;
  navigation: NavigationType;
  imagePath: null | string;
}

interface State {
  uploading: boolean;
}

class UploadImage extends Component<Props, State> {
  state = {
    uploading: false,
  };

  sendImage = async selectedImage => {
    const { setImagePath } = this.props;

    const successCallback = async imagePath => {
      this.setState({ uploading: false });
      await setImagePath(imagePath);
    };
    try {
      this.setState({ uploading: true });
      sendImage({
        bucket: "elpis-content-images",
        resizeTo: { height: 500, width: 500 },
        selectedImage,
        successCallback,
      });
    } catch (err) {
      this.setState({ uploading: false });
      console.error(err.message);
    }
  };

  renderIcon() {
    return (
      <View style={styles.iconContainer}>
        <Icon
          colour={colours.pureWhite}
          containerStyle={styles.iconContainerStyle}
          name="camera"
        />
        <Text style={styles.iconText}>{labels.addImage}</Text>
      </View>
    );
  }

  render() {
    const { imagePath, navigation } = this.props;
    const { uploading } = this.state;

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ImageBrowser", {
            navigation,
            sendImage: image => this.sendImage(image),
          })
        }
        style={styles.imageContainer}
      >
        {!imagePath && !uploading && this.renderIcon()}
        {uploading && <Loading />}
        {imagePath && <RemoteImage imagePath={imagePath} />}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainerStyle: {
    padding: layout.spacing,
  },
  iconText: {
    color: colours.pureWhite,
    fontSize: typography.fontSize,
    fontWeight: "bold",
  },
  imageContainer: {
    backgroundColor: colours.navyBlueDarkTransparentHigh,
    borderRadius: layout.borderRadiusL,
    margin: layout.spacing,
    overflow: "hidden",
    width: width * 0.66,
  },
});

export { UploadImage };
