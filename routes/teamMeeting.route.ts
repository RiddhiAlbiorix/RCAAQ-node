import express from "express";
import { authenticate } from "../middleware/authenticate";

const router = express.Router();

const teamMeetingController = require("../controllers/teamMeeting.controller");

router.post("/createTeamMeeting", authenticate, teamMeetingController.create);
// router.put("/quoteUpdate", authenticate, teamMemberController.quote_update);
// router.get("/quoteGet/:id", authenticate, teamMemberController.quote_getById);
// router.get("/quoteGet", authenticate, teamMemberController.quote_get);
// router.delete("/quoteDelete/:id", authenticate, teamMemberController.quote_delete);


export { router as TeamMeetingRoutes };