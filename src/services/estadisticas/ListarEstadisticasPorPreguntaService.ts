import { Redirect } from '@/router/redirect';
import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarEstadisticasPorPreguntaParams {
    encuestaId: string
}

export class ListarEstadisticasPorPreguntaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarEstadisticasPorPreguntaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/estadisticas/listarEstadisticasXPreguntas`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "estadisticas": [
                        {
                            "numeroPregunta": 1,
                            "titulo": "NUEVA PREGUNTA",
                            "tipoPreguntaId": 5,
                            "alternativa1": "OPCION 1",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "OPCION 2",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "OPCION 3",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 2,
                            "titulo": "PREGUNTA 2",
                            "tipoPreguntaId": 5,
                            "alternativa1": "WW",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "MM",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "BB",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 3,
                            "titulo": "PREGUNTA 3",
                            "tipoPreguntaId": 6,
                            "alternativa1": "NUNCA",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "A VECES",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "CON FRECUENCIA",
                            "cantidadAlternativa3": 0,
                            "alternativa4": "CON MUCHA FRECUENCIA",
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 4,
                            "titulo": "PREGUNTA 4",
                            "tipoPreguntaId": 6,
                            "alternativa1": "NUNCA",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "A VECES",
                            "cantidadAlternativa2": 0,
                            "alternativa3": "CON FRECUENCIA",
                            "cantidadAlternativa3": 1,
                            "alternativa4": "CON MUCHA FRECUENCIA",
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 5,
                            "titulo": "PREGUNTA 6",
                            "tipoPreguntaId": 5,
                            "alternativa1": "TT",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "RR",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "EE",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 6,
                            "titulo": "PREGUNTA SECCION 2",
                            "tipoPreguntaId": 5,
                            "alternativa1": "EE",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "DD",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "TT",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 7,
                            "titulo": "PREGUNTA NUEVA 7",
                            "tipoPreguntaId": 5,
                            "alternativa1": "UNO",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "DOS",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "TRES",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 8,
                            "titulo": "PREGUNTA RANGO",
                            "tipoPreguntaId": 6,
                            "alternativa1": "NUNCA",
                            "cantidadAlternativa1": 1,
                            "alternativa2": "A VECES",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "CON FRECUENCIA",
                            "cantidadAlternativa3": 1,
                            "alternativa4": "CON MUCHA FRECUENCIA",
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 9,
                            "titulo": "PREGUNTA NUEVA SECCION 3",
                            "tipoPreguntaId": 5,
                            "alternativa1": "RR",
                            "cantidadAlternativa1": 1,
                            "alternativa2": "FF",
                            "cantidadAlternativa2": 0,
                            "alternativa3": "GG",
                            "cantidadAlternativa3": 2,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 10,
                            "titulo": "PREGUNTA SECCION 3",
                            "tipoPreguntaId": 5,
                            "alternativa1": "RR",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "TT",
                            "cantidadAlternativa2": 1,
                            "alternativa3": "YY",
                            "cantidadAlternativa3": 0,
                            "alternativa4": null,
                            "cantidadAlternativa4": 0
                        },
                        {
                            "numeroPregunta": 11,
                            "titulo": "PREGUNTA RANGO FINAL",
                            "tipoPreguntaId": 6,
                            "alternativa1": "NUNCA",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "A VECES",
                            "cantidadAlternativa2": 0,
                            "alternativa3": "CON FRECUENCIA",
                            "cantidadAlternativa3": 0,
                            "alternativa4": "CON MUCHA FRECUENCIA",
                            "cantidadAlternativa4": 1
                        },
                        {
                            "numeroPregunta": 12,
                            "titulo": "PREGUNTA RANGO ULTIMA",
                            "tipoPreguntaId": 6,
                            "alternativa1": "NUNCA",
                            "cantidadAlternativa1": 2,
                            "alternativa2": "A VECES",
                            "cantidadAlternativa2": 0,
                            "alternativa3": "CON FRECUENCIA",
                            "cantidadAlternativa3": 0,
                            "alternativa4": "CON MUCHA FRECUENCIA",
                            "cantidadAlternativa4": 1
                        }
                    ]
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