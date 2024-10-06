const getTasks = async (_req, res) => {
  try {
    res.status(200).json({ message: "Get tasks", users });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};

const setTask = (req, res) => {
  if (!req.body.task) {
    res.status(400).json({ message: "No Task was provided" });
  }

  res.status(200).json({ message: "Set Task" });
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
