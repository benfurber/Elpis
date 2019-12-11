import { NavigationType, Post } from "interfaces";
import React, { Component } from "react";
import { withMappedNavigationParams } from "react-navigation-props-mapper";
import { View } from "react-native";
import { FormAddPost } from "app/components/form-add-post";
import { BackgroundContainer } from "components";

const TITLE = 'title';
const CONTENT = 'content';

interface Props {
  navigation: NavigationType;
}

class State {
  [TITLE] = "";
  imageUrl = "";
  [CONTENT] = "";
}

class AddPostScreen extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = new State();
  }

  componentDidMount() {
    // Analytics.trackContent({
    //   contentType: "AddPost",
    //   contentId: this.props.postId,
    // });
  }

  render() {

    const { navigation } = this.props;
    
    return (
      <BackgroundContainer>
        <View>
          <FormAddPost 
          navigation={navigation}
          onPress={(state) => {
            //TODO
            console.log(state)
          }}
          />
        </View>
      </BackgroundContainer>
    );
  }
}

const wrappedAddPostScreen = withMappedNavigationParams()(AddPostScreen);
export {
  wrappedAddPostScreen as AddPostScreen,
  AddPostScreen as UnwrappedAddPostScreen,
};