const express = require("express");

const { APP_PORT } = require("./constants/constants");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/task", require("./routes/taskRoutes"));

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
