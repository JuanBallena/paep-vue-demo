export class Datetime {

    constructor () {}

    public getFechaActual(): string 
    {
        const date = new Date();
        const isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
        const fechaActual = isoDate.substr(0, 10)
        return fechaActual
    }
      
    public getHoraActual(): string 
    {
        const horaActual = new Date().toLocaleTimeString('es-PE')
        return horaActual
    }
}