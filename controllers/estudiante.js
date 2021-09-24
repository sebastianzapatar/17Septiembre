'use strict';
const Estudiante=require('../models/estudiante');
const controller={
    datosEstudiante:(req,res)=>{
        console.log("Soy el primer controlador");
        return res.status(200).send({
            nombre:'Dennis',
            apellido:'Gonzalez'
        })
    },
    test:(req,res)=>{
        console.log("Desde el test");
        return res.status(200).send({
            message:'I am working and learning how to code :)'
        })
    },
    save:(req,res)=>{//req me envian datos, res devuelvo respuesta
        //Recoger los parametros
        const {nombre,apellido}=req.query;
        console.log(nombre,apellido);
        //Validar los parametros
        
        try {
            if(nombre.length>0 && apellido.length>0){
                 const estudiante= new Estudiante();
                 estudiante.nombre=nombre;
                 estudiante.apellido=apellido;
                 estudiante.save((err,estudiante)=>{
                     if(err || !estudiante){
                         return  res.status(400).send({
                             status:'Fail',
                             message:'no hubo forma mono'
                         })
                     }
                     else{
                         return res.status(200).send({
                             status:'exito',
                             estudiante
                         })
                     }
                 })
            }
            else{
                return res.status(401).send({
                    status:false,
                    message:'Faltan datos'
                })
            }
        } catch (error) {
            console.log("Error mono");
            return res.status(401).send({
             status:false,
             message:'Contacte al admin'
         })
        }
        //Creamos el objeto
        //Guardamos y retornamos la respuesta

    }

}
module.exports=controller;