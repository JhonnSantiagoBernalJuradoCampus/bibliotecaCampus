import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appLibro = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appLibro.get('/',(req, res) => {
    con.query('SELECT libro.titulo as titulo, autor.nombre as autor, editorial.nombre as editorial FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor INNER JOIN editorial ON libro.id_editorial = editorial.id_editorial WHERE editorial.id_editorial = libro.id_editorial AND autor.id_autor = libro.id_autor',
        (err, data, fill)=>{
            if(err){
                res.status(404).send("Error al obtener datos");
            }
            else{
                res.send(data);
            }
        }
    )
})

export default appLibro;