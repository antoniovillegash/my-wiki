const notesController = {}

notesController.createNote = (req, res)=>{
    res.json({ success: true, message: 'Se ha creado una nueva nota' })
}

module.exports = notesController;