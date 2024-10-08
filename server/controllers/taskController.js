const {
  getUserTasks,
  onCreateTask,
  onUpdateTaskTitle,
  onUpdateTaskOrder,
  onDeleteTask,
  onMarkTaskAsComplete,
  onErasePendingTasks,
  onEraseCompleteTasks
} = require("../database/queries/tasks");

const getTasks = async (req, res) => {
  const { user } = req;

  try {
    const userTasks = await getUserTasks(user.id);

    const pending = userTasks.filter((task) => task.completed === false);
    const completed = userTasks.filter((task) => task.completed === true);

    return res.status(200).json({ pending, completed });
  } catch (error) {
    return res.status(500).json({ message: "Error fetching tasks" });
  }
};

const createTask = async (req, res) => {
  const {
    user,
    body: { task },
  } = req;

  if (!task) {
    return res.status(400).json({ message: "No Task was provided" });
  }

  try {
    const newTask = await onCreateTask(user.id, task);

    return res.status(201).json({ newTask });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTaskTitle = async (req, res) => {
  const {
    user,
    body: { id, title },
  } = req;

  if (!title) {
    return res.status(400).json({ message: "No title was provided" });
  }

  try {
    const updatedTask = await onUpdateTaskTitle(id, user.id, title);

    return res
      .status(200)
      .json({ message: "Task title updated successfully", updatedTask });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTaskOrder = async (req, res) => {
  const {
    user,
    body: { tasks },
  } = req;

  if (!tasks) {
    return res.status(400).json({ message: "No tasks was provided" });
  }

  try {
    await onUpdateTaskOrder(tasks, user.id);

    return res.status(200).json({ message: "Task Order updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  const {
    user,
    params
  } = req;

  if (!params.id) {
    return res.status(400).json({ message: "No task was provided" });
  }

  try {
    await onDeleteTask(params.id, user.id);

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const eraseCompleteTasks = async (req, res) => {
  const {
    user,
  } = req;

  try {
    await onEraseCompleteTasks(user.id);

    return res.status(200).json({ message: "Tasks deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const erasePendingTasks = async (req, res) => {
  const {
    user,
  } = req;

  try {
    await onErasePendingTasks(user.id);

    return res.status(200).json({ message: "Tasks deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const markTaskAsComplete = async (req, res) => {
  const {
    user,
    body: { id },
  } = req;

  if (!id) {
    return res.status(400).json({ message: "No task was provided" });
  }

  try {
    await onMarkTaskAsComplete(id, user.id);

    return res.status(200).json({ message: "Task completed successfully" });
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTaskTitle,
  updateTaskOrder,
  deleteTask,
  markTaskAsComplete,
  erasePendingTasks,
  eraseCompleteTasks
};
