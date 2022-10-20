<template>
    <div>
        <span class="a-icon">
            <i class="fa fa-trash" @click="modalEliminarUsuarioIsVisible = true"></i>
        </span>
        <ConfirmModal
            descripcion="¿Está seguro de eliminar este usuario?"
            :isVisible="modalEliminarUsuarioIsVisible"
            :confirmButtonIsDisabled="continuarButtonIsDisabled"
            @closeModal="closeModal()"
            @confirmar="eliminarUsuario()"
        />
    </div>
</template>

<script lang="ts">
import ConfirmModal from '@/components/ConfirmModal.vue';

import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { defineComponent, inject, ref, Ref } from 'vue';
import { EliminarUsuarioService } from '../../services/usuario/EliminarUsuarioService';

export default defineComponent({

    components: {
        ConfirmModal
    },

    props: {
        idUsuario: {
            type: Number,
            default: 0
        },
    },

    emits: ['closeModal','successEliminarUsuario'],

    setup(props, {emit}) {
        
        const eliminarUsuarioService: EliminarUsuarioService = new EliminarUsuarioService();
        const modalEliminarUsuarioIsVisible: Ref<boolean> = ref(false);
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const continuarButtonIsDisabled: Ref<boolean> = ref(false);

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});
        const showErrorNotification = inject('showErrorNotification', (message: string) => {});

        async function eliminarUsuario(): Promise<void> 
        {
            continuarButtonIsDisabled.value = true;

            const params = {
                usuarioEliminarId: String(props.idUsuario),
                usuarioEliminadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await eliminarUsuarioService.eliminar(params);

            if (serviceResponse.exito()) 
            {
                reset();
                modalEliminarUsuarioIsVisible.value = false;
                showSuccessNotification("Usuario se eliminó correctamente");
                emit('successEliminarUsuario');
            }

            if (serviceResponse.errorResponse()) 
            {
                continuarButtonIsDisabled.value = false;
                modalEliminarUsuarioIsVisible.value = false;
                showErrorNotification(serviceResponse.responseMessage);
            }
        }

        function reset(): void
        {
            continuarButtonIsDisabled.value = false;
        }

        function closeModal(): void
        {
            modalEliminarUsuarioIsVisible.value = false;
        }

        return {
            modalEliminarUsuarioIsVisible,
            continuarButtonIsDisabled,
            eliminarUsuario,
            closeModal
        }
    },
})
</script>
