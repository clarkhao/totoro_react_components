import { z } from "zod";
var inputChecks = {
    password: z
        .string()
        .min(8, { message: "password no less than 8 characters" })
        .max(32, { message: "password no more than 32 characters" })
        .regex(/^[a-zA-Z0-9_-]+$/, {
        message: "can only contain letter, number, underscore and hyphen",
    }),
    name: z
        .string()
        .min(4, { message: "name no less than 4 characters" })
        .max(32, { message: "name no more than 32 characters" })
        .regex(/^[a-zA-Z0-9_-]+$/, {
        message: "can only contain letter, number, underscore and hyphen",
    })
        .regex(/^[a-zA-Z][a-zA-Z0-9_-]+$/, {
        message: "name must begin with letter",
    }),
    email: z.string().email({ message: "Invalid email" }),
    code: z
        .string()
        .min(1, { message: "text no less than 1 characters" })
        .max(32, { message: "text no more than 32 characters" }),
    text: z.string().min(1, { message: "text no less than 1 characters" }),
};
export var inputCheck = function (inputName) {
    return inputChecks[inputName];
};
export var getErrMsg = function (msg) {
    var errObj = JSON.parse(msg);
    return errObj[0].message;
};
