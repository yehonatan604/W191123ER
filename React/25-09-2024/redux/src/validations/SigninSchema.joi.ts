import Joi from "joi";

export const SignInJoiSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string()
        .ruleset.pattern(
            /((?=.*[0-9]{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$ %^&*-]{1}).{8,20})/
        )
        .rule({
            message:
                `
                "password" must be at least nine characters long and contain an uppercase letter, 
                a lowercase letter, a number and one of the following characters !@#$%^&*-
            `,
        })
        .required(),
});




