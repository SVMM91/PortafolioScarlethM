import 'dotenv/config';
import express from 'express';
import routeExperiencia from '../routes/experiencia.js'; 
import dbclient from './dbclient.js';
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    "https://khalita.two-dd.com/",
    "http://localhost:5173",
  ]
}));

app.use('/experiencia', routeExperiencia);

async function startServer() {
  try {
    await dbclient.connect();
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`Servidor activo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar servidor:', error);
  }
}

startServer();

