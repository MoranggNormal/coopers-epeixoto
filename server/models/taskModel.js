const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const User = require("./userModel");

const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Task title was not provided",
        },
        notEmpty: {
          msg: "Task title cannot be empty",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (task) => {
        const maxOrderTask = await Task.findOne({
          where: { completed: false },
          order: [["order", "DESC"]],
        });

        task.order = maxOrderTask ? maxOrderTask.order + 1 : 0;
      },
    },
    timestamps: true,
  }
);

User.hasMany(Task, { foreignKey: "userId", as: "tasks" });
Task.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = Task;
