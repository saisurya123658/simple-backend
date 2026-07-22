const express = require("express");

const router = express.Router();

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

/* ==========================
   GET ALL TASKS
========================== */

router.get("/", getAllTasks);

/* ==========================
   GET TASK BY ID
========================== */

router.get("/:id", getTaskById);

/* ==========================
   CREATE TASK
========================== */

router.post("/", createTask);

/* ==========================
   UPDATE TASK
========================== */

router.put("/:id", updateTask);

/* ==========================
   DELETE TASK
========================== */

router.delete("/:id", deleteTask);

module.exports = router;
