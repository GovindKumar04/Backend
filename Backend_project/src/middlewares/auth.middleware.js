import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiErrors.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) throw new ApiError(401, "Unauthorized request");

    const verifiedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(verifiedToken._id);
    if (!user) throw new ApiError(401, "Unauthorized request");

    req.user = user;
    next();
  } catch (error) {
    next(error)
  }
});
