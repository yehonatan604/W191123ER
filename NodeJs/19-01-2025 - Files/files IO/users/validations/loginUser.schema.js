import Joi from "joi";
import regex from "../../services/regex.service.js";

export const loginUserSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string()
        .ruleset.regex(regex.password)
        .rule({
            message:
                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        })
        .required(),
});
