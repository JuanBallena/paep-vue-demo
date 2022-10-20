import * as TipoPregunta from '@/definition/TipoPregunta' ;

export class Pregunta {

    public idEncuesta: number = 0;
    public numeroPregunta: number = 0;
    public tipoPreguntaId: number = 0;
    public tipoPreguntaDescripcion: string = "";
    public tituloPregunta: string = "";
    public pagina: number = 0;
    public indicadorCritico: number = 0;
    public alternativa1: string = "";
    public alternativa2: string = "";
    public alternativa3: string = "";
    public alternativa4: string = "";

    public numeroAlternativa: number = 0;

    constructor() {}

    public esTipoSimple(): boolean
    {
        return this.tipoPreguntaId == TipoPregunta.SIMPLE;
    }

    public esTipoRango(): boolean
    {
        return this.tipoPreguntaId == TipoPregunta.RANGO;
    }

    public setNumeroAlternativa(numeroAlternativa: number): void 
    {
        this.numeroAlternativa = numeroAlternativa;
    }
}