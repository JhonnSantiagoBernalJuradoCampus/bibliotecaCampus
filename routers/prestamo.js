import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
dotenv.config();
const appPrestamo = Router();

let dbConfig = JSON.parse(process.env.DB_CONFIG);
const con = mysql.createPool(dbConfig);

appPrestamo.get('/',(req, res) => {
    con.query('SELECT p.id_prestamo as id, p.fecha_prestamo as fecha_prestamo, p.fecha_devolucion as fecha_devolucion, p.estado as estado FROM prestamo as p',
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
appPrestamo.get('/usuario',(req, res) => {
    /**
     * @var {req.query.user}
     * req.query.user = Juan
     */
    con.query(`SELECT p.id_prestamo as id, p.fecha_prestamo as fecha_prestamo, u.nombre as nombre FROM prestamo as p INNER JOIN usuario as u ON p.id_usuario = u.id_usuario WHERE u.nombre = "${req.query.usuario}";`,
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

export default appPrestamo;