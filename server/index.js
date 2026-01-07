import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/dbclient.js'

dotenv.config()

const PORT = process.env.PORT || 3000

connectDB()

app.listen(PORT, () => {
  console.log(`servidor conectado ${PORT}`)
})
