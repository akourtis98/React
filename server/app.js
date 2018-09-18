const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// cors
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);

app.use("/routes/index", indexRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
