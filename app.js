const express = require('express');
const app = express();
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const PORT = process.env.PORT || 3001;





app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// web  --- htmls

app.use(webRouter);
app.use(apiRouter);

// api  --- json


app.listen(PORT, () => {
  console.log('app is running on http://localhost:' + PORT);
});

