const express = require("express");
const { check, validationResult } = require("express-validator");

const { sendMail } = require("../controllers/mailController");

const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(
  authenticateJWT,
  [
    check("email", "Please include a valid email").isEmail(),
    check("phone", "Phone is required").not().isEmpty(),
    check("message", "Message is required").not().isEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  sendMail
);

module.exports = router;
