import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const gameSchema = Joi.object({
  title: Joi.string().min(1).required(),
  completion: Joi.number().min(0).max(100).required(),
});

export const validateGame = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = gameSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};