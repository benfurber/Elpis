import ImageResizer from "react-native-image-resizer";
import AWS from "aws-sdk/dist/aws-sdk-react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";
import fs from "react-native-fs";
import { decode } from "base64-arraybuffer";

import { labels } from "labels";
import { S3_USER_ACCESS, S3_USER_SECRET } from "react-native-dotenv";

interface Props {
  selectedImage: null | PhotoIdentifier;
  setError: (string) => void;
  setProgress: (number) => void;
  successCallback: (url) => void;
}

async function sendImage(props: Props) {
  const { selectedImage, setError, setProgress, successCallback } = props;
  if (selectedImage === null) {
    return setError(labels.noImageSelected);
  }

  const date = Date.now();
  const { filename, uri } = selectedImage.node.image;

  const resizedFile = await ImageResizer.createResizedImage(
    uri,
    300,
    300,
    "JPEG",
    85,
  );

  const fPath = resizedFile.uri;
  const base64 = await fs.readFile(fPath, "base64");

  const arrayBuffer = decode(base64);

  const initialiseOptions = {
    accessKeyId: S3_USER_ACCESS,
    region: "sa-east-1",
    secretAccessKey: S3_USER_SECRET,
  };
  const s3 = new AWS.S3(initialiseOptions);

  const uploadParams = {
    ACL: "public-read-write",
    Body: arrayBuffer,
    Bucket: "elpis-profile-images",
    ContentLength: resizedFile.size,
    ContentType: "image/jpeg",
    Key: `uploads/${date}-${filename}`,
  };
  const upload = s3.upload(uploadParams);

  upload.on("httpUploadProgress", event => {
    const percentage = event.loaded / (resizedFile.size || event.total);
    setProgress(percentage);
  });

  upload.send((err, data) => {
    if (err) setError(err.message);
    return successCallback(data.Location);
  });
}

export { sendImage };
