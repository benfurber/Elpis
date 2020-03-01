import AWS from "aws-sdk/dist/aws-sdk-react-native";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import { labels } from "labels";
import { resizeImage } from "utils";

import { S3_USER_ACCESS, S3_USER_SECRET } from "react-native-dotenv";

const initialiseOptions = {
  accessKeyId: S3_USER_ACCESS,
  region: "sa-east-1",
  secretAccessKey: S3_USER_SECRET,
};

interface Props {
  bucket: string;
  resizeTo: { height: number; width: number };
  selectedImage: null | PhotoIdentifier;
  setProgress?: (number) => void;
  successCallback: (url) => void;
}

async function sendImage(props: Props) {
  const {
    bucket,
    selectedImage,
    setProgress,
    successCallback,
    resizeTo,
  } = props;
  if (selectedImage === null) {
    throw Error(labels.noImageSelected);
  }

  const s3 = new AWS.S3(initialiseOptions);

  const newImage = await resizeImage({ image: selectedImage, resizeTo });
  const Key = `uploads/${Date.now()}-${selectedImage.node.image.filename}`;

  const uploadParams = {
    ACL: "public-read-write",
    Body: newImage.image,
    Bucket: bucket,
    ContentLength: newImage.size,
    ContentType: "image/jpeg",
    Key,
  };
  const upload = s3.upload(uploadParams);

  if (setProgress) {
    upload.on("httpUploadProgress", event => {
      const percentage = event.loaded / (newImage.size || event.total);
      setProgress(percentage);
    });
  }

  upload.send((err, data) => {
    if (err) throw Error(err.message);
    return successCallback(data.Location);
  });
}

export { sendImage };
