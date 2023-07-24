import { Router } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import proxyAutor from "../middleware/proxyAutor.js";
import proxyCategoria from "../middleware/proxyCategoria.js";
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
    /**
     * @var {req.query.nombre}
     * req.query.nombre = Gabriel
     */
    con.query(`SELECT l.titulo as titulo, a.nombre as nombre FROM libro as l INNER JOIN autor as a ON l.id_autor = a.id_autor WHERE a.nombre = "${req.query.autor}"`,
    (err,data,fill) =>{
        if(err){
            res.status(404).send("Error al obtener datos");
        }
        else{
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    })
})
appLibro.get('/categoria', proxyCategoria, (req,res)=>{
    /**
     * @var {req.query.cate}
     * req.query.cate = Novela
     */
    con.query(`SELECT l.titulo as titulo, c.nombre as categoria FROM libro as l INNER JOIN categoria as c ON l.id_categoria = c.id_categoria WHERE c.nombre = "${req.query.categoria}"`,
    (err,data,fill) =>{
        if(err){
            res.status(404).send("Error al obtener datos");
        }
        else{
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    })
})
appLibro.get('/paginas', (req,res)=>{
    con.query(`SELECT l.titulo as titulo, a.nombre as nombre FROM libro as l INNER JOIN autor as a ON l.id_autor = a.id_autor WHERE l.num_paginas >= 500`,
    (err,data,fill) =>{
        if(err){
            res.status(404).send("Error al obtener datos");
        }
        else{
            (Object.entries(data).length === 0)
            ? res.status(400).send("Dato no encontrado")
            : res.send(data);
        }
    })
})
export default appLibro;