import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface CrearPreguntaSimpleParams {
    encuestaId: string,
    pagina: string,
    tipoPreguntaId: string,
    indicadorCritico:string,
    titulo: string,
    alternativa1: string,
    alternativa2: string,
    alternativa3: string,
    psicologoCreadorId: string
}

interface CrearPreguntaRangoParams {
    encuestaId: string,
    pagina: string,
    tipoPreguntaId: string,
    indicadorCritico:string,
    titulo: string,
    psicologoCreadorId: string
}

export class CrearPreguntaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async crear(params: CrearPreguntaSimpleParams | CrearPreguntaRangoParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/preguntas/crear`, params, this.api.getAuthorization());
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