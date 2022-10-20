<template>
    <SimpleModal
        :isVisible="isVisible"
        @closeModal="closeModal()"
    >
        <template #header>
            <div class="a-title--sm">Compartir encuesta</div>
            <Alert v-if="errorCompartir" :message="errorCompartir" />
        </template>
        
        <template #body>

            <input type="text"
                v-model="textBuscar"
                class="a-text-field"
                placeholder="Buscar Psicólogos">
            
            <br v-if="!mensajeCompartir">

            <Alert 
                v-if="mensajeCompartir" 
                type="info" 
                :message="mensajeCompartir"
                clear
                @clear="removeSelected()"
            />

            <label>Psicólogos</label>

            <ul class="m-list" style="height: 150px;">
                <li class="m-list__item" 
                    v-for="(psicologo, index) in psicologosFilter" :key="index"
                    @click="selectedPsicologo(psicologo, index)"
                    >
                    <div class="m-list__prev-icon">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="m-list__text">
                        {{ psicologo.nombreUsuario}}
                        <br>
                        <span>{{ psicologo.usuario }}</span>
                    </div>
                    <div class="m-list__post-icon" v-if="psicologoSelectedNumber === index">
                        <i class="fas fa-check u-color-success"></i>
                    </div>
                </li>
            </ul>

            <div class="o-button-container u-align-end">
                <div>
                    <button class="a-btn a-btn--default" @click="closeModal()">
                        Cerrar
                    </button>
                </div>
                <div>
                    <button type="button" 
                        :class="continuarButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                        @click="compartirEncuesta()"
                        :disabled="continuarButtonIsDisabled || buttonIsDisabled"
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
import { ServiceResponse } from '@/services/ServiceResponse';
import { Usuario } from '@/types/Usuario';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { defineComponent, ref, Ref, inject, computed } from 'vue';
import { CompartirEncuestaService } from '../../services/encuesta/CompartirEncuestaService';

export default defineComponent({

    components: {
        SimpleModal,
        Alert
    },

    emits: ['closeModal','successCompartirEncuesta'],

    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        idEncuesta: {
            type: Number,
            default: 0
        },
        psicologos: {
            type: Array as () => Array<Usuario>,
            default: () => []
        }
    },

    setup(props, {emit}) {

        const compartirEncuestaService: CompartirEncuestaService = new CompartirEncuestaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const continuarButtonIsDisabled: Ref<boolean> = ref(false);
        const mensajeCompartir: Ref<string> = ref("");
        const textBuscar: Ref<string> = ref("");
        const errorCompartir: Ref<string> = ref("");

        const psicologos = inject('psicologos', ref([]));
        const psicologoACompartirId: Ref<number> = ref(0);
        const psicologoSelectedNumber: Ref<number> = ref(-1);

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const buttonIsDisabled = computed(() => psicologoACompartirId.value == 0);

        function closeModal(): void 
        {
            reset();
            emit('closeModal');
        }

        function reset(): void 
        {
            textBuscar.value = "";
            mensajeCompartir.value = "";
            errorCompartir.value = "";
            continuarButtonIsDisabled.value = false;
            psicologoACompartirId.value = 0;
            psicologoSelectedNumber.value = -1;
        }

        async function compartirEncuesta(): Promise<void>
        {
            continuarButtonIsDisabled.value = true;

            const params = {
                encuestaId: String(props.idEncuesta),
                psicologoACompartirId: String(psicologoACompartirId.value),
                psicologoCreadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await compartirEncuestaService.compartir(params);

            if (serviceResponse.exito()) 
            {
                reset();
                showSuccessNotification("Encuesta se compartió correctamente");
                emit('successCompartirEncuesta');
            }

            if (serviceResponse.errorResponse())
            {
                errorCompartir.value = serviceResponse.responseMessage;
                continuarButtonIsDisabled.value = false;
            }
        }

        function selectedPsicologo(psicologo: Usuario, position: number): void 
        {
            errorCompartir.value = "";
            mensajeCompartir.value = `Compartir con ${psicologo.nombreUsuario}`;
            psicologoACompartirId.value = psicologo.idUsuario;
            psicologoSelectedNumber.value = position; 
        }

        function removeSelected(): void
        {
            psicologoACompartirId.value = 0;
            psicologoSelectedNumber.value = -1;
            mensajeCompartir.value = "";
        }

        const psicologosFilter = computed(() => {

            if (textBuscar.value === "") {
                return psicologos.value;
            }
            return psicologos.value.filter((psicologo: Usuario) => 
                psicologo.nombreUsuario.includes(textBuscar.value.toUpperCase()) || 
                psicologo.usuario.includes(textBuscar.value.toUpperCase()));
        });

        return {
            closeModal,
            textBuscar,
            continuarButtonIsDisabled,
            compartirEncuesta,
            psicologosFilter,
            selectedPsicologo,
            mensajeCompartir,
            errorCompartir,
            buttonIsDisabled,
            psicologoSelectedNumber,
            removeSelected
        }
    },
})
</script>
