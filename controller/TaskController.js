import prisma from "../db/dbconfig.js";

//* create a new task
export const addTask = async (req, res) => {
  try {
    
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
    if(task){
      return res.status(200).json({success:true,message:"Succussfully add task"})
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: task, message: "internal server error" });
  }
};

//* Get all tasks for a user
export const showTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    });
   if(tasks){
    return res.status(200).json({success:true,message:"Successfully feched data"})
   } 
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
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
    if (updateTask) {
      return res
        .status(200)
        .json({ success: true, message: "updation successfull" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "updation failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//* Detete a task
export const deleteTask = async (req, res) => {
  console.log(req.params.id);
  try {
    const taskId = req.params.id;
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    if (taskId) {
      return res
        .status(200)
        .json({ success: true, message: "Deleted successful" });
    }
  } catch (error) {
    res.status(500).json({success:false,message:"Internal Server Error"})
  }
};
