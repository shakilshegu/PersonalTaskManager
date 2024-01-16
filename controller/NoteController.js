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
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//* create Note
export const createNotes = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;
    const newNode = await prisma.note.create({
        data:{
            title,
            content,
            userId:userId
        }
    })
    res.status(201).json({ note: newNode });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//* delete Note
export const deleteNotes = async(req,res)=>{
    try {
        const userId = req.user.id
        const noteIdDelete = req.params.noteId
        const note = await prisma.note.findUnique({
          where:{
            id:parseInt(noteIdDelete)
          }
        });
        if(!note || note.userId !== userId){
            return res.status(404).json({ error: 'Note not found or unauthorized' });
        }
        await prisma.note.delete({
            where:{
                id:parseInt(noteIdDelete)
            }
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//* update Notes
export const updateNotes = async (req,res)=>{
    try {
        const userId = req.user.id
        const noteIdToUpdate = parseInt(req.params.noteId);
        const { title, content } = req.body;
        const note = await prisma.note.findUnique({
           where: { id: noteIdToUpdate },
         });
         if (!note || note.userId !== authenticatedUserId) {
           return res.status(404).json({ error: 'Note not found or unauthorized' });
         }
         const updatedNote = await prisma.note.update({
           where: { id: noteIdToUpdate },
           data: { title, content },
         });
         res.status(200).json({ note: updatedNote });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}