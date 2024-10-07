const express = require("express");
const { check } = require("express-validator");

const { sendMail } = require("../controllers/mailController");

const authenticateJWT = require("../middleware/authMiddleware");

const validateErrors = require("../utils/validateErrors");

const router = express.Router();

router.route("/").post(
  [
    check("email", "Please include a valid email").isEmail(),
    check("phone", "Phone is required").not().isEmpty(),
    check("message", "Message is required").not().isEmpty(),
  ],
  validateErrors,
  sendMail
);

module.exports = router;
