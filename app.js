import express from "express";
import cors from 'cors'
///Importamos la conexion a la base de datos
import db from './database/db.js'
///Importamos nuestro enrutador
import PsicologoRoutes from './routes/routes.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use('/psicologo',PsicologoRoutes)

try {
  await db.authenticate()
  console.log('Conexión Exitosa A La DB')
} catch (error) {
    console.log(`El Error De Conexión Es:${error}`)
}

/*app.get('/',(req,res)=>{
  res.send('Hola Mundo')
})*/

app.listen(8001,()=>{
    console.log('server UP running in http://localhost:8001/')
})