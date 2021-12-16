import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const livingEnvironmentController = require('../controllers/livingEnvironment.controller');

router.post("/livingEnvironment/create", authenticate, livingEnvironmentController.create);
router.get("/livingEnvironment", authenticate, livingEnvironmentController.getLivingEnvironment);

export { router as LivingEnvironmentRoutes };