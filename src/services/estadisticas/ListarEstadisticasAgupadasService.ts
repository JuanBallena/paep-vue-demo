import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarEstadisticasAgrupadasParams {
    encuestaId : string,
    groupBy : string
}

export class ListarEstadisticasAgrupadasService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarEstadisticasAgrupadasParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/estadisticas/listarEstadisticasAgrupadas`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "estadisticas": [
                        {
                            "idEncuesta": 70,
                            "distritoId": 35,
                            "distritoNombre": "Lurín",
                            "cantidad": 2
                        },
                        {
                            "idEncuesta": 70,
                            "distritoId": 18,
                            "distritoNombre": "Magdalena del Mar",
                            "cantidad": 1
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