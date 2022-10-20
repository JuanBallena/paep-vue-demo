import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface validatorVerEncuestaParams {
    encuestaId: string,
    psicologoId: string
}

export class ValidatorVerEncuestaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async validar(params: validatorVerEncuestaParams): Promise<boolean> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/autorizadaXPsicologo`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "autorizado": true
                },
                "responseCode": 0,
                "responseMessage": "ÉXITO"
            }

            this.serviceResponse.data = data['data'];
            this.serviceResponse.responseCode = data['responseCode'];
            this.serviceResponse.responseMessage = data['responseMessage'];
            
            if (this.serviceResponse.exito())
            {
                return this.serviceResponse.data['autorizado'];
            }

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

        return false;
    }
}