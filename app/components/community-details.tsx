import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Avatar, ThumbnailImagePost, Title } from "components";
import { Community, NavigationType } from "interfaces";
import { colours, layout } from "styles";

interface Props {
  community: null | Community;
  navigation: NavigationType;
}

class CommunityDetails extends Component<Props> {
  render() {
    const { community, navigation } = this.props;

    if (community) {
      const { avatarPath, name, posts } = community;

      return (
        <View style={styles.container}>
          <FlatList
            data={posts}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={
              <View style={styles.firstRow}>
                <Avatar avatarPath={avatarPath} size="feature" />
                <Title style={styles.title} text={name} large />
              </View>
            }
            numColumns={2}
            columnWrapperStyle={styles.separator}
            renderItem={({ item }) => (
              <ThumbnailImagePost post={item} navigation={navigation} />
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.spacingXL,
    width: "100%",
  },
  firstRow: {
    alignItems: "center",
    borderBottomColor: colours.pureWhite,
    borderBottomWidth: 3,
    marginBottom: layout.spacing,
    width: "100%",
  },
  image: {
    borderRadius: layout.borderRadius,
    flex: 1,
    marginHorizontal: layout.spacing,
    overflow: "hidden",
  },
  separator: {
    marginVertical: layout.spacing,
  },
  title: {
    paddingVertical: layout.spacing,
  },
});

export { CommunityDetails };
