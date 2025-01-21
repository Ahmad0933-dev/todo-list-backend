const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { validationResult } = require('express-validator');
const { responseData, errorResponse } = require('../utilis/response');
const asyncHandler = require('../middlewares/trycatch');



// Create a new task
const createTask = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, errors.array()[0].msg);
    }

    const { title, color } = req.body;

    if (!title) {
        return errorResponse(res, 'Title is required', 400);
    }

    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                color,
            },
        });

        return responseData(res, true, 201, newTask, 'Task created successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to create task');
    }
});

// Update a task by ID
const updateTask = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errorResponse(res, errors.array()[0].msg);
    }

    const { id } = req.params;
    const { title, color, completed } = req.body;

    try {
        const updatedTask = await prisma.task.update({
            where: { id: parseInt(id) },
            data: {
                title,
                color,
                completed,
            },
        });
        return responseData(res, true, 200, updatedTask, 'Task updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update task');
    }
});

// Delete a task by ID
const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    console.log('id', id);

    try {
        const task = await prisma.task.delete({
            where: { id: parseInt(id) },
        });

        return res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            task,
        });
    } catch (error) {
        if (error.code === 'P2025') {
            return errorResponse(res, 'Task not found', 404);
        }

        console.log('error', error);
        return errorResponse(res, 'Failed to delete task', 500);
    }
});

// Get all tasks
const getTasks = asyncHandler(async (req, res) => {
    try {
        const tasks = await prisma.task.findMany();
        return responseData(res, true, 200, tasks, 'Tasks fetched successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to fetch tasks');
    }
});

// Get a single task by ID
const getTaskById = asyncHandler(async (req, res) => {
    const { id } = req.params; // Retrieve task ID from URL params

    try {
        const task = await prisma.task.findUnique({
            where: { id: parseInt(id) }, // Fetch task by ID
        });

        if (!task) {
            return errorResponse(res, 'Task not found', 404);
        }

        return responseData(res, true, 200, task, 'Task fetched successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to fetch task');
    }
});


module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById
};
