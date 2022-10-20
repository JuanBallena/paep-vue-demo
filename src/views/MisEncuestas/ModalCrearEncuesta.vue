<template>
    <div>
        <div class="m-box-encuesta--active u-align-center" @click="modalCrearEncuestaIsVisible = true">
            <div class="m-box-encuesta__text-crear-encuesta">
                <i class="fas fa-plus"></i> <br>
                Crear una encuesta 
            </div>
        </div>
        <SimpleModal
            :isVisible="modalCrearEncuestaIsVisible"
            @closeModal="closeModal()"
        >
            <template #header>
                <div class="a-title--sm">Empezar nueva encuesta</div>
                <Alert 
                    v-if="errorCrearEncuesta" 
                    :message="errorCrearEncuesta" 
                />
            </template>

            <template #body>
                <label>Nombre de encuesta</label>
                <input type="text"
                    v-model="nombreEncuesta"
                    class="a-text-field"
                    placeholder="Escriba un nombre"
                    @Keyup="errorCrearEncuesta = ''"
                    @keypress="charactersConstrainNombreEncuesta"    
                />

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
                            @click="crearEncuesta()"
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </template>
        </SimpleModal>
    </div>
</template>

<script lang="ts">
import SimpleModal from '@/components/SimpleModal.vue';
import Alert from '@/components/Alert.vue';
import { CrearEncuestaService } from '@/services/encuesta/CrearEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, inject, ref, Ref, watch } from 'vue';
import { Validator } from '@/types/Validator';

export default defineComponent({

    emits: ['successCrearEncuesta'],

    components: {
        SimpleModal,
        Alert
    },

    setup(props, { emit }) {

        watch(() => modalCrearEncuestaIsVisible, () => document.body.style.overflow = modalCrearEncuestaIsVisible? 'hidden': 'initial');
        
        const crearEncuestaService: CrearEncuestaService = new CrearEncuestaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const validator: Validator = new Validator();

        const modalCrearEncuestaIsVisible: Ref<boolean> = ref(false);
        const nombreEncuesta: Ref<string> = ref("");
        const continuarButtonIsDisabled: Ref<boolean> = ref(false);
        const errorCrearEncuesta: Ref<string> = ref("");
        // const nombreEncuestaRef = ref<HTMLElement | null>(null)

        const buttonIsDisabled = computed(() => nombreEncuesta.value == "");

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        function charactersConstrainNombreEncuesta(event: any): void
        {
            validator.charactersConstrainNombreEncuesta(event);
        }

        async function crearEncuesta(): Promise<void> 
        {
            continuarButtonIsDisabled.value = true;

            const params = {
                nombreEncuesta: nombreEncuesta.value,
                psicologoCreadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await crearEncuestaService.crear(params);

            if (serviceResponse.errorResponse()) 
            {
                errorCrearEncuesta.value = serviceResponse.responseMessage;
                continuarButtonIsDisabled.value = false;
            }

            if (serviceResponse.exito()) 
            {
                modalCrearEncuestaIsVisible.value = false;
                reset();
                showSuccessNotification("Encuesta se registró correctamente");
                emit('successCrearEncuesta');
            }
        }

        // function openModal(): void 
        // {
        //     modalCrearEncuestaIsVisible.value = true;

        //     if (nombreEncuestaRef.value) {
        //         nombreEncuestaRef.value.focus();
        //     }
        //     
        // }

        function closeModal(): void 
        {
            modalCrearEncuestaIsVisible.value = false;
            reset();
        }

        function reset(): void 
        {
            nombreEncuesta.value = "";
            errorCrearEncuesta.value = "";
            continuarButtonIsDisabled.value = false;
        }

        return {
            modalCrearEncuestaIsVisible,
            nombreEncuesta,
            continuarButtonIsDisabled,
            errorCrearEncuesta,
            closeModal,
            crearEncuesta,
            buttonIsDisabled,
            charactersConstrainNombreEncuesta
        }
    },
})
</script>
