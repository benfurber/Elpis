import { PhotoIdentifier } from "@react-native-community/cameraroll";
import ImageResizer from "react-native-image-resizer";
import fs from "react-native-fs";
import { decode } from "base64-arraybuffer";

interface Props {
  image: PhotoIdentifier;
  resizeTo: { height: number; width: number };
}

async function resizeImage(props: Props) {
  const { uri } = props.image.node.image;
  const { height, width } = props.resizeTo;

  const resizedFile = await ImageResizer.createResizedImage(
    uri,
    height,
    width,
    "JPEG",
    85,
  );

  const base64 = await fs.readFile(resizedFile.uri, "base64");
  const arrayBuffer = decode(base64);

  return {
    image: arrayBuffer,
    size: resizedFile.size,
  };
}

export { resizeImage };
