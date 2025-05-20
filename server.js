const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/register', (req, res) => 
{
  const { username, password, email, phone } = req.body;
  res.status(201).send({ message: 'User registered successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => 
{
  console.log(`Server is running on port ${PORT}`);
});