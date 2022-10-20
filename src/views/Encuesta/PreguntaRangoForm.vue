<template>
    <div>
        <Alert v-if="errorCrearPregunta" :message="errorCrearPregunta" />
        <label>Título de la pregunta</label>
        <input type="text"
            v-model="titulo"
            class="a-text-field"
            @keyup="errorCrearPregunta = ''"
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
import * as TipoPregunta from '@/definition/TipoPregunta';
import Alert from '@/components/Alert.vue';
import { computed, defineComponent, inject, onMounted, Ref, ref } from 'vue'
import { CrearPreguntaService } from '../../services/pregunta/CrearPreguntaService';
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
        const indicadorCritico: Ref<number> = ref(0);
        const alternativa1: Ref<string> = ref("NUNCA");
        const alternativa2: Ref<string> = ref("A VECES");
        const alternativa3: Ref<string> = ref("CON FRECUENCIA");
        const alternativa4: Ref<string> = ref("CON MUCHA FRECUENCIA");
        const currentPage: Ref<number> = inject('currentPage', ref(0));
        const checkboxPreguntaCritica: Ref<boolean> = ref(false);

        const routeParam: Ref<string> = ref("");

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const buttonIsDisabled = computed(() => titulo.value == "");

        async function crearPregunta(): Promise<void> 
        {
            crearButtonIsDisabled.value = true;

            const params = {
                encuestaId: routeParam.value,
                pagina: String(currentPage.value),
                indicadorCritico: String(indicadorCritico.value),
                tipoPreguntaId: String(TipoPregunta.RANGO),
                titulo: titulo.value,
                psicologoCreadorId: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await crearPreguntaService.crear(params);

            if (serviceResponse.exito()) {
                reset();
                showSuccessNotification("Pregunta de rango se registró correctamente");
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

        function onChangeCheckbox(): void 
        {
            checkboxPreguntaCritica.value = !checkboxPreguntaCritica.value;
            indicadorCritico.value = checkboxPreguntaCritica.value ? 1 : 0;
        }

        return {
            titulo,
            alternativa1,
            alternativa2,
            alternativa3,
            alternativa4,
            crearPregunta,
            closeModal,
            crearButtonIsDisabled,
            errorCrearPregunta,
            buttonIsDisabled,
            checkboxPreguntaCritica,
            onChangeCheckbox
        }
    },
})
</script>