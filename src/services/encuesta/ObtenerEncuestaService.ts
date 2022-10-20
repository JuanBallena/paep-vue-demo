import axios from 'axios';
import { Api } from '@/services/Api';
import { ServiceResponse } from '../ServiceResponse';
import { ErrorHandler } from '../ErrorHandler';

interface ObtenerEncuestaParams {
    idEncuesta: string,
    idPsicologo: string,
    limit: string,
    pag: string
}

interface ObtenerEncuestaPorNombreParams {
    nombreEncuesta: string,
    limit: string,
    pag: string
}

export class ObtenerEncuestaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async obtener(params: ObtenerEncuestaParams): Promise<ServiceResponse>
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/listar`, params);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "encuestas": [
                        {
                            "idEncuesta": 2,
                            "nombreEncuesta": "ENCUESTA 2",
                            "idPsicologo": 3,
                            "idEstadoEncuesta": 3,
                            "visitas": 0,
                            "usuarioPsicologo": "psicologo2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombrePsicologo": "MARCO JUAREZ SANTOS"
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

    public async obtenerParaEncuestado(params: ObtenerEncuestaPorNombreParams): Promise<ServiceResponse>
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/listar`, params);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "encuestas": [
                        {
                            "idEncuesta": 2,
                            "nombreEncuesta": "ENCUESTA 2",
                            "idPsicologo": 3,
                            "idEstadoEncuesta": 3,
                            "visitas": 0,
                            "usuarioPsicologo": "psicologo2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombrePsicologo": "MARCO JUAREZ SANTOS"
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