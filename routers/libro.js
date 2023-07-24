import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyAutor from "../middleware/proxyAutor.js";
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
appLibro.get('/disponible', (req,res) =>{
    con.query('SELECT libro.titulo as titulo, autor.nombre as autor, estado_libro.nombre as estado FROM libro INNER JOIN autor ON libro.id_autor = autor.id_autor INNER JOIN estado_libro ON libro.id_estado = estado_libro.id_estado WHERE autor.id_autor = libro.id_autor AND estado_libro.id_estado = 1',
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
appLibro.get('/prestado', (req,res) =>{
    con.query('SELECT libro.titulo as titulo, prestamo.fecha_devolucion as fecha_devolucion FROM libro INNER JOIN prestamo ON libro.id_libro = prestamo.id_libro WHERE prestamo.id_libro = libro.id_libro AND prestamo.estado = "Prestado"',
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
appLibro.get('/autor', proxyAutor, (req,res)=>{
    res.send(`Valido al autor ${req.query.nombre}`)
})

export default appLibro;