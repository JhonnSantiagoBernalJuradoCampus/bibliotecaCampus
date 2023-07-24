import {Expose, Transform} from "class-transformer";
import {IsDefined, IsString} from "class-validator";

export class Usuario{
    @Expose({name:"user"})
    @IsDefined({message: ()=>{throw {status: 401, message: "El parametro user es obligatorio"}}})
    @IsString({message: ()=>{throw {status: 400, message: "El parametro user debe ser un string"}}})
    @Transform(({value})=>{
        if(Math.floor(value)) throw {status:400, message: "El parametro user debe ser un string"};
        else return value;
    })
    usuario: string;

    constructor(usuario:string){
        this.usuario = usuario;
    }
}