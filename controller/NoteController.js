import prisma from "../db/dbconfig.js";

//* fetch Note
export const fetchNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const notes = await prisma.note.findMany({
      where: {
        userId: userId,
      },
    });
    if (notes) {
      res.status(200).json({ success: true, message: "successfully feched " });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
//* create Note
export const createNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const newNote = await prisma.note.create({
      data: {
        title,
        content,
        userId: userId,
      },
    });
    if (newNote) {
      res
        .status(200)
        .json({ success: true, note: newNote, message: "new note added" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
//* delete Note
export const deleteNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const noteIdDelete = req.params.noteId;
    const note = await prisma.note.findUnique({
      where: {
        id: parseInt(noteIdDelete),
      },
    });
    if (!note || note.userId !== userId) {
      return res.status(404).json({ success:false,message: "Note not found or unauthorized" });
    }
    await prisma.note.delete({
      where: {
        id: parseInt(noteIdDelete),
      },
    });
    res.status(200).send({success:true,message:"Succussfully deleted"});
  } catch (error) {
    res.status(500).json({ success:false,message: "Internal Server Error" });
  }
};
//* update Notes
export const updateNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const noteIdToUpdate = parseInt(req.params.noteId);
    const { title, content } = req.body;
    const note = await prisma.note.findUnique({
      where: { id: noteIdToUpdate },
    });
    if (!note || note.userId !== authenticatedUserId) {
      return res.status(404).json({success:false, error: "Note not found or unauthorized" });
    }
    const updatedNote = await prisma.note.update({
      where: { id: noteIdToUpdate },
      data: { title, content },
    });
    res.status(200).json({success:true, note: updatedNote,message:"successfully updated" });
  } catch (error) {
    res.status(500).json({success:false, message: "Internal Server Error" });
  }
};
