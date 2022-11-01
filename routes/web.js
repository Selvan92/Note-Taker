const router = require('express').Router();
const path = require('path');
//modular

router.get('/notes', (req, res) => {

  const notes = path.join(__dirname, '..', 'public', 'notes.html');
  res.sendFile(notes);

});

router.get('/', (req, res) => {
  const index = path.join(__dirname, '..', 'public', 'index.html');
  res.sendFile(index);
})


module.exports = router;

