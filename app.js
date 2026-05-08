import express from 'express';
import todoRoutes from './routes/todoRoute.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'app/views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Per form data

app.use('/', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});