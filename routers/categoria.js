import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appCategoria = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appCategoria.get('/',(req, res) => {
    con.query('SELECT * FROM categoria',
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

export default appCategoria;