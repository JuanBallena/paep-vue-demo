<template>
    <div>
        <div class="a-title--sm">
            {{ index }}. {{ pregunta.tituloPregunta }}
            <span class="a-icon" v-if="encuestaNoEstaCerrada">
                <i class="fas fa-pen" @click="openModal()"></i>
            </span>
            <span class="a-icon" v-if="encuestaNoEstaCerrada">
                <i class="fa fa-trash" @click="modalEliminarPreguntaRangoIsVisible = true"></i>
            </span>
        </div>

        <div class="u-align-between">
            <label>Alternativas</label>
            <div>
                <span class="a-chip a-chip--primary">{{ pregunta.tipoPreguntaDescripcion }}</span>
                <span v-if="pregunta.indicadorCritico == 1" class="a-chip a-chip--danger">
                    CRITICA
                </span>
            </div>
        </div>

        <input type="text" class="a-text-field" :value="pregunta.alternativa1" readonly>
        <input type="text" class="a-text-field" :value="pregunta.alternativa2" readonly>
        <input type="text" class="a-text-field" :value="pregunta.alternativa3" readonly>
        <input type="text" class="a-text-field" :value="pregunta.alternativa4" readonly>

        <SimpleModal
            :isVisible="modalEditarPreguntaRangoIsVisible"
            @closeModal="closeModal()"
        >
            <template #header>
                <div class="a-title--sm">Editar pregunta rango</div>
                <Alert v-if="errorEditarPregunta" :message="errorEditarPregunta" />
            </template>

            <template #body>
                <label>Título de la pregunta</label>
                <input type="text"
                    v-model="titulo"
                    class="a-text-field"
                    @keyup="errorEditarPregunta = ''"
                    placeholder="Escriba una pregunta">
                
                <div class="a-checkbox">
                    <div class="a-checkbox__icon">
                        <i @click="onChangeCheckbox()"
                            :class="checkboxPreguntaCritica 
                            ? 'far fa-check-square' 
                            : 'far fa-square'"
                        ></i>
                    </div>
                    <div class="a-checkbox__text" @click="onChangeCheckbox()">
                        Pregunta crítica
                    </div>
                </div>

                <label>Alternativas (por defecto)</label>
                <input type="text"
                    v-model="alternativa1"
                    class="a-text-field u-bg-color-accent u-color-muted"
                    placeholder="Escriba primera alternativa"
                    readonly>

                <input type="text"
                    v-model="alternativa2"
                    class="a-text-field u-bg-color-accent u-color-muted"
                    placeholder="Escriba segunda alternativa"
                    readonly>

                <input type="text"
                    v-model="alternativa3"
                    class="a-text-field u-bg-color-accent u-color-muted"
                    placeholder="Escriba tercera alternativa"
                    readonly>

                <input type="text"
                    v-model="alternativa4"
                    class="a-text-field u-bg-color-accent u-color-muted"
                    placeholder="Escriba cuarta alternativa"
                    readonly>

                <div class="o-button-container u-align-end">
                    <button class="a-btn a-btn--default" @click="closeModal()">
                        Cerrar
                    </button>

                    <button type="button" 
                        :class="modificarButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                        :disabled="modificarButtonIsDisabled || buttonIsDisabled"
                        @click="editarPregunta()"
                    >
                        Guardar
                    </button>
                </div>
            </template>                      
        </SimpleModal>

        <ConfirmModal
            descripcion="¿Está seguro de eliminar esta pregunta?"
            :isVisible="modalEliminarPreguntaRangoIsVisible"
            :confirmButtonIsDisabled="confirmButtonIsDisabled"
            @closeModal="modalEliminarPreguntaRangoIsVisible = false"
            @confirmar="eliminarPregunta()"
        />
    </div>
</template>

<script lang="ts">
import SimpleModal from '@/components/SimpleModal.vue';
import Alert from '@/components/Alert.vue';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { ModificarPreguntaService } from '@/services/pregunta/ModificarPreguntaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { Pregunta } from '@/types/Pregunta';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, inject, ref, Ref } from 'vue';
import { EliminarPreguntaService } from '@/services/pregunta/EliminarPreguntaService';

