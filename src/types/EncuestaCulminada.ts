
export class EncuestaCulminada {

    index: number = 0;
    encuestaId: number = 0;
    edad: number = 0;
    generoId: number = 0;
    generoDescripcion: string = "";
    centroEducativo: number = 0;
    distritoId: number = 0;
    distrito: string = "";
    fechaHoraInicio: string = "";
    fechaHoraFin: string = "";
    estadoEncuestaIniciadaIdnumber = 0;
    estadoEncuestaIniciadaDescripcion: string = "";

    constructor() {}

    public getFechaHoraFin(): string
    {
        var date = new Date(this.fechaHoraFin);

        var mes: string = date.toLocaleDateString("es-PE", { month: 'long' });
        var dia: string = date.toLocaleDateString("es-PE", { day: 'numeric' });
        var anio: string = date.toLocaleDateString("es-PE", { year: 'numeric' });
        var tiempo: string = date.toLocaleTimeString("es-PE", { timeZone: 'UTC' }).substr(0, 5); // a partir del 5 caracter corta

        var fechaHoraFin: string = `${mes} ${dia}, ${anio} ${tiempo}`;
        
        return fechaHoraFin;
    }
}

//var hour: string = fechaHoraFinToDate.toUTCString(); //Fri, 23 Apr 2021 00:42:09 GMT