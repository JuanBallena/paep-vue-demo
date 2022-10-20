import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarEstadisticasCriticasAgrupadasParams {
    encuestaId : string,
    groupBy : string
}

export class ListarEstadisticasCriticasAgrupadasService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarEstadisticasCriticasAgrupadasParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/estadisticas/listarEstadisticasCriticasAgrupadas`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "estadisticas": [
                        {
                            "encuestaId": 70,
                            "distritoId": 35,
                            "distritoNombre": "Lurín",
                            "alternativa3": 2,
                            "alternativa4": 2
                        },
                        {
                            "encuestaId": 70,
                            "distritoId": 18,
                            "distritoNombre": "Magdalena del Mar",
                            "alternativa3": 2,
                            "alternativa4": 2
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