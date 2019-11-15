// import { NavigationType, Post } from "interfaces";
// import React, { Component } from "react";
// import { TextInput, TouchableOpacity, ScrollView } from "react-native-gesture-handler";
// import { Analytics, firstSentence } from "utils";
// import { labels } from "labels";
// import { ADD_COMMENT, ADD_REPLY } from "mutations";
// import { View, Text, StyleSheet } from "react-native";
// import { Mutation } from "react-apollo";
// import { BackgroundContainer } from "components";
// import { Icon } from "react-native-vector-icons/Icon";
// import { Title } from "app/components/notifications/title";
// import { colours, layout, typography } from "styles";
// import { withMappedNavigationParams } from "react-navigation-props-mapper";

// interface Props {
//   navigation: NavigationType;
//   postId: Post["id"];
// }

// interface State {
//   content: string;
//   imageUrl: string;
//   title: string;
// }

// class AddPostScreen extends Component<Props, State> {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: "",
//       imageUrl: "",
//       title: "",
//     };
//   }

//   componentDidMount() {
//     // Analytics.trackContent({
//     //   contentType: "AddPost",
//     //   contentId: this.props.postId,
//     // });
//   }

//   componentDidUpdate(_props, state) {
//   }

//   onSubmitEditing(query, id) {
//     const { content, title, imageUrl } = this.state;

//     query({
//       variables: {
//         content,
//         id,
//       },
//     }).then(() => {
//       this.setState({ content: "", textInputEditable: true });
//       this.props.navigation.pop();
//     });
//   }

//   input(mutation) {

//     const args = {
//       autoFocus: true,
//       editable: true,
//       multiline: true,
//       placeholder: labels.addPlaceholderTitle,
//       onChangeText: content => this.setState({ content }),
//       value: this.state.content,
//       returnKeyLabel: labels.submit,
//     };

//     if (mutation === ADD_COMMENT) {
//       return (createComment, {}) => (
//         <View style={styles.textInputContainer}>
//           <Text style={styles.label}>{labels.title}</Text>
//           <TextInput
//             onSubmitEditing={() =>
//               this.onSubmitEditing(createComment, this.props.postId)
//             }
//             style={styles.title}
//             {...args}
//           />
//           <Text style={styles.label}>{labels.body}</Text>
//           <TextInput
//             {...args}
//             autoFocus={false}
//             ref={input => (this.secondTextInput = input)}
//             onSubmitEditing={() =>
//               this.onSubmitEditing(createComment, this.props.postId)
//             }
//             onChangeText={textInputExtra => this.setState({ textInputExtra })}
//             value={this.state.textInputExtra}
//             style={styles.text}
//             placeholder={labels.addPlaceholderBody}
//           />
//         </View>
//       );
//     }

//     return (createPost: any, {}: any) => (
//       <TextInput
//         onSubmitEditing={() =>
//           this.onSubmitEditing(createPost, this.props.postId)
//         }
//         style={styles.text}
//         {...args}
//       />
//     );
//   }

//   renderAddResponse(mutation) {
//     return <Mutation mutation={mutation}>{this.input(mutation)}</Mutation>;
//   }

//   render() {
//     const { commentId } = this.props;

//     const text = commentId ? labels.addYourReply : labels.addNewTopic;
//     const mutation = commentId ? ADD_REPLY : ADD_COMMENT;

//     return (
//       <BackgroundContainer>
//         <View style={styles.header}>
//           <View style={styles.closeContainer}>
//             <TouchableOpacity onPress={() => this.props.navigation.pop()}>
//               <Icon name="times-circle" size={30} />
//             </TouchableOpacity>
//           </View>
//           <Title style={styles.ctaText} text={text + ":"} small />
//         </View>
//         <View style={styles.body}>
//           <ScrollView>
//             <View style={styles.row}>{this.renderAddResponse(mutation)}</View>
//           </ScrollView>
//         </View>
//       </BackgroundContainer>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: colours.whiteTransparent,
//     borderTopLeftRadius: layout.borderRadiusL,
//     borderTopRightRadius: layout.borderRadiusL,
//     flex: 1,
//     paddingTop: layout.spacing,
//   },
//   closeContainer: {
//     flexDirection: "row-reverse",
//     padding: layout.spacing,
//   },
//   ctaText: {
//     paddingHorizontal: layout.spacing,
//   },
//   header: {},
//   label: {
//     color: colours.mediumGrey,
//     fontWeight: "bold",
//     paddingTop: layout.spacingXL,
//     paddingHorizontal: layout.spacingL,
//   },
//   row: {
//     alignItems: "baseline",
//     flexDirection: "row",
//   },
//   textInputContainer: {
//     width: "100%",
//     flexDirection: "column",
//   },
//   title: {
//     padding: layout.spacingL,
//     fontFamily: "creteround-regular",
//     fontSize: typography.fontSizeXL,
//     flexWrap: "wrap",
//   },
//   text: {
//     fontFamily: "creteround-regular",
//     fontSize: typography.fontSizeL,
//     padding: layout.spacingL,
//     width: "100%",
//   },
// });

// const wrappedAddPostScreen = withMappedNavigationParams()(AddPostScreen);
// export {
//   wrappedAddPostScreen as AddPostScreen,
//   AddPostScreen as UnwrappedAddPostScreen,
// };