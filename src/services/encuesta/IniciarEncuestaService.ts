import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface IniciarEncuestaParams {
    encuestaId: string,
    encuestado: string,
    edad: string,
    centroEducativo: string,
    generoId: string,
    distritoId: string,
    fechaHoraInicio: string
}

export class IniciarEncuestaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async iniciar(params: IniciarEncuestaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/iniciar`, params);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "encuestaIniciadaId": 2
                },
                "responseCode": 0,
                "responseMessage": 'null'
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