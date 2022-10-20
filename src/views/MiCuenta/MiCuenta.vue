<template>
    <div class="o-mi-cuenta-container">
        <div class="a-title">Mi cuenta</div>

        <div class="g-mi-cuenta">
            <div class="g-mi-cuenta__perfil">
                <div class="m-card">
                    <div class="m-card__body">
                        <div class="a-user-profile">
                            <div>
                                <i class="fa fa-user-circle"></i>
                                <label>{{ usuario }}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-mi-cuenta__cuenta">
                <div class="m-card">
                    <div class="m-card__header">
                        <div class="a-title--sm">Mi Perfil</div>
                        <br>

                        <label>Nombre</label>
                        <input type="text" class="a-text-field u-bg-color-accent" :value="nombreCompleto" readonly>
                        <br>

                        <label>Usuario</label>
                        <input type="text" class="a-text-field u-bg-color-accent" :value="usuario" readonly>
                        <br>

                        <label>Rol</label>
                        <input type="text" class="a-text-field u-bg-color-accent" :value="rolDescripcion" readonly>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';

export default defineComponent({
    setup() {
        
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

        return {
            nombreCompleto: usuarioLogueado.nombreCompleto,
            usuario: usuarioLogueado.usuario,
            rolDescripcion: usuarioLogueado.rolDescripcion
        }
    },
})
</script>
