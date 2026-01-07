// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/api/experiencia', (req, res) => {
//   res.json({ mensaje: 'Experiencia OK' });
// });

// const PORT = process.env.PORT || 3000;
// a
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en puerto ${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import experienciaRoutes from '../routes/experiencia.js'; 
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', experienciaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
