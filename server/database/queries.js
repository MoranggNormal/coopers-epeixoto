const { client } = require("./database");

const getUsers = async () => {
  try {
    const results = await client.query("SELECT * FROM users");
    return results.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsers,
};
