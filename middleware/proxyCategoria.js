import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Categoria} from "../controller/categoria.js";
import {validate} from 'class-validator';

const proxyCategoria = express();
proxyCategoria.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Categoria, req.query, { excludeExtraneousValues: true });
        req.query = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default proxyCategoria;