'use strict';
//Cargar los modulos de express y cors
const express=require('express');
//Cargando las rutas
const EstudianteUrl=require('./urls/estudianteurls');
//ejecutar el servidor
const app=express();
//Middleware es traducir las peticiones a json
//Configurar los cors son permisos para que se puedan conectar a nuestra app
//agregamos los prefijos
app.use('/estudiante/',EstudianteUrl);
//Exportamos los modulos
module.exports=app;