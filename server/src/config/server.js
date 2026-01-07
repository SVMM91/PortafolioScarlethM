import 'dotenv/config';
import express from 'express';
import routeExperiencia from '../routes/experiencia.js'; 
import dbclient from './dbclient.js';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: true
}));

app.use('/experiencia', routeExperiencia);

async function startServer() {
  try {
    await dbclient.connect();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Servidor activo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar servidor:', error);
  }
}

startServer();
