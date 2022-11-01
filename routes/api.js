const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
//modular

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

/**
 * 
 * @returns {Array}
 */
function getNotes(){

  // use fs to read the db.json
  const json = fs.readFileSync(dbPath, 'utf-8');
  // json parse
  try{
    return JSON.parse(json);
  }catch(err){
    return [];
  }
}


router.post('/api/notes', (req, res) => {

  // create a new note
  const newNote = {
    id: uuid.v4(), 
    text: req.body.text,
    title: req.body.title,
  }


  // add to db.json
  const existing = getNotes();

  existing.push(newNote);

  fs.writeFileSync(dbPath, JSON.stringify(existing), 'utf-8');

  res.json(newNote);


})

router.delete('/api/notes/:id', (req, res) => {
  // reading notes form db.json
  let db = JSON.parse(fs.readFileSync(dbPath))
  // removing note with id
  let deleteNotes = db.filter(item => item.id !== req.params.id);
  // Rewriting note to db.json
  fs.writeFileSync(dbPath, JSON.stringify(deleteNotes));
  res.json(deleteNotes);
  
})


module.exports = router;

