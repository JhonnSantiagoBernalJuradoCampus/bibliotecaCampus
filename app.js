import express from "express";
import dotenv from "dotenv";
import appAutor from "./routers/autor.js";
import appCategoria from "./routers/categoria.js";
import appEditorial from "./routers/editorial.js";
import appEstado from "./routers/estado.js";
import appLibro from "./routers/libro.js";
import appPrestamo from "./routers/prestamo.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use('/autor', appAutor);
appExpress.use('/categoria', appCategoria);
appExpress.use('/editorial', appEditorial);
appExpress.use('/estado', appEstado);
appExpress.use('/libro', appLibro);
appExpress.use('/prestamo', appPrestamo);

let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})