import { Api } from "../Api";
import axios from 'axios';
import { ServiceResponse } from '../ServiceResponse';
import { ErrorHandler } from "../ErrorHandler";

interface EliminarPreguntaParams {
    encuestaId: string, 
    numeroPregunta: string,
    psicologoEliminadorId: string
}

export class EliminarPreguntaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async eliminar(params: EliminarPreguntaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/preguntas/eliminar`, params, this.api.getAuthorization());
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