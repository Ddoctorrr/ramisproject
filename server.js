import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Serve static files with correct MIME types
app.use(express.static(__dirname, {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Route handling
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'about.html'));
});

app.get('/technologies', (req, res) => {
  res.sendFile(join(__dirname, 'technologies.html'));
});

app.get('/news', (req, res) => {
  res.sendFile(join(__dirname, 'news.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(join(__dirname, 'contact.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});