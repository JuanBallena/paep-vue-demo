<template>
    <SimpleModal
        :isVisible="isVisible"
        @closeModal="closeModal()"
    >
        <template #header>
            <div class="a-title--sm">Duplicar encuesta</div>
            <Alert v-if="errorDuplicarEncuesta" :message="errorDuplicarEncuesta" />
        </template>
        
        <template #body>
            <label>Nuevo nombre de encuesta</label>
            <input type="text"
                v-model="nuevoNombre"
                class="a-text-field"
                @keyup="errorDuplicarEncuesta = ''"
                placeholder="Escriba un nuevo nombre">

            <div class="o-button-container u-align-end">
                <div>
                    <button class="a-btn a-btn--default" @click="closeModal()">
                        Cerrar
                    </button>
                </div>
                <div>
                    <button type="button" 
                        :class="continuarButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                        :disabled="continuarButtonIsDisabled || buttonIsDisabled"
                        @click="duplicarEncuesta()"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </template>
    </SimpleModal>
</template>

<script lang="ts">
import SimpleModal from '@/components/SimpleModal.vue';
import Alert from '@/components/Alert.vue';
import { DuplicarEncuestaService } from '@/services/encuesta/DuplicarEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, inject, Ref, ref } from 'vue';

export default defineComponent({

    components: {
        SimpleModal,
        Alert
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

    emits: ['closeModal','successDuplicarEncuesta'],

    setup(props, {emit}) {
        
        const duplicarEncuestaService: DuplicarEncuestaService = new DuplicarEncuestaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

        const errorDuplicarEncuesta: Ref<string> = ref("");
        const nuevoNombre: Ref<string> = ref("");
        const continuarButtonIsDisabled: Ref<boolean> = ref(false);
        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const buttonIsDisabled = computed(() => nuevoNombre.value == "");

        async function duplicarEncuesta(): Promise<void> {

            continuarButtonIsDisabled.value = true;

            const params = {
                encuestaId: String(props.idEncuesta),
                nuevoNombre: nuevoNombre.value,
                psicologoCreadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await duplicarEncuestaService.duplicar(params);

            if (serviceResponse.exito()) 
            {
                showSuccessNotification("Encuesta se duplicó correctamente");
                emit('successDuplicarEncuesta');
                reset();
            }

            if (serviceResponse.errorResponse()) 
            {
                errorDuplicarEncuesta.value = serviceResponse.responseMessage;
                continuarButtonIsDisabled.value = false;
            }
        }

        function reset(): void 
        {
            nuevoNombre.value = "";
            errorDuplicarEncuesta.value = "";
            continuarButtonIsDisabled.value = false;
        }

        function closeModal() 
        {
            reset();
            emit('closeModal');
        }

        return {
            nuevoNombre,
            continuarButtonIsDisabled,
            errorDuplicarEncuesta,
            closeModal,
            duplicarEncuesta,
            buttonIsDisabled
        }
    },
})
</script>
