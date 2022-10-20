import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

interface ListarPsicologoParams {
    idRol: string,
    pag: string,
    limit: string
}

export class ListarPsicologoService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(params: ListarPsicologoParams): Promise<ServiceResponse> 
    {
        try {
            
            // const response: any = await axios.post(this.api.getBaseUrl() + `/usuario/listar`, params, this.api.getAuthorization());
            // const data: any = response['data'];

            const data = {
                "data": {
                    "usuarios": [
                        {
                            "idUsuario": 1,
                            "usuario": "ADMIN",
                            "idRol": 1,
                            "rolDescripcion": "ADMINISTRADOR",
                            "nombres": "ADMINISTRADOR",
                            "paterno": null,
                            "materno": null,
                            "nombreUsuario": "ADMINISTRADOR  "
                        },
                        {
                            "idUsuario": 2,
                            "usuario": "PSICOLOGO",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "JUAN",
                            "paterno": "BALLENA",
                            "materno": "UCEDA",
                            "nombreUsuario": "JUAN BALLENA UCEDA"
                        },
                        {
                            "idUsuario": 3,
                            "usuario": "PSICOLOGO2",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "MARCO",
                            "paterno": "JUAREZ",
                            "materno": "SANTOS",
                            "nombreUsuario": "MARCO JUAREZ SANTOS"
                        },
                        {
                            "idUsuario": 4,
                            "usuario": "PSICOLOGO3",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "JORGE",
                            "paterno": "MESIAS",
                            "materno": "SANCHEZ",
                            "nombreUsuario": "JORGE MESIAS SANCHEZ"
                        },
                        {
                            "idUsuario": 5,
                            "usuario": "RICK",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "CHRISTHIAN",
                            "paterno": "SANDOVAL",
                            "materno": "CHAUCA",
                            "nombreUsuario": "CHRISTHIAN SANDOVAL CHAUCA"
                        },
                        {
                            "idUsuario": 12,
                            "usuario": "ISA",
                            "idRol": 1,
                            "rolDescripcion": "ADMINISTRADOR",
                            "nombres": "ISABEL",
                            "paterno": "FRANCO",
                            "materno": "SALINAS",
                            "nombreUsuario": "ISABEL FRANCO SALINAS"
                        },
                        {
                            "idUsuario": 14,
                            "usuario": "JOE",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "JOE",
                            "paterno": "SANCHEZ",
                            "materno": "ALBARRÁN",
                            "nombreUsuario": "JOE SANCHEZ ALBARRÁN"
                        },
                        {
                            "idUsuario": 15,
                            "usuario": "GUSTAVO",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "GUSTAVO",
                            "paterno": "ROBLES",
                            "materno": "SIFUENTES",
                            "nombreUsuario": "GUSTAVO ROBLES SIFUENTES"
                        },
                        {
                            "idUsuario": 16,
                            "usuario": "TEO",
                            "idRol": 2,
                            "rolDescripcion": "PSICOLOGO",
                            "nombres": "TEO",
                            "paterno": "GAMARRA",
                            "materno": "GAMARRA",
                            "nombreUsuario": "TEO GAMARRA GAMARRA"
                        }
                    ],
                    "totalUsuarios": 9,
                    "paginas": 1
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