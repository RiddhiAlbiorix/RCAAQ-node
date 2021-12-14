import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { response, errorHandle } from "../common/response";

exports.login = async (req: Request, res: Response) => {
  console.log(req, "req")
  try {
    const userexits = await User.find({ email: req.body.email });
    console.log("Usere", userexits);
    if (userexits.length > 0) {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken(user);
      return res.send({ user, token });

    }
    var user = new User(req.body);
    const token = await user.generateAuthToken(user);
    await user.save();
    res.status(200).send({
      data: { user, token },
      message: "user created successfully",
      error: false
    });
  }
  catch (err) {
    // console.log(err, "Errorrr");
    // let msg: any = errorHandle(err);
    // if (err.errors && err.name == "ValidationError") {
    //   response(res, msg, err, 422);
    // }
    // else {
    //   response(res, 'Something went wrong in creating user', err, 500);
    // }
  }
};