var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
import { IsDefined, IsString } from "class-validator";
export class Autor {
    constructor(categoria) {
        this.categoria = categoria;
    }
}
__decorate([
    Expose({ name: "cate" }),
    IsDefined({ message: () => { throw { status: 401, message: "El parametro nombre es obligatorio" }; } }),
    IsString({ message: () => { throw { status: 400, message: "El parametro nombre debe ser un string" }; } }),
    Transform(({ value }) => {
        if (Math.floor(value))
            throw { status: 400, message: "El parametro nombre debe ser un string" };
        else
            return value;
    }),
    __metadata("design:type", String)
], Autor.prototype, "categoria", void 0);
