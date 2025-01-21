const express = require("express");
const { getTasks, createTask, updateTask, deleteTask, getTaskById } = require("../controllers/todoController");
const { validateCreateTask, validateUpdateTask } = require("../middlewares/validations");
const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getTaskById); 

router.post("/", validateCreateTask, createTask); 

router.put("/:id", validateUpdateTask, updateTask);

router.delete("/:id", deleteTask);

module.exports = router;
