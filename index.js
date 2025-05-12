const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const helloRoute = require('./routes/hello');

app.use('/hello', helloRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js startup project!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
