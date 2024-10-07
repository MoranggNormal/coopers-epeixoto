const express = require("express");

const {
  getTasks,
  createTask,
  updateTaskTitle,
  updateTaskOrder,
  deleteTask,
  markTaskAsComplete,
  erasePendingTasks,
  eraseCompleteTasks
} = require("../controllers/taskController");

const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(authenticateJWT, getTasks).post(authenticateJWT, createTask);
router.route("/updateTaskOrder").put(authenticateJWT, updateTaskOrder);
router.route("/markTaskAsComplete").put(authenticateJWT, markTaskAsComplete);
router.route("/erasePendingTasks").delete(authenticateJWT, erasePendingTasks);
router.route("/eraseCompleteTasks").delete(authenticateJWT, eraseCompleteTasks);
router.route("/:id").put(authenticateJWT, updateTaskTitle).delete(authenticateJWT, deleteTask);

module.exports = router;
