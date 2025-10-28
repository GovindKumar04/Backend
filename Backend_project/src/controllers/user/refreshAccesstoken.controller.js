import { User } from "../../model/user.model";
import { ApiError } from "../../utils/ApiErrors";
import { asyncHandler } from "../../utils/asyncHandler";
import jwt from "jsonwebtoken";

export const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const incomingRefreshToken = req.cookie.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthroized request");
  }

  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  const user = await User.findById(decodedToken._id);
});
