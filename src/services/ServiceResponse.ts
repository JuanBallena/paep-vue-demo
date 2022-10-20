import * as ResponseCode from '@/definition/ResponseCode';
import { useRouter } from 'vue-router';

export class ServiceResponse {

    private router = useRouter();

    public data: any = null;
    public responseCode: number = -999;
    public responseMessage: string = "";

    public exito(): boolean 
    {
        if (this.errorGeneral())
        {
            this.router.push({ name: 'ErrorGeneral' });
            return false;
        }

        return this.responseCode === ResponseCode.EXITO;
    }

    public errorGeneral(): boolean 
    {
        return this.responseCode === ResponseCode.ERROR_GENERAL;
    }

    public errorResponse(): boolean
    {
        return this.responseCode !== ResponseCode.EXITO;
    }
}