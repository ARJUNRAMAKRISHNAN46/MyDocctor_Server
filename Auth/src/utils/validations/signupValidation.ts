import Joi from 'joi';

export const signupValidation = Joi.object({
    firstName: Joi
        .string()
        .min(3)
        .required(),

    lastName: Joi
        .string()
        .required(),

    email: Joi
        .string()
        .email()
        .required(),

    mobile: Joi
        .string()
        .regex(/^\d{10}$/)
        .required(),

    password: Joi
        .string()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
        .required(),
})