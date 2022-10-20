import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { inject } from 'vue';

export class Api {
    
    public baseUrl: string = "";
    public usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

    constructor() {

      this.baseUrl = inject('$baseUrlApi', "");
    }
    
    public getBaseUrl(): string 
    {
        return this.baseUrl;
    }

    public getAuthorization(): any
    {
        const token: string = this.usuarioLogueado.token;
        const config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        return config;
    }
}