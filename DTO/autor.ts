import {Expose, Type, Transform} from "class-transformer";
import {IsDefined, IsString} from "class-validator";

export class Autor{
    @Expose({name:"nombre"})
    @IsDefined({message: ()=>{throw {status: 401, message: "El parametro nombre es obligatorio"}}})
    @IsString({message: ()=>{throw {status: 400, message: "El parametro nombre debe ser un string"}}})
    @Transform(({value})=>{
        if(Math.floor(value)) throw {status:400, message: "El parametro nombre debe ser un string"};
        else return value;
    })
    autor: string;

    constructor(autor:string){
        this.autor = autor;
    }
}