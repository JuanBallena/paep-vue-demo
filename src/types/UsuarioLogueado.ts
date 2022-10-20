import * as Rol from '../definition/Rol';

export class UsuarioLogueado {

    public usuarioId: number = 0;
    public usuario: string = "";
    public rolId: number = 0;
    public nombres: string = "";
    public paterno: string = "";
    public materno: string = "";
    public nombreCompleto: string = "";
    public rolDescripcion: string = "";

    public idEncuesta: number = 0;
    public nombreEncuesta: string = "";
    public nombreEncuestaUrl: string = "";
    public token: string = "";

    private key = 'esta es la clave secreta de paep';
    private encryptor = require('simple-encryptor')(this.key);

    private keyUsuario: string = "VALUE_1";
    private keyRolId: string = "VALUE_2";
    private keyNombreCompleto: string = "VALUE_3";
    private keyRolDescripcion: string = "VALUE_4";
    private keyUsuarioId: string = "VALUE_5";
    private keyToken: string = "VALUE_6";
    private keyIdEncuesta: string = "VALUE_7";
    private keyNombreEncuesta: string = "VALUE_8";
    private keyNombreEncuestaUrl: string = "VALUE_9";

    constructor() {

        this.usuario           = this.encryptor.decrypt(localStorage.getItem(this.keyUsuario)) || '';
        this.rolId             = parseInt(this.encryptor.decrypt(localStorage.getItem(this.keyRolId))) || 0;
        this.nombreCompleto    = this.encryptor.decrypt(localStorage.getItem(this.keyNombreCompleto)) || '';
        this.rolDescripcion    = this.encryptor.decrypt(localStorage.getItem(this.keyRolDescripcion)) || '';
        this.usuarioId         = parseInt(this.encryptor.decrypt(localStorage.getItem(this.keyUsuarioId))) || 0;
        this.token             = localStorage.getItem(this.keyToken) || '';

        this.idEncuesta        = parseInt(this.encryptor.decrypt(localStorage.getItem(this.keyIdEncuesta))) || 0;
        this.nombreEncuesta    = this.encryptor.decrypt(localStorage.getItem(this.keyNombreEncuesta)) || '';
        this.nombreEncuestaUrl = this.encryptor.decrypt(localStorage.getItem(this.keyNombreEncuestaUrl)) || '';
    }

    public setDataUsuarioLogueado(usuarioLogueado: any): void 
    {
        localStorage.setItem(this.keyUsuario, this.encryptor.encrypt(usuarioLogueado['usuario']));
        localStorage.setItem(this.keyRolId, String(this.encryptor.encrypt(usuarioLogueado['rolId'])));
        localStorage.setItem(this.keyNombreCompleto, this.encryptor.encrypt(usuarioLogueado['nombreCompleto']));
        localStorage.setItem(this.keyRolDescripcion, this.encryptor.encrypt(usuarioLogueado['rolDescripcion']));
        localStorage.setItem(this.keyUsuarioId, String(this.encryptor.encrypt(usuarioLogueado['usuarioId'])));
    }

    public setIdEncuesta(idEncuesta: number): void
    {
        const encryptString = this.encryptor.encrypt(idEncuesta);
        localStorage.setItem(this.keyIdEncuesta, encryptString);
    }

    public setToken(token: string): void
    {
        localStorage.setItem(this.keyToken, token);
    }

    public setNombreEncuesta(nombreEncuesta: string): void
    {
        const encryptString = this.encryptor.encrypt(nombreEncuesta);
        localStorage.setItem(this.keyNombreEncuesta, encryptString);

        const nombreEncuestaUrl = nombreEncuesta.split(' ').join('-').toLowerCase();
        const encryptString2 = this.encryptor.encrypt(nombreEncuestaUrl);
        localStorage.setItem(this.keyNombreEncuestaUrl, encryptString2);
    }

    public logout(): void 
    {
        localStorage.clear();
    }

    public isAdministrador(): boolean 
    {
        return this.rolId === Rol.ADMINISTRADOR;
    }

    public isPsicologo(): boolean 
    {
        return this.rolId === Rol.PSICOLOGO;
    }
}