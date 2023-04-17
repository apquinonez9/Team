//importamos el Modelo
import PsicologoModel from "../models/BlogModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllPsicologos = async (req, res) => {
    try {
        const psicologos = await PsicologoModel.findAll()
        res.json(psicologos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getPsicologo = async (req, res) => {
        try {
            const psicologo = await PsicologoModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(psicologo[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createPsicologo= async (req, res) => {
    try {
       await PsicologoModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updatePsicologo = async (req, res) => {
    try {
        await PsicologoModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deletePsicologo = async (req, res) => {
    try {
        await PsicologoModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}