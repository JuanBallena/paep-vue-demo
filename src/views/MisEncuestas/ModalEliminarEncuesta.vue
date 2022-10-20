<template>
    <ConfirmModal
        descripcion="¿Está seguro de eliminar esta encuesta?"
        :isVisible="isVisible"
        :confirmButtonIsDisabled="continuarButtonIsDisabled"
        @closeModal="$emit('closeModal')"
        @confirmar="eliminarEncuesta()"
    />
</template>

<script lang="ts">
import ConfirmModal from '@/components/ConfirmModal.vue';
import { EliminarEncuestaService } from '@/services/encuesta/EliminarEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { defineComponent, inject, ref, Ref } from 'vue';

export default defineComponent({

    components: {
        ConfirmModal
    },

    props: {
        idEncuesta: {
            type: Number,
            default: 0
        },
        isVisible: {
            type: Boolean,
            default: false
        }
    },

    emits: ['closeModal','successEliminarEncuesta','errorEliminarEncuesta'],

    setup(props, {emit}) {
        
        const eliminarEncuestaService: EliminarEncuestaService = new EliminarEncuestaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const continuarButtonIsDisabled: Ref<boolean> = ref(false);

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});
        const showErrorNotification = inject('showErrorNotification', (message: string) => {});

        async function eliminarEncuesta(): Promise<void> 
        {
            continuarButtonIsDisabled.value = true;

            const params = {
                encuestaId: String(props.idEncuesta),
                psicologoEliminadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await eliminarEncuestaService.eliminar(params);

            if (serviceResponse.exito()) 
            {
                continuarButtonIsDisabled.value = false;
                showSuccessNotification("Encuesta se eliminó correctamente")
                emit('successEliminarEncuesta');
            }

            if (serviceResponse.errorResponse()) 
            {
                continuarButtonIsDisabled.value = false;
                showErrorNotification(serviceResponse.responseMessage);
                emit('errorEliminarEncuesta');
            }
        }

        return {
            continuarButtonIsDisabled,
            eliminarEncuesta
        }
    },
})
</script>
