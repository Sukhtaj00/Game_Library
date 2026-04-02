import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export const validateCreateGame = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    completion: Joi.number().min(0).max(100).optional(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      details: error.details.map((d) => d.message),
    });
  }

  next();
};

export const validateUpdateGame = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    title: Joi.string().min(1).optional(),
    completion: Joi.number().min(0).max(100).optional(),
  }).or("title", "completion"); // At least one field must be provided

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      details: error.details.map((d) => d.message),
    });
  }

  next();
};