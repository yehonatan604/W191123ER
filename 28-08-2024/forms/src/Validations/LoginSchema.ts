import Joi from "joi";

export const LoginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .ruleset.pattern(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{8,20})/,
    )
    .rule({
      message: "password must be 8-20 characters, must have 1 uppercase latter",
    })
    .required(),
});
