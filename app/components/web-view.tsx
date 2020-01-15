import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { WebView as WebViewPackage } from "react-native-webview";

import { IconNav, Loading } from "components";
import { layout, colours } from "styles";

interface Props {
  uri: string;
}

interface State {
  navState: {
    canGoBack: boolean;
    canGoForward: boolean;
    url: string;
  };
}

const initialState: State = {
  navState: {
    canGoBack: false,
    canGoForward: false,
    url: "",
  },
};

class WebView extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  webview: any = null;

  onNavigationStateChange = navState => {
    this.setState({ navState });
  };

  render() {
    const { uri } = this.props;
    const { canGoBack, canGoForward, url } = this.state.navState;

    return (
      <View>
        <View style={styles.header}>
          <IconNav
            action={() => this.webview.goBack()}
            isActive={canGoBack}
            name="chevron-left"
          />
          <IconNav
            action={() => this.webview.goForward()}
            isActive={canGoForward}
            name="chevron-right"
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{url}</Text>
          </View>
        </View>
        <WebViewPackage
          containerStyle={styles.containerStyle}
          onNavigationStateChange={this.onNavigationStateChange}
          ref={ref => (this.webview = ref)}
          renderLoading={() => (
            <View style={styles.containerLoading}>
              <Loading blueMode />
            </View>
          )}
          source={{ uri }}
          startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLoading: {
    alignItems: "center",
    flex: 0,
    height: "100%",
    padding: layout.spacingL,
  },
  containerStyle: {
    flex: 0,
    height: "100%",
  },
  header: {
    backgroundColor: colours.navyBlueDark,
    borderTopLeftRadius: layout.borderRadiusL,
    borderTopRightRadius: layout.borderRadiusL,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: layout.spacing,
  },
  textContainer: {
    alignSelf: "center",
    alignItems: "flex-start",
    flex: 1,
    overflow: "hidden",
  },
  text: {
    alignSelf: "flex-start",
    color: colours.whiteTransparent,
    width: "1000%",
  },
});

export { WebView };
