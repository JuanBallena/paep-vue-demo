import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarEncuestaCulminadaParams {
    encuestaId: string,
    limit : string,
    pag : string
}

export class ListarEncuestaCulminadaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarEncuestaCulminadaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/estadisticas/listarEncuestasCulminadas`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "encuestasCulminadas": [
                        {
                            "encuestaId": 70,
                            "edad": 23,
                            "generoId": 7,
                            "generoDescripcion": "MASCULINO",
                            "centroEducativo": 0,
                            "distritoId": 18,
                            "distrito": "Magdalena del Mar",
                            "fechaHoraInicio": "2021-04-21T04:04:40.000Z",
                            "fechaHoraFin": "2021-04-21T04:26:55.000Z",
                            "estadoEncuestaIniciadaId": 10,
                            "estadoEncuestaIniciadaDescripcion": "CULMINADA"
                        },
                        {
                            "encuestaId": 70,
                            "edad": 22,
                            "generoId": 7,
                            "generoDescripcion": "MASCULINO",
                            "centroEducativo": 0,
                            "distritoId": 17,
                            "distrito": "Santiago de Surco",
                            "fechaHoraInicio": "2021-04-21T04:04:40.000Z",
                            "fechaHoraFin": "2021-04-21T04:26:55.000Z",
                            "estadoEncuestaIniciadaId": 10,
                            "estadoEncuestaIniciadaDescripcion": "CULMINADA"
                        },
                        {
                            "encuestaId": 70,
                            "edad": 25,
                            "generoId": 8,
                            "generoDescripcion": "FEMENINO",
                            "centroEducativo": 0,
                            "distritoId": 19,
                            "distrito": "Magdalena del Mar",
                            "fechaHoraInicio": "2021-04-21T04:04:40.000Z",
                            "fechaHoraFin": "2021-04-21T04:26:55.000Z",
                            "estadoEncuestaIniciadaId": 10,
                            "estadoEncuestaIniciadaDescripcion": "CULMINADA"
                        }
                    ],
                    "totalEncuestasCulminadas": 3,
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