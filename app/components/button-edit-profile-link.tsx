import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { ButtonSubmit } from "components";
import { Author, NavigationType } from "interfaces";
import { labels } from "labels";
import { USER_AVATAR } from "queries";

interface Props {
  navigation: NavigationType;
  userId: Author["id"];
}

function ButtonEditProfileLink(props: Props) {
  const { navigation, userId } = props;
  const { data } = useQuery(USER_AVATAR);

  if (data && data.me.id === userId)
    return (
      <ButtonSubmit
        display="active"
        label={labels.editProfile}
        onPress={() => navigation.navigate("EditProfile")}
        small
      />
    );
  return null;
}

export { ButtonEditProfileLink };
