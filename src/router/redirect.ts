import router from './index';
import * as Rol from '@/definition/Rol';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';

export class Redirect {

    public redirectToPrincipal(rolId: number): void
    {
        switch (rolId) {
            case Rol.ADMINISTRADOR:
                router.push({ name: 'Usuarios' });
                break;
            case Rol.PSICOLOGO:
                router.push({ name: 'MisEncuestas' });
                break;
            default:
                break;
        }
    }
}