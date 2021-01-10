const fs = require('fs');
const notesController = {}
var path = require('path'); 
const dir = __dirname+'/../../../notes/';

notesController.createNote = (req, res) => {

    // validations
    let isValid = true
    let errors ={}
    if (!req.body.tittle.match(/^[a-z0-9-]+$/)) {
        isValid = false
        errors.tittle = "the tittle must contain only alphabetic characters or numbers"
    }
    if (!req.body.category.match(/^[a-z0-9-]+$/)) {
        isValid = false
        errors.category = "the category must contain only alphabetic characters or numbers"
    }

    //create folder
    const folderName = '/Users'

    try {
      if (!fs.existsSync(dir+req.body.category)) {
        fs.mkdirSync(dir+req.body.category)
      }
    } catch (err) {
      console.error(err)
    }

    //create file if not exists
    i = 0;
    let titleWithSpaces =req.body.tittle.replace(/-/g, ' ')

      try {
        if(fs.existsSync(dir+req.body.category+'/'+req.body.tittle+'.md')) {
            console.log("The file exists.");
        } else {
            fs.writeFile(dir+req.body.category+'/'+req.body.tittle+'.md', '# '+titleWithSpaces, error => {
                if (error) {
                  console.error(error)
                  return
                }
                //file written successfully
              })
        }
    } catch (err) {
        console.error(err);
    }
    

    //response
    isValid ?
        res.status(201).json({ success: true, message: errors })
    :
        res.status(406).json({ success: false, message: errors })


}

module.exports = notesController;