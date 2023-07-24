import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {Usuario} from "../controller/usuario.js"
import {validate} from 'class-validator';

const proxyUsuario = express();
proxyUsuario.use(async(req,res,next)=>{
    try {
        let data = plainToClass(Usuario, req.query, { excludeExtraneousValues: true });
        req.query = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).send(err.message);
    }
})

export default proxyUsuario;