const {
  getUserTasks,
  createTask,
  onUpdateTaskTitle,
  onUpdateTaskOrder,
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

const setTask = async (req, res) => {
  const {
    user,
    body: { task },
  } = req;

  if (!task) {
    return res.status(400).json({ message: "No Task was provided" });
  }

  try {
    const newTask = await createTask(user.id, task);

    return res.status(201).json({ newTask });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTask = async (req, res) => {
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
      .json({ message: "Task updated successfully", updatedTask });
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

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete Task ${req.params.id}` });
};

module.exports = {
  getTasks,
  setTask,
  updateTask,
  updateTaskOrder,
  deleteTask,
};
