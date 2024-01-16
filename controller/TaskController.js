import prisma from "../db/dbconfig.js";

//* create a new task
export const addTask = async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const userId = req.user.id;
  if (!title || !description || !dueDate || !status) {
    return res
      .status(400)
      .json({ erroe: "Incomplete data in the request body" });
  }
  const task = await prisma.task.create({
    data: {
      title,
      description,
      dueDate: new Date(dueDate),
      status,
      userId: userId,
    },
  });
  return res.status(201).json({ status: 201, data: task, message: "Post created" });
};

//* Get all tasks for a user
export const showTask = async (req, res) => {
  const userId = req.user.id;
  const tasks = await prisma.task.findMany({
    where: {
      userId: userId,
    },
  });
  res.json(tasks);
};

//* Update a task
export const updateTask = async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, dueDate, status } = req.body;
  try {
    const updateTask = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title,
        description,
        dueDate,
        status,
      },
    });
    console.log("Updated Task:", updateTask);
    res.json(updateTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//* Detete a task
export const deleteTask = async (req, res) => {
  const taskId = req.params.id
  await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  res.json({ message: "Task deleted successfully" });
};
