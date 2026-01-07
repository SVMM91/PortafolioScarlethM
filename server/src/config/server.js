import 'dotenv/config';
import express from 'express';
import routeExperiencia from '../routes/experiencia.js'; 
import dbclient from './dbclient.js';
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Backend activo');
});

app.use('/experiencia', routeExperiencia);

const PORT = process.env.PORT || 3000;

dbclient.connect()
  .then(() => console.log('BD Mongo conectado'))
  .catch(err => console.error('Error Mongo:', err.message));

app.listen(PORT, () => {
  console.log(`🚀 Servidor activo en el puerto ${PORT}`);
});
