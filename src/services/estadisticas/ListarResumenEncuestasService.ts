import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarResumenEncuestasParams {
    encuestaId: string
}

export class ListarResumenEncuestasService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarResumenEncuestasParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/estadisticas/listarResumenCantidadesEncuestas`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "cantidadEncuestasCulminadas": 1,
                    "cantidadEncuestasTotales": 8
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