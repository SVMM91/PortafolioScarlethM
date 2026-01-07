import express from "express";
import cors from "cors";
import experienciaRoutes from "./routes/experiencia.js";

const app = express();

const allowedOrigins = [
  "https://khalita.two-dd.com", 
  "http://localhost:5173",     
  "http://localhost:5174",     
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
}));

app.use(express.json());
app.use("/api", experienciaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
