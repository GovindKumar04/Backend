import {Router} from "express"

import {signUpUser} from "../controllers/userSignup.controller.js";
import {signInUser} from "../controllers/userSignIn.controller.js";
import { signOutUser } from "../controllers/userSignOut.controllers.js";

import {fileUpload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";



const router = Router();

router.route("/register").post(fileUpload,signUpUser);  

router.route("/login").post(signInUser)

router.route("/logout").post(verifyJWT, signOutUser)

export default router;