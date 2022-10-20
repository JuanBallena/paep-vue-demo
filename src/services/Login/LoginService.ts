import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface LoginParams {
    usuario: string
    password: string
}

export class LoginService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async login(params: LoginParams): Promise<ServiceResponse> 
    {
        try {
            //const response: any = await axios.post(this.api.getBaseUrl() + `/usuario/validar`, params);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "usuarioLogueado": {
                        "usuarioId": 1,
                        "usuario": "admin",
                        "rolId": 2,
                        "nombres": "ADMINISTRADOR",
                        "paterno": null,
                        "materno": null,
                        "nombreCompleto": "ADMINISTRADOR  ",
                        "rolDescripcion": "ADMINISTRADOR"
                    },
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbElkIjoxLCJpYXQiOjE2MTk2NjkzMjQsImV4cCI6MTYxOTY2OTMyNX0.oX8vHt3xmyxuFTjKz-ueB8SePpS7Ok0rpdvxjIJ-V08"
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