import { Request, Response } from 'express';
import { Member } from '../models/member.model';
import { response, errorHandle } from "../common/response";

exports.create = async (req: Request, res: Response) => {
  try {
    var member = new Member(req.body)
    await member.save()
    return res.status(200).send({
      data: { member },
      message: "Members created successfully",
      error: false
    })
  }
  catch (err: any) {
    let msg: any = errorHandle(err);
    if (err.errors && err.name == "ValidationError") {
      response(res, msg, err, 422);
    }
    else {
      response(res, "Something went wrong", err, 500);
    }
  }
}