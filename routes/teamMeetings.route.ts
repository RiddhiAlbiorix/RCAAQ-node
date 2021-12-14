import express from "express";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

const teamMeetingsController = require("../controllers/teamMeetings.controller");

router.post("/createTeamMeetings", authenticate, teamMeetingsController.create);
// router.put("/quoteUpdate", authenticate, teamMemberController.quote_update);
// router.get("/quoteGet/:id", authenticate, teamMemberController.quote_getById);
// router.get("/quoteGet", authenticate, teamMemberController.quote_get);
// router.delete("/quoteDelete/:id", authenticate, teamMemberController.quote_delete);


export { router as TeamMeetingsRoutes };