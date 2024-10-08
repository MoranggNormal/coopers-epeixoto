const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerUser, findUser } = require("../database/queries/users");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await findUser(email);

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = await registerUser(name, email, password);

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({message: "Internal Server Error"});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUser(email);

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });

      }
    );
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  register,
  login,
};
