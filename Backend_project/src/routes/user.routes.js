import { Router } from "express";

import { signUpUser } from "../controllers/user/userSignup.controller.js";
import { signInUser } from "../controllers/user/userSignIn.controller.js";
import { signOutUser } from "../controllers/user/userSignOut.controllers.js";

import { fileUpload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user/refreshAccesstoken.controller.js";

const router = Router();

router.route("/register").post(fileUpload, signUpUser);

router.route("/login").post(signInUser);

router.route("/logout").post(verifyJWT, signOutUser);

router.route("/refresh-token").post(refreshAccessToken);

export default router;
