import { Request, Response } from 'express';
import { response, errorHandle } from '../common/response';
import { Duration } from '../models/management.model';

exports.getDurations = async (req: Request, res: Response) => {
  try {
    const durations = await Duration.find();
    // const durations = durations.map((item) => {
    //   return item.id 
    // })
    res.status(200).send({
      data: { durations },
      message: "durations fetched successfully",
      error: false
    });
  }
  catch (err: any) {
    let msg: any = errorHandle(err);
    if (err.errors && err.name == "ValidationError") {
      response(res, msg, err, 422);
    }
    else {
      response(res, 'Something went wrong', err, 500);
    }
  }
}

