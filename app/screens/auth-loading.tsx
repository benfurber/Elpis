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
  const { loading, error, data } = useQuery(USER_DETAILS);

  if (loading) return <Loading />;
  if (error) return navigation.navigate("Welcome");

  const getToken = async () => {
    console.log("hello?");

    if (data && data.me) {
      const token = await AsyncStorage.getItem("token");

      if (!token) {
        return navigation.navigate("Welcome");
      }
      return navigation.navigate(data.me.onboarded ? "Main" : "Onboarding");
    }
    return <Loading />;
  };

  getToken();

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
