import Joi from "joi";
import regex from "../../services/regex.service.js";

export const createUserSchema = Joi.object({
    username: Joi.string().min(2).max(256).required().messages({
        "string.base": "username must be a string",
        "string.empty": "username cannot be an empty field",
        "string.min": "username must be at least 2 characters long",
        "string.max": "username must be at most 256 characters long",
        "any.required": "username is a required field",
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string()
        .ruleset.regex(regex.password)
        .rule({
            message:
                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        })
        .required(),
    authLevel: Joi.number().integer().min(1).max(3).default(1),
});