export default defineComponent({

    components: {
        SimpleModal,
        Alert,
        ConfirmModal
    },

    props: {
        pregunta: {
            type: Pregunta,
            default: {}
        },
        index: {
            type: Number,
            default: 0,
        },
        encuestaNoEstaCerrada: {
            type: Boolean,
            default: true
        }
    },

    emits: ['successEditarPregunta','successEliminarPregunta'],

    setup(props, {emit}) {
        
        const eliminarPreguntaService: EliminarPreguntaService = new EliminarPreguntaService();
        const modificarPregunta: ModificarPreguntaService = new ModificarPreguntaService();
        const modalEditarPreguntaRangoIsVisible: Ref<boolean> = ref(false);
        const modalEliminarPreguntaRangoIsVisible: Ref<boolean> = ref(false);
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const modificarButtonIsDisabled: Ref<boolean> = ref(false);
        const confirmButtonIsDisabled: Ref<boolean> = ref(false);
        const errorEditarPregunta: Ref<string> = ref("");
        const titulo: Ref<string> = ref("");
        const indicadorCritico: Ref<number> = ref(0);
        const alternativa1: Ref<string> = ref("NUNCA");
        const alternativa2: Ref<string> = ref("A VECES");
        const alternativa3: Ref<string> = ref("CON FRECUENCIA");
        const alternativa4: Ref<string> = ref("CON MUCHA FRECUENCIA");

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});
        const showErrorNotification = inject('showErrorNotification', (message: string) => {});

        const currentPage = inject('currentPage', ref(0));
        const preguntasPage1 = inject('preguntasPage1', ref([]));
        const preguntasPage2 = inject('preguntasPage2', ref([]));
        const preguntasPage3 = inject('preguntasPage3', ref([]));
        const checkboxPreguntaCritica: Ref<boolean> = ref(false);

        const buttonIsDisabled = computed(() => titulo.value == "");

        function openModal(): void
        {
            titulo.value = props.pregunta.tituloPregunta;
            indicadorCritico.value = props.pregunta.indicadorCritico;
            checkboxPreguntaCritica.value = props.pregunta.indicadorCritico === 0 ? false : true;
            modalEditarPreguntaRangoIsVisible.value = true;
        }

        function closeModal(): void
        {
            modalEditarPreguntaRangoIsVisible.value = false;
            reset();
        }

        async function editarPregunta(): Promise<void>
        {
            modificarButtonIsDisabled.value = true;

            const params = {
                encuestaId: String(props.pregunta.idEncuesta),
                tipoPreguntaId: String(props.pregunta.tipoPreguntaId),
                numeroPregunta: String(props.pregunta.numeroPregunta),
                titulo: titulo.value,
                indicadorCritico: String(indicadorCritico.value),
                psicologoModificadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await modificarPregunta.modificar(params);

            if (serviceResponse.exito())
            {
                modalEditarPreguntaRangoIsVisible.value = false;
                reset();
                showSuccessNotification("Pregunta de rango se modificó correctamente");
                emit('successEditarPregunta');
            }

            if (serviceResponse.errorResponse())
            {
                errorEditarPregunta.value = serviceResponse.responseMessage;
                modificarButtonIsDisabled.value = false;
            }
        }

        function reset(): void
        {
            modificarButtonIsDisabled.value = false;
            errorEditarPregunta.value = "";
        }

        async function eliminarPregunta(): Promise<void>
        {
            confirmButtonIsDisabled.value = true;

             if (currentPage.value === 1)
            {
                if (preguntasPage1.value.length === 1 && preguntasPage2.value.length > 0)
                {
                    modalEliminarPreguntaRangoIsVisible.value = false;
                    confirmButtonIsDisabled.value = false;
                    showErrorNotification("No se puede eliminar porque la página 2 tiene preguntas");
                    return;
                }
            }

            if (currentPage.value === 2)
            {
                if (preguntasPage2.value.length === 1 && preguntasPage3.value.length > 0)
                {
                    modalEliminarPreguntaRangoIsVisible.value = false;
                    confirmButtonIsDisabled.value = false;
                    showErrorNotification("No se puede eliminar porque la página 3 tiene preguntas");
                    return;
                }
            }

            const params = {
                encuestaId: String(props.pregunta.idEncuesta), 
                numeroPregunta: String(props.pregunta.numeroPregunta),
                psicologoEliminadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await eliminarPreguntaService.eliminar(params);

            if (serviceResponse.exito())
            {
                confirmButtonIsDisabled.value = false;
                modalEliminarPreguntaRangoIsVisible.value = false;
                showSuccessNotification("Pregunta de rango se eliminó correctamente");
                emit('successEliminarPregunta');
            }

            if (serviceResponse.errorResponse())
            {
                confirmButtonIsDisabled.value = false;
                modalEliminarPreguntaRangoIsVisible.value = false;
                showErrorNotification(serviceResponse.responseMessage);
            }
        }

        function onChangeCheckbox(): void 
        {
            checkboxPreguntaCritica.value = !checkboxPreguntaCritica.value;
            indicadorCritico.value = checkboxPreguntaCritica.value ? 1 : 0;
        }

        return {
            modalEditarPreguntaRangoIsVisible,
            openModal,
            closeModal,
            titulo,
            alternativa1,
            alternativa2,
            alternativa3,
            alternativa4,
            modificarButtonIsDisabled,
            editarPregunta,
            errorEditarPregunta,
            buttonIsDisabled,
            modalEliminarPreguntaRangoIsVisible,
            confirmButtonIsDisabled,
            eliminarPregunta,
            indicadorCritico,
            onChangeCheckbox,
            checkboxPreguntaCritica
        }
    },
})
</script>