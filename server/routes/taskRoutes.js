const express = require("express");

const {
  getTasks,
  setTask,
  updateTaskTitle,
  updateTaskOrder,
  deleteTask,
} = require("../controllers/taskController");

const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(authenticateJWT, getTasks).post(authenticateJWT, setTask);
router.route("/updateTaskOrder").put(authenticateJWT, updateTaskOrder);
router.route("/:id").put(authenticateJWT, updateTaskTitle).delete(authenticateJWT, deleteTask);

module.exports = router;
