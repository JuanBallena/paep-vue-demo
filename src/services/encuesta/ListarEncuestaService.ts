import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarEncuestaParams {
    idPsicologo: string,
    limit: string,
    pag: string
}

export class ListarEncuestaService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarEncuestaParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/encuestas/listar`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "encuestas": [
                        {
                            "idEncuesta": 2,
                            "nombreEncuesta": "ENCUESTA 1",
                            "idPsicologo": 1,
                            "idEstadoEncuesta": 3,
                            "visitas": 21,
                            "usuarioPsicologo": "psicologo2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombrePsicologo": "MARCO JUAREZ SANTOS"
                        },
                        {
                            "idEncuesta": 3,
                            "nombreEncuesta": "ENCUESTA 2",
                            "idPsicologo": 1,
                            "idEstadoEncuesta": 3,
                            "visitas": 35,
                            "usuarioPsicologo": "psicologo2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombrePsicologo": "MARCO JUAREZ SANTOS"
                        },
                        {
                            "idEncuesta": 4,
                            "nombreEncuesta": "ENCUESTA 3",
                            "idPsicologo": 1,
                            "idEstadoEncuesta": 3,
                            "visitas": 2,
                            "usuarioPsicologo": "psicologo2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombrePsicologo": "MARCO JUAREZ SANTOS"
                        },
                        {
                            "idEncuesta": 5,
                            "nombreEncuesta": "ENCUESTA 4",
                            "idPsicologo": 1,
                            "idEstadoEncuesta": 4,
                            "visitas": 70,
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