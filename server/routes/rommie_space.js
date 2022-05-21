const express = require('express');

const roomie_space = express.Router();
const client = require('../db/connection');


client.connect()

roomie_space.route('/').get(function (req, res) {
  res.send('Hello World')

});


// punto 2
roomie_space.route('/nuevo_usuario').post(function (req, res) {

  let query = `INSERT INTO usuariosRS (user_id,nombre,email,pwd) VALUES(DEFAULT, $1, $2, $3);`
  let datos = [req.body.nombre, 
                req.body.correo,
                req.body.pwd            
              ]

    client.query(query, datos,(err, result)=> {
      if (err) {
        console.log("no pude insertar")
        let m = 'No se pudo insterar';
        res.status(400).send({message: m});
      } else {
        let m = `Usuario Registrado`
        res.status(200).send({message: m});
      }
    });
  });

// punto 3
roomie_space.route('/login').get(function (req, res) {

    var query = `SELECT * FROM usuariosRS WHERE email = $1 AND pwd = $2;`;

    var num = [req.query.nombre, req.query.pwd]

    var error_m = "Credenciales inválidas";
    

    client.query(query, num,(err, result)=> {
        if (err) {
          res.status(400).send("Error en el servidor")
        } else {
          if(result.rows.length === 0){
          res.status(400).send("Credenciales inválidas")
          }else{
            res.status(200).json(result.rows);
          }
  
        }
      });
  
  });

  
module.exports = roomie_space;