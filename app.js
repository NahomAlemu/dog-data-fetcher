const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
      <h1>Welcome to the Dog Data Fetcher</h1>
      <p>Click <a href="/dog-breeds.html">here</a> to view dog breeds information.</p>
  `);
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server running successfully at http://localhost:${port}`);
});

