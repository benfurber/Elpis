import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { WebView as WebViewPackage } from "react-native-webview";

import { Icon } from "components";
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

  navIcon(name, active, action) {
    const activeColour = colours.pureWhite;
    const inactiveColour = colours.whiteTransparentHigh;

    return (
      <TouchableOpacity onPress={action}>
        <Icon
          style={styles.icon}
          name={`chevron-${name}`}
          colour={active ? activeColour : inactiveColour}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const { uri } = this.props;
    const { canGoBack, canGoForward, url } = this.state.navState;

    return (
      <View>
        <View style={styles.header}>
          {this.navIcon("left", canGoBack, () => this.webview.goBack())}
          {this.navIcon("right", canGoForward, () => this.webview.goForward())}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{url}</Text>
          </View>
        </View>
        <WebViewPackage
          containerStyle={styles.containerStyle}
          onNavigationStateChange={this.onNavigationStateChange}
          ref={ref => (this.webview = ref)}
          source={{ uri }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
