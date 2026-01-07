import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import experienciaRoutes from '../routes/experiencia.js'; 

dotenv.config();

const app = express();


const allowedOrigins = [
  "https://khalita.two-dd.com", // Producción
  "http://localhost:5173",      // Vite dev
  "http://localhost:5174"       // Otra instancia local
];

app.use(cors({
  origin: function(origin, callback){
    // Permitir requests sin origin (Postman, curl) o que estén en la lista
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
}));

app.use(express.json());

app.use('/api/experiencia', experienciaRoutes);

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Backend activo' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
