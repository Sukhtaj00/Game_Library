"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateGame = exports.validateCreateGame = void 0;
const joi_1 = __importDefault(require("joi"));
const validateCreateGame = (req, res, next) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().min(1).required(),
        completion: joi_1.default.number().min(0).max(100).optional(),
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
exports.validateCreateGame = validateCreateGame;
const validateUpdateGame = (req, res, next) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().min(1).optional(),
        completion: joi_1.default.number().min(0).max(100).optional(),
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
exports.validateUpdateGame = validateUpdateGame;
