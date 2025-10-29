import { User } from "../../model/user.model";
import { ApiError } from "../../utils/ApiErrors";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { option } from "../../utils/httpSecure";

export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const incomingRefreshToken =
    req.cookie?.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthroized request");
  }

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  const user = await User.findById(decodedToken?._id);
  if (!user) throw new ApiError(401, "invalid refresh token");

  if (incomingRefreshToken !== user?.refreshToken) {
    throw new ApiError(401, "Refresh token is expired or Invalid");
  }
  const newAccessToken = user.generateAccessToken();
  const newRefreshToken = user.generateRefreshToken();

  user.refreshToken = newRefreshToken;

  res
    .status(200)
    .cookie("accessToken", newAccessToken, option)
    .cookie("refreshToken", newRefreshToken, option)
    .json(
      new ApiResponse(
        200,
        { newAccessToken, newRefreshToken },
        "tokens refreshed"
      )
    );
});
