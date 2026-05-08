// app.js
import express from 'express';
import todoRoute from './routes/todoRoute.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', todoRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});