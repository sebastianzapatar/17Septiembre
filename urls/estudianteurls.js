'use strict';
// Paquetes y archivos necesarios
const express=require('express');
const EstudianteController=require('../controllers/estudiante');
//Creo mi directorio de rutas
const router=express.Router();
router.get('/datos',EstudianteController.datosEstudiante);
router.post('/controlador2',EstudianteController.test);
router.post('/guardar',EstudianteController.save);
router.get('/listar',EstudianteController.get_estudiantes);
router.delete('eliminar/:id',EstudianteController.delete);
//exporto mi directorio de rutas
module.exports=router;