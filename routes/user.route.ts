import express from "express";
// import { authenticate } from "../middleware/authenticate";

const router = express.Router();

const userController = require("../controllers/user.controller");
// const authenticate = require("../middleware/authenticate");

router.post(
  "/login",
  userController.login
);

// router.post("/userVerifyToken", userController.user_verifyToken);

export { router as UserRoutes };