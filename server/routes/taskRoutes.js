const express = require("express");

const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(authenticateJWT, getTasks).post(authenticateJWT, setTask);
router.route("/:id").put(authenticateJWT, updateTask).delete(authenticateJWT, deleteTask);

module.exports = router;
