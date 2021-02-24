const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Generic Express Server At Port 3005");
});

const port = 3005;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});