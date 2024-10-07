const express = require("express");

const {
  getTasks,
  setTask,
  updateTask,
  updateTaskOrder,
  deleteTask,
} = require("../controllers/taskController");

const authenticateJWT = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(authenticateJWT, getTasks).post(authenticateJWT, setTask);
router.route("/updateTaskOrder").put(authenticateJWT, updateTaskOrder);
router.route("/:id").put(authenticateJWT, updateTask).delete(authenticateJWT, deleteTask);

module.exports = router;
