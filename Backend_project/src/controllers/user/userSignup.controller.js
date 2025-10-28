import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiErrors.js";
import { User } from "../../model/user.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const signUpUser = asyncHandler(async (req, res) => {
  // get user detail
  // validate user detail
  // check if user already exist
  //check for images, check for avatar
  // upload them to cludinary
  //crete user object - save in db
  //remove passowrd and refresh token field form response
  // cheack for user creation
  // return response.
  const { username, email, fullname, password } = req.body;
  console.table([username,email,fullname,password])
  if (
    [username, email, fullname, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields required");
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });

  if (existingUser) {
    console.log(1);
    throw new ApiError(409, "User email or username already exists!!");
  }
  console.log(req.files);
  const avatarPath = await req.files?.avatar[0]?.path;
  const coverImagePath = await req.files?.coverImage[0]?.path;

  if (!avatarPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarPath);
  const coverImage = coverImagePath
    ? await uploadOnCloudinary(coverImagePath)
    : null;

  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }

  const user = await User.create({
    fullname,
    username: username.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
  });
  console.log(user)
  return res
    .status(201)
    .json(new ApiResponse(201, user, "User created succesfully"));
});



