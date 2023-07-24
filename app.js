import express from "express";
import dotenv from "dotenv";
import appAutor from "./routers/autor.js";
import appCategoria from "./routers/categoria.js";
dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use('/autor', appAutor);
appExpress.use('/categoria', appCategoria);

let myConfig = JSON.parse(process.env.MY_CONFIG);
appExpress.listen(myConfig, ()=>{
    console.log(`http://${myConfig.hostname}:${myConfig.port}`);
})