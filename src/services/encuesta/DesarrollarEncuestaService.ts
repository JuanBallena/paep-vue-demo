import axios from 'axios';
import { Api } from '../Api';
import { ServiceResponse } from '../ServiceResponse';
import { ErrorHandler } from '../ErrorHandler';

interface Pregunta {
    numeroPregunta: string,
    numeroAlternativa: string
}

interface DesarrollarEncuestaParams {
    encuestaIniciadaId : string,
    fechaHoraFin : string,
    preguntas: Pregunta[]
}

export class DesarrollarEncuestaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async desarrollar(params: DesarrollarEncuestaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/desarrollar`, params);
            // const data: any = response['data'];

            const data = {
                "data": null,
                "responseCode": 0
            }

            this.serviceResponse.data = data['data'];
            this.serviceResponse.responseCode = data['responseCode'];
            // this.serviceResponse.responseMessage = data['responseMessage'];

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