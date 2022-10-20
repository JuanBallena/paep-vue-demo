import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ModificarUsuarioParams {
   idUsuario: string,
   nombres: string,
   paterno: string,
   materno: string,
   usuarioModificador: string
}

interface ModificarUsuarioConPasswordParams {
    idUsuario: string,
    password: string,
    confirmPassword: string,
    nombres: string,
    paterno: string,
    materno: string,
    usuarioModificador: string
 }

export class ModificarUsuarioService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async modificar(params: ModificarUsuarioParams | ModificarUsuarioConPasswordParams): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/usuario/modificar`, params, this.api.getAuthorization());
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