export class Validator {

    constructor() {}

    public soloNumeros(event: any): void 
    {
        const keyCode = (event.keyCode ? event.keyCode : event.which)

        if ((keyCode < 48 || keyCode > 57))
        {
          event.preventDefault()
        }
    }

    public charactersConstrainNombreEncuesta(event: any): void 
    {
        const keyCode = (event.keyCode ? event.keyCode : event.which)

        const codes = [32, 225, 233, 237, 243, 250];//espacio y tíldes

        if (!(codes.includes(keyCode) || (keyCode > 47 && keyCode < 58) || (keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123)))
        {
          event.preventDefault()
        }
    }
}