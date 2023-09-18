const express = require("express");
const router = express.Router();
const db = require("../models");
const { users } = require("../user");

router.get("/", async (req, res, next) => {
  const data = await db.Task.findAll();
  const allTasks = data.map((task) => ({
    id: task.id,
    task: task.task,
    description: task.description,
    status: task.status,
    assignee: task.assignee,
  }));

  res.render("index", {
    title: "Dashboard",
    allTasks,
    users,
  });
});

module.exports = router;
