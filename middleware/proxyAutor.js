import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Autor} from "../controller/autor.js";
import {validate} from 'class-validator';

const proxyAutor = express();
proxyAutor.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Autor, req.query, { excludeExtraneousValues: true });
        req.query = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default proxyAutor;