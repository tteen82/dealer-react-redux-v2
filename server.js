const { db, syncAndSeed } = require('./server/db');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static('dist'));
app.use(express.static(__dirname + '/'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', require('./server/api'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const init = async () => {
  try {
    await db.sync({ force: true });
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
