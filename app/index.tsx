import React from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { setCustomText } from "react-native-global-props";

import { RootStack } from "routes";
import { colours, elements } from "styles";

const AppContainer = createAppContainer(RootStack);

setCustomText({ style: { ...elements.standardText } });

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colours.transparentBlue }
});

export default App;

AppRegistry.registerComponent("Elpis", () => App);
