const { sequelize } = require("./database");
const User = require("../models/userModel");

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

module.exports = {
  registerUser,
};
