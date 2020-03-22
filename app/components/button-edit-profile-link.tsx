import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ButtonSubmit } from "components";
import { NavigationType, User } from "interfaces";
import { labels } from "labels";
import { USER_AVATAR } from "queries";

interface Props {
  navigation: NavigationType;
  userId: User["id"];
}

function ButtonEditProfileLink(props: Props) {
  const { navigation, userId } = props;
  const { data } = useQuery(USER_AVATAR);

  if (data && data.me.id === userId)
    return (
      <ButtonSubmit
        display="active"
        label={labels.editProfile.action}
        onPress={() => navigation.navigate("EditProfile")}
        small
      />
    );
  return null;
}

export { ButtonEditProfileLink };
