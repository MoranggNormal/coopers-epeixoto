const { sequelize } = require("./database");
const User = require("../models/userModel");
const Task = require("../models/taskModel");

const registerUser = async (name, email, password) => {
  try {
    await sequelize.authenticate();

    const user = await User.create({
      name: name,
      email,
      password,
    });

    return user;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const getUserTasks = async (userId) => {
  try {
    const userTasks = await Task.findAll({
      where: {
        userId,
      },
    });

    return userTasks;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const createTask = async (userId, title = "test", description = "") => {
  try {
    const newTask = await Task.create({
      title,
      description,
      userId,
    });

    return newTask;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const updateTaskTitle = async (id, userId, title) => {
  const task = await Task.findOne({ where: { id, userId } });

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = title;
  await task.save();

  return task
};

module.exports = {
  registerUser,
  getUserTasks,
  createTask,
  updateTaskTitle
};
