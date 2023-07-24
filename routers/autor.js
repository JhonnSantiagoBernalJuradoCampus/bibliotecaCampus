import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appAutor = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appAutor.get('/',(req, res) => {
    con.query('SELECT a.nombre as autor, a.nacionalidad FROM autor as a',
        (err, data, fill)=>{
            if(err){
                res.status(404).send("Error al obtener datos");
            }
            else{
                (Object.entries(data).length === 0)
                ? res.status(400).send("Dato no encontrado")
                : res.send(data);
            }
        }
    )
})

export default appAutor;