import multer from "multer";
import mime from "mime-types";
import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiErrors.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}.${mime.extension(
        file.mimetype
      )}`.replace(/\\/g, "/")
    );
  },
});

const upload = multer({ storage: storage });
export const fileUpload = upload.fields([
  {
    name: "avatar",
    maxCount: 1,
  },
  {
    name: "coverImage",
    maxCount: 1,
  },
]);
