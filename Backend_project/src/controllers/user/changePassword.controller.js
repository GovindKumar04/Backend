import { User } from "../../model/user.model";
import { ApiError } from "../../utils/ApiErrors";
import { ApiResponse } from "../../utils/ApiResponse";
import { asyncHandler } from "../../utils/asyncHandler";

const changePassword = asyncHandler(async(req,res) => {
    const {oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Old password isn't correct")
    }

    user.password= newPassword;
    await user.save({validateBeforeSave: false});

    res
    .status(200)
    .json(
        new ApiResponse(200, {}, "Password changed succesfully")
    )
})