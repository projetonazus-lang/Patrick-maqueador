import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Automatically ensure dist is built if the deployment platform launches server.js before npm run build
if (!fs.existsSync(indexPath)) {
  console.log('dist/index.html not found. Building project for production...');
  try {
    execSync('npx vite build', { stdio: 'inherit' });
  } catch (err) {
    console.error('Build failure during startup:', err);
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(distPath));

// Fallback all routes to dist/index.html for SPA client-side routing
app.get('*', (req, res) => {
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(503).send('Carregando aplicação, por favor atualize a página em alguns instantes...');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Patrick Alcântara Beauty server online on port ${PORT}`);
});
