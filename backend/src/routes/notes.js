const { Router } = require('express');
const router = Router();
const {
    createNote
} = require('../controllers/notesControllers')



router.route('/create')
    .post(createNote)


module.exports = router;