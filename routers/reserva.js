import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appReserva = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appReserva.get('/',(req, res) => {
    con.query('SELECT r.id_reserva as id, r.fecha_reserva as fecha_reserva, r.estado as estado FROM reserva as r',
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

export default appReserva;