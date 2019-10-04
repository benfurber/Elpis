import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useQuery } from "@apollo/react-hooks";

import { BackgroundContainer, Loading } from "components";
import { NavigationType } from "interfaces";
import { USER_DETAILS } from "queries";

interface Props {
  navigation: NavigationType;
}

function AuthLoadingScreen(props: Props) {
  const { navigation } = props;
  const { error, data } = useQuery(USER_DETAILS);

  if (error) return <Text>Error! ${error.message}</Text>;

  if (data && data.me) {
    const token = AsyncStorage.getItem("token");

    if (!token) {
      return navigation.navigate("Welcome");
    }
    return navigation.navigate(data.me.onboarded ? "Main" : "Onboarding");
  }

  return (
    <BackgroundContainer>
      <View style={styles.container}>
        <Loading />
      </View>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export { AuthLoadingScreen };
