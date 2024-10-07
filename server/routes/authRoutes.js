const express = require("express");
const { check } = require("express-validator");

const { register, login } = require("../controllers/authController");

const validateErrors = require("../utils/validateErrors");

const router = express.Router();

router
  .route("/register")
  .post(
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
    validateErrors,
    register
  );

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  validateErrors,
  login
);

module.exports = router;
