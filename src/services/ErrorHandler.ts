import { UsuarioLogueado } from "@/types/UsuarioLogueado";
import router from '@/router/index';
import { inject } from 'vue';

export class ErrorHandler {

    private usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
    private showModal = inject('showModal', (message: string) => {});

    public handlerErrorRequest(): void
    {
        //this.showModal('Ocurrió un error inesperado, vuelva a intentarlo más tarde');
    }

    public handlerErrorResponse(statusCode: number): void
    {
        if (statusCode === 403)
        {
            this.showModal('Su sesión en el sistema ha expirado');
            this.usuarioLogueado.logout();
            router.push({ name: 'Home' });
        }
    }
}