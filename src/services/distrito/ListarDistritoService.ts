import axios from 'axios';
import { Api } from '../Api';
import { ErrorHandler } from '../ErrorHandler';
import { ServiceResponse } from '../ServiceResponse';

export class ListarDistritoService {

    private api: Api = new Api();
    private serviceResponse: ServiceResponse = new ServiceResponse();
    private errorHandler: ErrorHandler = new ErrorHandler();

    public async listar(): Promise<ServiceResponse> 
    {
        try {
            // const response: any = await axios.post(this.api.getBaseUrl() + `/distritos/listar`);
            // const data: any = response['data'];

            const data = {
                "data": {
                    "distritos": [
                        {
                            "idDistrito": 1,
                            "nombre": "Ancón"
                        },
                        {
                            "idDistrito": 30,
                            "nombre": "Ate"
                        },
                        {
                            "idDistrito": 25,
                            "nombre": "Barranco"
                        },
                        {
                            "idDistrito": 12,
                            "nombre": "Breña"
                        },
                        {
                            "idDistrito": 3,
                            "nombre": "Callao"
                        },
                        {
                            "idDistrito": 4,
                            "nombre": "Carabayllo"
                        },
                        {
                            "idDistrito": 28,
                            "nombre": "Chorrillos"
                        },
                        {
                            "idDistrito": 8,
                            "nombre": "Comas"
                        },
                        {
                            "idDistrito": 14,
                            "nombre": "El Agustino"
                        },
                        {
                            "idDistrito": 9,
                            "nombre": "Independencia"
                        },
                        {
                            "idDistrito": 17,
                            "nombre": "Jesús María"
                        },
                        {
                            "idDistrito": 31,
                            "nombre": "La Molina"
                        },
                        {
                            "idDistrito": 20,
                            "nombre": "La Victoria"
                        },
                        {
                            "idDistrito": 11,
                            "nombre": "Lima"
                        },
                        {
                            "idDistrito": 19,
                            "nombre": "Lince"
                        },
                        {
                            "idDistrito": 7,
                            "nombre": "Los Olivos"
                        },
                        {
                            "idDistrito": 35,
                            "nombre": "Lurín"
                        },
                        {
                            "idDistrito": 18,
                            "nombre": "Magdalena del Mar"
                        },
                        {
                            "idDistrito": 23,
                            "nombre": "Miraflores"
                        },
                        {
                            "idDistrito": 16,
                            "nombre": "Pueblo Libre"
                        },
                        {
                            "idDistrito": 5,
                            "nombre": "Puente Piedra"
                        },
                        {
                            "idDistrito": 13,
                            "nombre": "Rímac"
                        },
                        {
                            "idDistrito": 26,
                            "nombre": "San Borja"
                        },
                        {
                            "idDistrito": 22,
                            "nombre": "San Isidro"
                        },
                        {
                            "idDistrito": 10,
                            "nombre": "San Juan de Lurigancho"
                        },
                        {
                            "idDistrito": 32,
                            "nombre": "San Juan de Miraflores"
                        },
                        {
                            "idDistrito": 21,
                            "nombre": "San Luis"
                        },
                        {
                            "idDistrito": 6,
                            "nombre": "San Martin de Porres"
                        },
                        {
                            "idDistrito": 15,
                            "nombre": "San Miguel"
                        },
                        {
                            "idDistrito": 29,
                            "nombre": "Santa Anita"
                        },
                        {
                            "idDistrito": 27,
                            "nombre": "Santiago de Surco"
                        },
                        {
                            "idDistrito": 24,
                            "nombre": "Surquillo"
                        },
                        {
                            "idDistrito": 2,
                            "nombre": "Ventanilla"
                        },
                        {
                            "idDistrito": 34,
                            "nombre": "Villa El Salvador"
                        },
                        {
                            "idDistrito": 33,
                            "nombre": "Villa María del Triunfo"
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