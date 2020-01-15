import React from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useQuery } from "@apollo/react-hooks";

import { BackgroundContainer, Loading } from "components";
import { NavigationType } from "interfaces";
import { USER_DETAILS } from "queries";
import { Analytics } from "utils";

interface Props {
  navigation: NavigationType;
}

function AuthLoadingScreen(props: Props) {
  const { navigate } = props.navigation;
  const { loading, error, data } = useQuery(USER_DETAILS);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("token");

    const feedRoute = ({ me }) => {
      Analytics.identifyUser(me.id);
      navigate(me.onboarded ? "Main" : "Onboarding");
    };

    if (token) {
      if (loading) return <Loading />;
      if (error) return navigate("Welcome");
      if (data && data.me) {
        return feedRoute(data);
      }
    }

    return navigate("Welcome");
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
