const User = require("../../models/userModel");

const registerUser = async (name, email, password) => {
  try {
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
