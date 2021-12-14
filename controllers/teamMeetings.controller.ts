import { Request, Response } from 'express';
import { TeamMeetings } from '../models/teamMeetings.model';
import { response, errorHandle } from "../common/response";

exports.create = async (req: Request, res: Response) => {
  try {
    var teamMeetings = new TeamMeetings(req.body)
    await teamMeetings.save()
    return res.status(200).send({
      data: { teamMeetings },
      message: "TeamMeeting report created successfully",
      error: false
    })
  }
  catch (err: any) {
    {
      let msg: any = errorHandle(err);
      if (err.errors && err.name == "ValidationError") {
        response(res, msg, err, 422);
      }
      else {
        response(res, "Something went wrong in creating quote", err, 500);
      }
    }
  }
}