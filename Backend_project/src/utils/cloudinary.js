import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async function (uploadFilePath) {
  if (!uploadFilePath) return null;

  // Upload an image
  try {
    const uploadResult = await cloudinary.uploader.upload(uploadFilePath, {
      resource_type: "auto",
    });
    console.log("File has been uploaded", uploadResult.url);
    return uploadResult;
  } catch (error) {
    fs.unlinkSync(uploadFilePath); // remove the temporary file as the upload operatio got failed

    return null;
  }
};
