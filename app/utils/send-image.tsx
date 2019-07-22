import { RNS3 } from "react-native-s3-upload";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import { labels } from "labels";
import { S3_USER_ACCESS, S3_USER_SECRET } from "react-native-dotenv";

const options = {
  acl: "public-read-write",
  keyPrefix: "uploads/",
  bucket: "elpis-profile-images",
  region: "sa-east-1",
  accessKey: S3_USER_ACCESS,
  secretKey: S3_USER_SECRET,
  successActionStatus: 201,
};

interface Props {
  selectedImage: PhotoIdentifier;
  setError: (string) => void;
  setProgress: (number) => void;
  setState: (string) => void;
}

const sendImage = ({
  selectedImage,
  setError,
  setProgress,
  setState,
}: Props) => {
  if (selectedImage === null) {
    return setError(labels.noImageSelected);
  }

  const { filename, uri } = selectedImage.node.image;
  const file = {
    uri,
    name: filename,
    type: "image/jpg",
  };

  RNS3.put(file, options)
    .progress(response => {
      const percentage = response.loaded / response.total;
      return setProgress(percentage);
    })
    .then(response => {
      if (response.status !== 201) {
        throw new Error("Failed to upload image to S3");
      }
      return setState(response.body.postResponse.location);
    })
    .catch(error => {
      throw setError(error.text);
    });
};

export { sendImage };
