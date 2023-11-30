const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Mock data (replace with a database later)
let habits = [
  { id: 1, name: 'Exercise' },
  { id: 2, name: 'Read' },
  // Add more habits as needed
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { habits });
});

app.get('/habits', (req, res) => {
  res.render('habits', { habits });
});

app.post('/habits', (req, res) => {
  const newHabit = { id: habits.length + 1, name: req.body.habitName };
  habits.push(newHabit);
  res.redirect('/habits');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
