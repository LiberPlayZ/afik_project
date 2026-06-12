const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/users/add', (req, res) => {
  res.send('Hello, user afik!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
