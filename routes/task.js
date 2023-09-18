const express = require("express");
const router = express.Router();

const db = require("../models");
const { authRole } = require("../auth/basicAuth");
const { ROLE } = require("../user");

router.post("/", authRole(ROLE.ADMIN), (req, res, next) => {
  // provide middleware for validation
  const { task, description, status, assignee } = req.body;
  db.Task.create({
    task,
    description,
    status,
    assignee,
  })
    .then(() => {
      res.status(200).json({ message: "Task added successfully!" });
    })
    .catch((error) => next(error));
});

router.put("/:id", authRole(ROLE.ADMIN), (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  db.Task.update(
    {
      status,
    },
    {
      where: { id },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Task edited successfully!" });
    })
    .catch((error) => next(error));
});

router.delete("/:id", authRole(ROLE.ADMIN), (req, res, next) => {
  const { id } = req.params;
  db.Task.destroy({
    where: {
      id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Task deleted successfully!" });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
