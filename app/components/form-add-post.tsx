// import React from "react";
// import { View } from "react-native";
// import { Input } from 'react-native-elements';
// import { ValidationComponent } from "react-native-form-validator";

// import { NavigationType } from "interfaces";

// interface Props {
//   navigation: NavigationType;
//   onAdd: () => void;
// }

// interface State {
//   content: string;
//   imageUrl: string;
//   title: string;
// }

// class FormAddPost extends ValidationComponent {

//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       content: "",
//       imageUrl: "",
//       title: ""
//     };
//   }

//   render() {
//     return (
//       <View>
//         <Input
//           placeholder='Title'
//           errorMessage='This field is required'
//         />
//         <Input
//           placeholder='Image URL'
//         />
//         <Input
//           placeholder='Content'
//           errorMessage='This field is required'
//         />
//       </View>
//     )
//   }
// }