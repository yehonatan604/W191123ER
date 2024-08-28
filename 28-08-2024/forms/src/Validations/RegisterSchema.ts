import Joi from "joi";

export const RegisterSchema = Joi.object({
  name: Joi.object()
    .keys({
      first: Joi.string().min(2).max(256).required(),
      middle: Joi.string().min(2).max(256).allow(""),
      last: Joi.string().min(2).max(256).required(),
    })
    .required(),

  phone: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)

    .rule({ message: 'user "phone" mast be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" mast be a valid mail' })
    .required(),
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
    )
    .rule({
      message:
        'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
    })
    .required(),
  image: Joi.object()
    .keys({
      url: Joi.string()
        .uri()
        .rule({ message: "user image mast be a valid url" })
        .allow(""),
      alt: Joi.string().min(2).max(256).allow(""),
    })
    .required(),
  address: Joi.object()
    .keys({
      state: Joi.string().allow(""),
      country: Joi.string().required(),
      city: Joi.string().required(),
      street: Joi.string().required(),
      houseNumber: Joi.number().required(),
      zip: Joi.number(),
    })
    .required(),
  isBusiness: Joi.boolean().required(),
});
