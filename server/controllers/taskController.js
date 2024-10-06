const { getUserTasks, createTask } = require("../database/queries");

const getTasks = async (req, res) => {
  const { user } = req;

  try {
    const userTasks = await getUserTasks(user.id);

    return res.status(200).json({ tasks: userTasks });
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

const updateTask = (req, res) => {
  res.status(200).json({ message: `Update Task ${req.params.id}` });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Delete Task ${req.params.id}` });
};

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
};
