import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const livingEnvironmentController = require('../controllers/livingEnvironment.controller');

router.post("/livingEnvironment/create", authenticate, livingEnvironmentController.create);

export { router as LivingEnvironmentRoutes };