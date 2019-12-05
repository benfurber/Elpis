import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

import { BackgroundContainer, Icon, Title } from "components";
import { NavigationType } from "interfaces";
import { layout, colours } from "styles";
import { Analytics, AnalyticsContentTypes } from "utils";

interface Props {
  analyticsContent: {
    contentType: AnalyticsContentTypes;
    contentId: string;
  };
  navigation: NavigationType;
  title: string;
}

class FormContainerScreen extends Component<Props> {
  componentDidMount() {
    const { contentType, contentId } = this.props.analyticsContent;

    Analytics.trackContent({
      contentType,
      contentId,
    });
  }

  render() {
    const { children, navigation, title } = this.props;

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
  row: {
    alignItems: "baseline",
    flexDirection: "row",
  },
});

export { FormContainerScreen };
