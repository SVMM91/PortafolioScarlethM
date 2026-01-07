import express from 'express'
import cors from 'cors'
import experienciaRoutes from './routes/experiencia.js'

const app = express()

app.use(cors())
app.use(express.json())

// Prefijo único para la API
app.use('/api', experienciaRoutes)

// Ruta raíz para comprobar que el backend está vivo
app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Backend activo 🚀' })
})

export default app
