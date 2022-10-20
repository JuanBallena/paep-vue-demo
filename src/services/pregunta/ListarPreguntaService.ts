import axios from 'axios';
import { Api } from '../Api';
import { ServiceResponse } from '../ServiceResponse';
import { ErrorHandler } from '../ErrorHandler';

interface ListarPreguntaParams {
    idEncuesta: string,
    limit: string,
    pag: string
}

export class ListarPreguntaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarPreguntaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/preguntas/listar`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "preguntas": [
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 1,
                            "tipoPreguntaId": 5,
                            "tipoPreguntaDescripcion": "ELECCION SIMPLE",
                            "tituloPregunta": "PREGUNTA 1",
                            "pagina": 1,
                            "alternativa1": "ALT 1",
                            "alternativa2": "ALT 2",
                            "alternativa3": "ALT 3",
                            "alternativa4": null
                        },
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 2,
                            "tipoPreguntaId": 5,
                            "tipoPreguntaDescripcion": "ELECCION SIMPLE",
                            "tituloPregunta": "PREGUNTA 2",
                            "pagina": 1,
                            "alternativa1": "ALT 1",
                            "alternativa2": "ALT 2",
                            "alternativa3": "ALT 3",
                            "alternativa4": null
                        },
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 3,
                            "tipoPreguntaId": 6,
                            "tipoPreguntaDescripcion": "RANGO",
                            "tituloPregunta": "PREGUNTA 3",
                            "pagina": 1,
                            "alternativa1": "NUNCA",
                            "alternativa2": "A VECES",
                            "alternativa3": "CON FRECUENCIA",
                            "alternativa4": "CON MUCHA FRECUENCIA"
                        }
                    ],
                    "paginas": 1
                },
                "responseCode": 0,
                "responseMessage": "ÉXITO"
            }

            this.serviceResponse.data = data['data'];
            this.serviceResponse.responseCode = data['responseCode'];
            this.serviceResponse.responseMessage = data['responseMessage'];

            return this.serviceResponse;

        } catch (error) {
          
            if (error.response) 
            {
                this.errorHandler.handlerErrorResponse(error.response.status);
            }

            if (error.request)
            {
                this.errorHandler.handlerErrorRequest();
            }
        }

        return this.serviceResponse;
    }

    public async listarParaEncuestado(params: ListarPreguntaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/preguntas/listar`, params);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "preguntas": [
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 1,
                            "tipoPreguntaId": 5,
                            "tipoPreguntaDescripcion": "ELECCION SIMPLE",
                            "tituloPregunta": "PREGUNTA 1",
                            "pagina": 1,
                            "alternativa1": "ALT 1",
                            "alternativa2": "ALT 2",
                            "alternativa3": "ALT 3",
                            "alternativa4": null
                        },
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 2,
                            "tipoPreguntaId": 5,
                            "tipoPreguntaDescripcion": "ELECCION SIMPLE",
                            "tituloPregunta": "PREGUNTA 2",
                            "pagina": 1,
                            "alternativa1": "ALT 1",
                            "alternativa2": "ALT 2",
                            "alternativa3": "ALT 3",
                            "alternativa4": null
                        },
                        {
                            "idEncuesta": 2,
                            "numeroPregunta": 3,
                            "tipoPreguntaId": 6,
                            "tipoPreguntaDescripcion": "RANGO",
                            "tituloPregunta": "PREGUNTA 3",
                            "pagina": 1,
                            "alternativa1": "NUNCA",
                            "alternativa2": "A VECES",
                            "alternativa3": "CON FRECUENCIA",
                            "alternativa4": "CON MUCHA FRECUENCIA"
                        }
                    ],
                    "paginas": 1
                },
                "responseCode": 0,
                "responseMessage": "ÉXITO"
            }

            this.serviceResponse.data = data['data'];
            this.serviceResponse.responseCode = data['responseCode'];
            this.serviceResponse.responseMessage = data['responseMessage'];

            return this.serviceResponse;

        } catch (error) {
          
            if (error.response) 
            {
                this.errorHandler.handlerErrorResponse(error.response.status);
            }
            else if (error.request)
            {
                this.errorHandler.handlerErrorRequest();
            }
        }

        return this.serviceResponse;
    }
}