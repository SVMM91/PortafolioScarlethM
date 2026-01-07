import express from 'express'
import cors from 'cors'
import experienciaRoutes from './routes/experiencia.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', experienciaRoutes)

export default app
