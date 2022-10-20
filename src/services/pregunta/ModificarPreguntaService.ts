import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ModificarPreguntaSimpleParams {
    encuestaId: string,
    tipoPreguntaId: string,
    numeroPregunta: string,
    titulo: string,
    indicadorCritico:string,
    alternativa1: string,
    alternativa2: string,
    alternativa3: string,
    psicologoModificadorId: string
}

interface ModificarPreguntaRangoParams {
    encuestaId: string,
    tipoPreguntaId: string,
    numeroPregunta: string,
    titulo: string,
    indicadorCritico:string,
    psicologoModificadorId: string
}

export class ModificarPreguntaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async modificar(params: ModificarPreguntaSimpleParams | ModificarPreguntaRangoParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/preguntas/modificar`, params, this.api.getAuthorization());
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