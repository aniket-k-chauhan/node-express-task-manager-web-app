const express = require("express");
const path = require("path");
const createError = require("http-errors");
const morgan = require("morgan");

const indexRouter = require("./routes/index");
const taskRouter = require("./routes/task");
const { users } = require("./user");
const { authUser } = require("./auth/basicAuth");

const app = express();
const port = 8000;

app.use(express.json()); // application/json data
app.use(express.urlencoded({ extended: true })); // form data
app.use(morgan("dev")); // logger

app.use(setUser);

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// public
app.use("/static", express.static(path.join(__dirname, "public")));

// Dashboard
app.use("/", indexRouter);

// Add/Update/Delete Task - Only performed by admin role
app.use("/tasks", authUser, taskRouter);

function setUser(req, res, next) {
  const userName = req.body.currentUser;
  if (userName) {
    req.user = users.find((user) => user.name === userName);
  }
  next();
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(port, () => {
  console.log(`server started at port: ${port}....`);
});
