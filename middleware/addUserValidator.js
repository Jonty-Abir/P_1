const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const User = require("../model/userModle");

const addUserValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("name is require*")
    .trim()
    .isAlpha("en-IN", { ignore: " _" }),
  check("email")
    .isEmail()
    .trim()
    .withMessage("email is require*")
    .custom(async function (value) {
      try {
        const email = await User.findeByEmail(value);

        if (email) {
          throw Error("email already used!");
        }
      } catch (err) {
        throw Error(err.message);
      }
    }),
  check("gender").isLength({ min: 1 }).withMessage("gender is require*"),
  check("status").isLength({ min: 1 }).withMessage("status is require*"),
];
const addUserValidatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(500).json({
      errors: mappedErrors,
    });
  }
};
module.exports = { addUserValidator, addUserValidatorHandler };
