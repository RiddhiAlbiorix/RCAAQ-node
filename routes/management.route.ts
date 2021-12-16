import express from "express";
import { authenticate } from "../middleware/authenticate";
const router = express.Router();

const managementController = require("../controllers/management.controller");

router.get("/getDurations", authenticate, managementController.getDurations);

export { router as ManagementRoutes };