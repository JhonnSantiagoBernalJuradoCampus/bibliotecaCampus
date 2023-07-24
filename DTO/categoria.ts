import {Expose, Transform} from "class-transformer";
import {IsDefined, IsString} from "class-validator";

export class Categoria{
    @Expose({name:"cate"})
    @IsDefined({message: ()=>{throw {status: 401, message: "El parametro cate es obligatorio"}}})
    @IsString({message: ()=>{throw {status: 400, message: "El parametro cate debe ser un string"}}})
    @Transform(({value})=>{
        if(Math.floor(value)) throw {status:400, message: "El parametro cate debe ser un string"};
        else return value;
    })
    categoria: string;

    constructor(categoria:string){
        this.categoria = categoria;
    }
}