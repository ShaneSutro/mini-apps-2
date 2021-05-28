const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cors());

app.get('/test', (req, res) => {
  console.log('Get on /test');
  res.send({ data: 'here is a string' });
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
