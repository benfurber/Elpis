import React from "react";
import { AppRegistry, StyleSheet } from "react-native";
import { createAppContainer, SafeAreaView } from "react-navigation";

import { RootStack } from "routes";
import { colours } from "styles";

const AppContainer = createAppContainer(RootStack);

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
