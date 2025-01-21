const { body, param } = require("express-validator");

const validateCreateTask = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("color")
    .notEmpty()
    .withMessage("Color is required")
    .isString()
    .withMessage("Color must be a valid string"),
];

const validateUpdateTask = [
  param("id")
    .isInt()
    .withMessage("ID must be an integer"),

  body("title")
    .optional()
    .isString()
    .withMessage("Title must be a valid string"),

  body("color")
    .notEmpty()
    .withMessage("Color is required")
    .isString()
    .withMessage("Color must be a valid string"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be a boolean value"),
];

module.exports = { validateCreateTask, validateUpdateTask };
