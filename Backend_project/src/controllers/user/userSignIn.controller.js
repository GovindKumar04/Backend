import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiErrors.js";
import { User } from "../../model/user.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { option } from "../../utils/httpSecure.js";


const signInUser = asyncHandler(async (req, res, next) => {
  // get data
  // validate it
  // find user
  // validate password
  // genrate refresh and acces token
  const { inputauth, password } = req.body;

  if (!inputauth || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ $or: [{ username:inputauth }, { email:inputauth }] });

  if (!user) {
    throw new ApiError(404, "User with this email or username doesn't exist");
  }
  const ifpassowrdMatch = await user.isPasswordCorrect(password);

  if (!ifpassowrdMatch) {
    throw new ApiError(404, "User with this email or username doesn't exist");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });
  
// Set cookies first
res
  .status(200)
  .cookie("accessToken", accessToken, option)
  .cookie("refreshToken", refreshToken, option)
  .json(
    new ApiResponse(200, {
      user,
      tokens: {
        accessToken,
        refreshToken,
      },
    }, "Login successful")
  );
});

export {signInUser };
