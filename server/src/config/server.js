import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import experienciaRoutes from '../routes/experiencia.js'; 
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'https://khalita.two-dd.com' 
}));


// router en /api/experiencia
app.use('/api/experiencia', experienciaRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Backend activo' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
