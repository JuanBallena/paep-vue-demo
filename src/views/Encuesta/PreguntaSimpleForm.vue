<template>
    <div>
        <Alert v-if="errorCrearPregunta" :message="errorCrearPregunta" />
        <label>Título de la pregunta</label>
        <input type="text"
            v-model="titulo"
            class="a-text-field"
            @Keyup="errorCrearPregunta = ''"
            placeholder="Escriba una pregunta">
        <br>
        <label>Alternativas</label>
        <input type="text"
            v-model="alternativa1"
            class="a-text-field"
            @Keyup="errorCrearPregunta = ''"
            placeholder="Escriba primera alternativa">

        <input type="text"
            v-model="alternativa2"
            class="a-text-field"
            @Keyup="errorCrearPregunta = ''"
            placeholder="Escriba segunda alternativa">

        <input type="text"
            v-model="alternativa3"
            class="a-text-field"
            @Keyup="errorCrearPregunta = ''"
            placeholder="Escriba tercera alternativa">

        <div class="o-button-container u-align-end">
            <button class="a-btn a-btn--default" @click="closeModal()">
                Cerrar
            </button>

            <button type="button" 
                :class="crearButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                :disabled="crearButtonIsDisabled || buttonIsDisabled"
                @click="crearPregunta()"
            >
                Guardar
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Alert from '@/components/Alert.vue';
import { computed, defineComponent, inject, onMounted, Ref, ref } from 'vue'
import { CrearPreguntaService } from '../../services/pregunta/CrearPreguntaService';
import * as TipoPregunta from '@/definition/TipoPregunta';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { useRoute } from 'vue-router';
import { ServiceResponse } from '@/services/ServiceResponse';

export default defineComponent({

    components: {
        Alert
    },

    emits: ['closeModal','successCrearPregunta'],

    setup(props, {emit}) {

        onMounted(() => routeParam.value = String(route.params.id));
        
        const route = useRoute();
        const crearPreguntaService: CrearPreguntaService = new CrearPreguntaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const crearButtonIsDisabled: Ref<boolean> = ref(false);
        const errorCrearPregunta: Ref<string> = ref("");
        const titulo: Ref<string> = ref("");
        const alternativa1: Ref<string> = ref("");
        const alternativa2: Ref<string> = ref("");
        const alternativa3: Ref<string> = ref("");
        const currentPage: Ref<number> = inject('currentPage', ref(0));

        const routeParam: Ref<string> = ref("");

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const buttonIsDisabled = computed(() => titulo.value == "" || alternativa1.value == "" || alternativa2.value == "" || alternativa3.value == "");

        async function crearPregunta(): Promise<void> 
        {
            crearButtonIsDisabled.value = true;

            const params = {
                encuestaId: routeParam.value,
                pagina: String(currentPage.value),
                tipoPreguntaId: String(TipoPregunta.SIMPLE),
                titulo: titulo.value,
                indicadorCritico: "0",
                alternativa1: alternativa1.value,
                alternativa2: alternativa2.value,
                alternativa3: alternativa3.value,
                psicologoCreadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await crearPreguntaService.crear(params);

            if (serviceResponse.exito()) {
                reset();
                showSuccessNotification("Pregunta simple se registró correctamente");
                emit('successCrearPregunta');
            }

            if (serviceResponse.errorResponse()) {
                crearButtonIsDisabled.value = false;
                errorCrearPregunta.value = serviceResponse.responseMessage;
            }
        }

        function reset(): void {
            crearButtonIsDisabled.value = false;
            titulo.value = "";
            alternativa1.value = "";
            alternativa2.value = "";
            alternativa3.value = "";
        }

        function closeModal(): void {
            reset();
            emit('closeModal');
        }

        return {
            titulo,
            alternativa1,
            alternativa2,
            alternativa3,
            crearPregunta,
            closeModal,
            crearButtonIsDisabled,
            errorCrearPregunta,
            buttonIsDisabled
        }
    },
})
</script>
