//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const PsicologoModel = db.define('psicologos', {
     nombre: { type: DataTypes.STRING },
     apellido: { type: DataTypes.STRING },
     ficha: { type: DataTypes.NUMBER },
     teléfono: { type: DataTypes.NUMBER },
     fecha: { type: DataTypes.DATE },
     cita: { type: DataTypes.STRING },  
 })
 export default PsicologoModel