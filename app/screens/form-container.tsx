import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { BackgroundContainer, ButtonSubmit, Icon, Title } from "components";
import { NavigationType } from "interfaces";
import { layout, colours } from "styles";
import { labels } from "labels";
import { Analytics, AnalyticsContentTypes } from "utils";

interface Props {
  analyticsContent: {
    contentType: AnalyticsContentTypes;
    contentId: string;
  };
  buttonDisplay: boolean;
  navigation: NavigationType;
  onSubmitEditing: () => void;
  title: string;
}

class FormContainerScreen extends Component<Props> {
  componentDidMount() {
    const { contentType, contentId } = this.props.analyticsContent;

    Analytics.trackContent({
      contentId,
      contentType,
    });
  }

  render() {
    const {
      buttonDisplay,
      children,
      navigation,
      onSubmitEditing,
      title,
    } = this.props;

    return (
      <BackgroundContainer>
        <View>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={() => navigation.dismiss()}>
              <Icon name="times-circle" size={30} />
            </TouchableOpacity>
          </View>
          <Title style={styles.ctaText} text={title} small />
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.row}>{children}</View>
            <View style={styles.buttonContainer}>
              <ButtonSubmit
                display={buttonDisplay ? "active" : "loading"}
                label={labels.formButton}
                onPress={onSubmitEditing}
              />
            </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: layout.spacing,
    paddingTop: layout.spacing,
  },
  closeContainer: {
    flexDirection: "row-reverse",
    padding: layout.spacing,
  },
  ctaText: {
    paddingHorizontal: layout.spacing,
  },
  row: {
    alignItems: "baseline",
    flexDirection: "row",
  },
});

export { FormContainerScreen };
