import { UsuarioLogueado } from "./UsuarioLogueado";
import * as EstadoEncuesta from "@/definition/EstadoEncuesta";

export class Encuesta {

    public idEncuesta: number = 0;
    public nombreEncuesta: string = "";
    public idPsicologo: number = 0;
    public idEstadoEncuesta: number = 0;
    public visitas: number = 0;
    public idRol: number = 0;
    public rolDescripcion: string = "";
    public nombrePsicologo: string = "";

    private usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

    constructor() {}

    public usuarioPuedeCompartir(): boolean {
        return this.usuarioLogueado.usuarioId === this.idPsicologo;
    }

    public usuarioPuedeEliminar(): boolean {
        return this.usuarioLogueado.usuarioId === this.idPsicologo;
    }

    public encuestaNoEstaCerrada(): boolean {
        return this.idEstadoEncuesta !== EstadoEncuesta.CERRADA;
    }

    public estadoEncuesta(): string {

        if (this.idEstadoEncuesta === EstadoEncuesta.ACTIVA) return EstadoEncuesta.ACTIVA_S;
        if (this.idEstadoEncuesta === EstadoEncuesta.CERRADA) return EstadoEncuesta.CERRADA_S;
        return "";
    }

    public iconoEstado(): string {

        if (this.idEstadoEncuesta === EstadoEncuesta.ACTIVA) return "fas fa-user-edit";
        if (this.idEstadoEncuesta === EstadoEncuesta.CERRADA) return "fas fa-lock";
        return "";
    }
}