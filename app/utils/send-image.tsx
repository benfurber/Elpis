import { RNS3 } from "react-native-s3-upload";
import { PhotoIdentifier } from "@react-native-community/cameraroll";

import { labels } from "labels";
import { S3_USER_ACCESS, S3_USER_SECRET } from "react-native-dotenv";

const options = {
  accessKey: S3_USER_ACCESS,
  acl: "public-read-write",
  bucket: "elpis-profile-images",
  keyPrefix: "uploads/",
  region: "sa-east-1",
  secretKey: S3_USER_SECRET,
  successActionStatus: 201,
};

interface Props {
  selectedImage: null | PhotoIdentifier;
  setError: (string) => void;
  setProgress: (number) => void;
  setState: (string) => void;
}

const sendImage = (props: Props) => {
  const { selectedImage, setError, setProgress, setState } = props;
  if (selectedImage === null) {
    return setError(labels.noImageSelected);
  }

  const date = Date.now();

  const { filename, uri } = selectedImage.node.image;
  const file = {
    name: `${date}-${filename}`,
    type: "image/jpg",
    uri,
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
