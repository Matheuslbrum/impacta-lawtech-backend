import { Request, Response } from "express";
import mongoose from "mongoose";
import User, { IUserModel } from "../models/UserModel";

class userController {
  public create(req: Request, res: Response): void {
    const { name, email } = req.body;
    const user: IUserModel = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
    });

    user
      .save()
      .then((user) => res.status(201).json({ user }))
      .catch((error) => res.status(500).json(error));
  }

  public update(req: Request, res: Response): void {
    const { id } = req.params;
    const { name, email } = req.body;

    User.findByIdAndUpdate(id, { name, email }, { new: true }).then((user) => {
      if (user) {
        res.status(201).json({ user });
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    });
  }

  public delete(req: Request, res: Response): void {
    const { id } = req.params;

    User.findByIdAndDelete(id)
      .then((user) =>
        user
          ? res.status(201).json({ message: "deleted" })
          : res.status(404).json({ message: "Not Found" })
      )
      .catch((error) => res.status(500).json({ error }));
  }

  public get(req: Request, res: Response): void {
    User.find()
      .then((user) =>
        user
          ? res.status(200).json({ user })
          : res.status(404).json({ message: "Not Found" })
      )
      .catch((error) => res.status(500).json({ error }));
  }
}

export default new userController();
