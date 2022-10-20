import * as Rol from '../definition/Rol';

export class Usuario {

    public index: number = 0;
    public idUsuario: number = 0;
    public usuario: string = "";
    public idRol: number = 0;
    public rolDescripcion: string = "";
    public nombres: string = "";
    public paterno: string = "";
    public materno: string = "";
    public nombreUsuario: string = "";

    constructor() {}

    public esPsicologo(): boolean 
    {
        return this.idRol === Rol.PSICOLOGO;
    }
}