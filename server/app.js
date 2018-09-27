const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

// Routes
const authRouter = require("./routes/auth");
const otherRouter = require("./routes/other");
const postsRouter = require("./routes/posts");
const profileRouter = require("./routes/profile");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongodb
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// cors
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use("/routes/auth/", authRouter);
app.use("/routes/other/", otherRouter);
app.use("/routes/posts/", postsRouter);
app.use("/routes/profile/", profileRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
