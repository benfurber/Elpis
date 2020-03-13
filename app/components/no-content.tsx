import React, { Component } from "react";

import { BackButton, BackgroundContainer, ErrorMessage } from "components";
import { NavigationType } from "interfaces";
import { labels } from "labels";

interface Props {
  navigation: NavigationType;
}

class NoContent extends Component<Props> {
  render() {
    const { navigation } = this.props;

    const message = labels.errors.noContent;
    const text = labels.back.back;

    return (
      <BackgroundContainer>
        <BackButton navigation={navigation} text={text} />
        <ErrorMessage error={{ message }} />
      </BackgroundContainer>
    );
  }
}

export { NoContent };
