import React from "react";
import Markdown from "react-native-markdown-display";

const DisplayContent = (props: { content: string }) => {
  return <Markdown>{props.content}</Markdown>;
};

export { DisplayContent };
