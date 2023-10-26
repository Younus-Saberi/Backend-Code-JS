const express = require('express');

const { createTodo } = require("../controller/createTodo");
const { getTodos } = require("../controller/getTodos");
const { getSingleTodo } = require("../controller/getSingleTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const { updateTodo } = require("../controller/updateTodo");

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/singleTodo/:id", getSingleTodo);
router.patch("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
