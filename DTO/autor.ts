import {Expose, Type} from "class-transformer";
import {IsDefined, IsString} from "class-validator";

export class Autor{
    @Expose({name:"autor"})
    @IsDefined({message: ()=>{throw {status: 401, message: "El parametro autor es obligatorio"}}})
    @IsString({message: ()=>{throw {status: 400, message: "El parametro autor debe ser un string"}}})
    autor: string;

    constructor(autor:string){
        this.autor = autor;
    }
}