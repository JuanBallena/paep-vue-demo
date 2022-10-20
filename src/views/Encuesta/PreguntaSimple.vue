<template>
    <div>
        <div class="a-title--sm">
            {{ index }}. {{ pregunta.tituloPregunta }}
            <span class="a-icon" v-if="encuestaNoEstaCerrada">
                <i class="fas fa-pen" @click="openModal()"></i>
            </span>
            <span class="a-icon" v-if="encuestaNoEstaCerrada">
                <i class="fa fa-trash" @click="modalEliminarPreguntaSimpleIsVisible = true"></i>
            </span>
        </div>

        <div class="u-align-between">
            <label>Alternativas</label>
            <span class="a-chip a-chip--success">{{ pregunta.tipoPreguntaDescripcion }}</span>
        </div>

        <input type="text" class="a-text-field" :value="pregunta.alternativa1" readonly>
        <input type="text" class="a-text-field" :value="pregunta.alternativa2" readonly>
        <input type="text" class="a-text-field" :value="pregunta.alternativa3" readonly>

        <SimpleModal
            :isVisible="modalEditarPreguntaSimpleIsVisible"
            @closeModal="closeModal()"
        >
            <template #header>
                <div class="a-title--sm">Editar pregunta simple</div>
                <Alert v-if="errorEditarPregunta" :message="errorEditarPregunta" />
            </template>

            <template #body>
                <label>Título de la pregunta</label>
                <input type="text"
                    v-model="titulo"
                    class="a-text-field"
                    @keyup="errorEditarPregunta = ''"
                    placeholder="Escriba una pregunta">
                <br>
                <label>Alternativas</label>
                <input type="text"
                    v-model="alternativa1"
                    class="a-text-field"
                    @keyup="errorEditarPregunta = ''"
                    placeholder="Escriba primera alternativa">

                <input type="text"
                    v-model="alternativa2"
                    class="a-text-field"
                    @keyup="errorEditarPregunta = ''"
                    placeholder="Escriba segunda alternativa">

                <input type="text"
                    v-model="alternativa3"
                    class="a-text-field"
                    @keyup="errorEditarPregunta = ''"
                    placeholder="Escriba tercera alternativa">

                <div class="o-button-container u-align-end">
                    <button class="a-btn a-btn--default" @click="closeModal()">
                        Cerrar
                    </button>

                    <button type="button" 
                        :class="modificarButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                        :disabled="modificarButtonIsDisabled || buttonIsDisabled"
                        @click="editarPregunta()"
                    >
                        Modificar
                    </button>
                </div>
            </template>                      
        </SimpleModal>

        <ConfirmModal
            descripcion="¿Está seguro de eliminar esta pregunta?"
            :isVisible="modalEliminarPreguntaSimpleIsVisible"
            :confirmButtonIsDisabled="confirmButtonIsDisabled"
            @closeModal="modalEliminarPreguntaSimpleIsVisible = false"
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
import { EliminarPreguntaService } from '../../services/pregunta/EliminarPreguntaService';

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
        
        const modificarPregunta: ModificarPreguntaService = new ModificarPreguntaService();
        const eliminarPreguntaService: EliminarPreguntaService = new EliminarPreguntaService();
        const modalEditarPreguntaSimpleIsVisible: Ref<boolean> = ref(false);
        const modalEliminarPreguntaSimpleIsVisible: Ref<boolean> = ref(false);
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const modificarButtonIsDisabled: Ref<boolean> = ref(false);
        const confirmButtonIsDisabled: Ref<boolean> = ref(false);
        const errorEditarPregunta: Ref<string> = ref("");
        const titulo: Ref<string> = ref("");
        const alternativa1: Ref<string> = ref("");
        const alternativa2: Ref<string> = ref("");
        const alternativa3: Ref<string> = ref("");

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});
        const showErrorNotification = inject('showErrorNotification', (message: string) => {});

        const currentPage = inject('currentPage', ref(0));
        const preguntasPage1 = inject('preguntasPage1', ref([]));
        const preguntasPage2 = inject('preguntasPage2', ref([]));
        const preguntasPage3 = inject('preguntasPage3', ref([]));

        const buttonIsDisabled = computed(() => 
            titulo.value == "" || 
            alternativa1.value == "" || 
            alternativa2.value == "" || 
            alternativa3.value == ""
        );

        function openModal(): void
        {
            titulo.value = props.pregunta.tituloPregunta;
            alternativa1.value = props.pregunta.alternativa1;
            alternativa2.value = props.pregunta.alternativa2;
            alternativa3.value = props.pregunta.alternativa3;
            modalEditarPreguntaSimpleIsVisible.value = true;
        }

        function closeModal(): void
        {
            modalEditarPreguntaSimpleIsVisible.value = false;
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
                indicadorCritico: "0",
                alternativa1: alternativa1.value,
                alternativa2: alternativa2.value,
                alternativa3: alternativa3.value,
                psicologoModificadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await modificarPregunta.modificar(params);

            if (serviceResponse.exito())
            {
                modalEditarPreguntaSimpleIsVisible.value = false;
                reset();
                showSuccessNotification("Pregunta simple se modificó correctamente");
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
                    modalEliminarPreguntaSimpleIsVisible.value = false;
                    confirmButtonIsDisabled.value = false;
                    showErrorNotification("No se puede eliminar porque la página 2 tiene preguntas");
                    return;
                }
            }

            if (currentPage.value === 2)
            {
                if (preguntasPage2.value.length === 1 && preguntasPage3.value.length > 0)
                {
                    modalEliminarPreguntaSimpleIsVisible.value = false;
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
                modalEliminarPreguntaSimpleIsVisible.value = false;
                showSuccessNotification("Pregunta simple se eliminó correctamente");
                emit('successEliminarPregunta');
            }

            if (serviceResponse.errorResponse())
            {
                confirmButtonIsDisabled.value = false;
                modalEliminarPreguntaSimpleIsVisible.value = false;
                showErrorNotification(serviceResponse.responseMessage);
            }
        }

        return {
            modalEditarPreguntaSimpleIsVisible,
            openModal,
            closeModal,
            titulo,
            alternativa1,
            alternativa2,
            alternativa3,
            modificarButtonIsDisabled,
            editarPregunta,
            errorEditarPregunta,
            buttonIsDisabled,
            confirmButtonIsDisabled,
            modalEliminarPreguntaSimpleIsVisible,
            eliminarPregunta
        }
    },
})
</script>
