<template>
    <div>
        <Loading v-if="paginas == -1" :message="messageLoading" />
        <div class="o-hacer-encuesta-container" v-else>
            <div class="a-title a-title--center">{{ encuesta.nombreEncuesta }}</div>
            <div class="a-divider"></div>
            <br>

            <template v-if="preguntas.length === 0">
                <div class="a-box-no-data">
                    <p>Esta encuesta aún no tiene preguntas</p>
                </div>
            </template>
            <template v-if="currentPage === 1">
                <PreguntaSimple
                    v-for="(pregunta, index) in preguntasSimplePage1"
                    :key="index"
                    :pregunta="pregunta"
                />
                <TablePreguntaRango
                    v-if="preguntasRangoPage1.length > 0"
                    :preguntas="preguntasRangoPage1"
                    @pressPreguntaCritica="modalMessageIsVisible = true"
                />
                <br>
                <div class="u-align-end">
                    <button v-if="preguntasSimplePage2.length > 0 || preguntasRangoPage2.length > 0"
                        type="button"
                        :class="pagina1PorFinalizar ? 'a-btn a-btn--muted-primary' : 'a-btn a-btn--primary'"
                        :disabled="pagina1PorFinalizar"
                        @click="changePage(2)"   
                    >
                        Página siguiente
                    </button>
                    <button v-else
                        type="button" 
                        :class="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar ? 'a-btn a-btn--muted': 'a-btn a-btn--success'"
                        :disabled="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar"
                        @click="desarrollarEncuesta()"
                    >
                        Guardar encuesta
                    </button>
                </div>

            </template>

            <template v-if="currentPage === 2">
                <PreguntaSimple
                    v-for="(pregunta, index) in preguntasSimplePage2" 
                    :key="index"
                    :pregunta="pregunta"
                />
                <TablePreguntaRango
                    v-if="preguntasRangoPage2.length > 0"
                    :preguntas="preguntasRangoPage2"
                    @pressPreguntaCritica="modalMessageIsVisible = true"
                />
                <br>
                <div class="u-align-end">
                    <div v-if="preguntasSimplePage3.length > 0 || preguntasRangoPage3.length > 0"
                        class="o-button-group">
                        <button
                            type="button"
                            class="a-btn a-btn--primary"
                            @click="changePage(1)"   
                        >
                            Página anterior
                        </button>
                        <button
                            type="button"
                            :class="pagina2PorFinalizar ? 'a-btn a-btn--muted-primary' : 'a-btn a-btn--primary'"
                            :disabled="pagina2PorFinalizar"
                            @click="changePage(3)"   
                        >
                            Página siguiente
                        </button>
                    </div>

                    <div class="o-button-group" v-else>
                        <button
                            type="button"
                            class="a-btn a-btn--primary"
                            @click="changePage(1)"   
                        >
                            Página anterior
                        </button>
                        <button
                            type="button" 
                            :class="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar ? 'a-btn a-btn--muted': 'a-btn a-btn--success'"
                            :disabled="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar"
                            @click="desarrollarEncuesta()"
                        >
                            Guardar encuesta
                        </button>
                    </div>
                </div>
            </template>

            <template v-if="currentPage === 3">
                <PreguntaSimple
                    v-for="(pregunta, index) in preguntasSimplePage3"
                    :key="index"
                    :pregunta="pregunta"
                />

                <TablePreguntaRango
                    v-if="preguntasRangoPage3.length > 0"
                    :preguntas="preguntasRangoPage3"
                    @pressPreguntaCritica="modalMessageIsVisible = true"
                />
                <br>
                <div class="u-align-end">
                    <div class="o-button-group">
                        <button
                            type="button"
                            class="a-btn a-btn--primary"
                            @click="changePage(2)"   
                        >
                            Página anterior
                        </button>
                        
                        <button
                            type="button" 
                            :class="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar ? 'a-btn a-btn--muted': 'a-btn a-btn--success'"
                            :disabled="buttonGuardarEncuestaIsDisabled || encuestaPorFinalizar"
                            @click="desarrollarEncuesta()"
                        >
                            Guardar encuesta
                        </button>
                    </div>
                </div>
            </template>

            <SimpleModal
                :isVisible="modalMessageIsVisible"
                @closeModal="modalMessageIsVisible = false"
            >
                <template #body>
                    <div class="m-card-pregunta-critica">
                        <div class="m-card-pregunta-critica__title">
                            Queremos cuidarte, usa estos <br> servicios, son para ti y son gratuitos
                        </div>
                        <!-- <br> -->
                        <ul class="m-card-pregunta-critica__list">
                            <li>Centro emergencia mujer (CEM)</li>
                            <li>Línea 100</li>
                            <li>Servicio de atención urgente</li>
                        </ul>
                    </div>
                </template>
            </SimpleModal>
        </div>
    </div>
</template>

<script lang="ts">
import PreguntaSimple from './PreguntaSimple.vue';
import TablePreguntaRango from './TablePreguntaRango.vue';
import SimpleModal from '@/components/SimpleModal.vue';
import Loading from '@/components/Loading.vue';
import { useRoute, useRouter } from 'vue-router';
import { computed, defineComponent, onMounted, Ref, ref } from 'vue'
import { ServiceResponse } from '@/services/ServiceResponse';
import { ObtenerEncuestaService } from '@/services/encuesta/ObtenerEncuestaService';
import { Encuesta } from '@/types/Encuesta';
import { Pregunta } from '@/types/Pregunta';
import { ListarPreguntaService } from '@/services/pregunta/ListarPreguntaService';
import * as TipoPregunta from '@/definition/TipoPregunta';
import { DesarrollarEncuestaService } from '../../services/encuesta/DesarrollarEncuestaService';
import { Datetime } from '@/types/Datetime';
import { PreguntaPost } from '../../types/PreguntaPost';

export default defineComponent({

    components: {
        PreguntaSimple,
        TablePreguntaRango,
        Loading,
        SimpleModal
    },

    setup() {

        onMounted(async () => {
            nombreEncuesta.value = String(route.params.nombreEncuesta);
            await obtenerEncuesta();
            await listarPreguntas();
        });

        const route = useRoute();
        const router = useRouter();
        const nombreEncuesta: Ref<string> = ref("");
        const obtenerEncuestaService: ObtenerEncuestaService = new ObtenerEncuestaService();
        const listarPreguntaService: ListarPreguntaService = new ListarPreguntaService();
        const desarrollarEncuestService: DesarrollarEncuestaService = new DesarrollarEncuestaService();
        const datetime: Datetime = new Datetime();
    
        const messageLoading: Ref<string> = ref("Cargando...");
        const encuesta: Ref<any> = ref({});
        const preguntas: Ref<Pregunta[]> = ref([]);
        const paginas: Ref<number> = ref(-1);
        const preguntasPost: Ref<PreguntaPost[]> = ref([]);
        const preguntasSimplePage1: Ref<Pregunta[]> = ref([]);
        const preguntasSimplePage2: Ref<Pregunta[]> = ref([]);
        const preguntasSimplePage3: Ref<Pregunta[]> = ref([]);
        const preguntasRangoPage1: Ref<Pregunta[]> = ref([]);
        const preguntasRangoPage2: Ref<Pregunta[]> = ref([]);
        const preguntasRangoPage3: Ref<Pregunta[]> = ref([]);
        const currentPage: Ref<number> = ref(0);

        const preguntasSimplePage1PorFinalizar = computed(() => preguntasSimplePage1.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));
        const preguntasRangoPage1PorFinalizar = computed(() => preguntasRangoPage1.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));
        const preguntasSimplePage2PorFinalizar = computed(() => preguntasSimplePage2.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));
        const preguntasRangoPage2PorFinalizar = computed(() => preguntasRangoPage2.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));
        const preguntasSimplePage3PorFinalizar = computed(() => preguntasSimplePage3.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));
        const preguntasRangoPage3PorFinalizar = computed(() => preguntasRangoPage3.value.map((pregunta: Pregunta) => pregunta.numeroAlternativa > 0).includes(false));

        const buttonGuardarEncuestaIsDisabled: Ref<boolean> = ref(false);

        const modalMessageIsVisible: Ref<boolean> = ref(false);

        const encuestaPorFinalizar = computed(() => 
            preguntasSimplePage1PorFinalizar.value || 
            preguntasRangoPage1PorFinalizar.value ||
            preguntasSimplePage2PorFinalizar.value ||
            preguntasRangoPage2PorFinalizar.value ||
            preguntasSimplePage3PorFinalizar.value ||
            preguntasRangoPage3PorFinalizar.value
        );

        const pagina1PorFinalizar = computed(() => preguntasSimplePage1PorFinalizar.value || preguntasRangoPage1PorFinalizar.value);

        const pagina2PorFinalizar = computed(() => preguntasSimplePage2PorFinalizar.value || preguntasRangoPage2PorFinalizar.value);

        async function obtenerEncuesta(): Promise<void>
        {
            const nombreEncuestaReplace = nombreEncuesta.value.split('-').join(' ').toUpperCase();

            const params = {
                nombreEncuesta: nombreEncuestaReplace,
                limit : "1",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await obtenerEncuestaService.obtenerParaEncuestado(params);

            if (serviceResponse.exito()) 
            {
                const item: any = serviceResponse.data['encuestas'][0];

                const encuestaResponse = new Encuesta();
                encuestaResponse.idEncuesta = item['idEncuesta'];
                encuestaResponse.nombreEncuesta = item['nombreEncuesta'];
                encuesta.value = encuestaResponse;
            }
        }

        async function listarPreguntas(): Promise<void>
        {
            const params = {
                idEncuesta : String(encuesta.value.idEncuesta),
                limit : "100",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await listarPreguntaService.listarParaEncuestado(params);

            if (serviceResponse.exito())
            {
                preguntas.value = [];

                const array: any[] = serviceResponse.data['preguntas'];

                array.forEach((item: any) => {

                    const pregunta = new Pregunta();
                    pregunta.idEncuesta = item['idEncuesta'];
                    pregunta.numeroPregunta = item['numeroPregunta'];
                    pregunta.tipoPreguntaId = item['tipoPreguntaId'];
                    pregunta.tipoPreguntaDescripcion = item['tipoPreguntaDescripcion'];
                    pregunta.tituloPregunta = item['tituloPregunta'];
                    pregunta.indicadorCritico = item['indicadorCritico'];
                    pregunta.pagina = item['pagina'];
                    pregunta.alternativa1 = item['alternativa1'];
                    pregunta.alternativa2 = item['alternativa2'];
                    pregunta.alternativa3 = item['alternativa3'];
                    pregunta.alternativa4 = item['alternativa4'];

                    preguntas.value.push(pregunta); 
                });

                paginas.value = serviceResponse.data['paginas'];
                
                currentPage.value = preguntas.value.length > 0 ? 1 : 0;
                assignPreguntasToPage();
            }            
        }

        function assignPreguntasToPage(): void 
        {
            preguntasSimplePage1.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 1 && pregunta.tipoPreguntaId === TipoPregunta.SIMPLE);
            preguntasSimplePage2.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 2 && pregunta.tipoPreguntaId === TipoPregunta.SIMPLE);
            preguntasSimplePage3.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 3 && pregunta.tipoPreguntaId === TipoPregunta.SIMPLE);
            preguntasRangoPage1.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 1 && pregunta.tipoPreguntaId === TipoPregunta.RANGO);
            preguntasRangoPage2.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 2 && pregunta.tipoPreguntaId === TipoPregunta.RANGO);
            preguntasRangoPage3.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 3 && pregunta.tipoPreguntaId === TipoPregunta.RANGO);
        }

        async function desarrollarEncuesta(): Promise<void>
        {
            buttonGuardarEncuestaIsDisabled.value = true;

            setPreguntasPost(preguntasSimplePage1.value);
            setPreguntasPost(preguntasSimplePage2.value);
            setPreguntasPost(preguntasSimplePage3.value);
            setPreguntasPost(preguntasRangoPage1.value);
            setPreguntasPost(preguntasRangoPage2.value);
            setPreguntasPost(preguntasRangoPage3.value);

            const preguntas: any[] = [];

            preguntasPost.value.forEach((preguntaPost: PreguntaPost) => {
                 const item = {
                    numeroPregunta: preguntaPost.numeroPregunta,
                    numeroAlternativa: preguntaPost.numeroAlternativa
                }

                preguntas.push(item);
            })

            const params = {
                encuestaIniciadaId: String(localStorage.getItem('encuestaIniciadaId')),
                fechaHoraFin : datetime.getFechaActual() + ' ' + datetime.getHoraActual(),
                preguntas: preguntas
            }
            
            const serviceResponse: ServiceResponse = await desarrollarEncuestService.desarrollar(params);

            if (serviceResponse.exito()) 
            {
                localStorage.removeItem('encuestaIniciadaId');
                messageLoading.value = "Guardando encuesta..."
                paginas.value = -1;

                setTimeout(() => {
                    router.push({ name: 'CulminarEncuesta' });
                }, 2000);
            }

            if (serviceResponse.errorResponse())
            {
                buttonGuardarEncuestaIsDisabled.value = false;
            }
        }

        function setPreguntasPost(preguntasEncuesta: Pregunta[]): void
        {
            preguntasEncuesta.forEach((pregunta: Pregunta) => {

                const preguntaPost = new PreguntaPost();
                preguntaPost.numeroPregunta = String(pregunta.numeroPregunta);
                preguntaPost.numeroAlternativa = String(pregunta.numeroAlternativa);
                
                preguntasPost.value.push(preguntaPost);
            });
        }

        function changePage(page: number): void
        {
            const paginasCopia = paginas.value;
            paginas.value = -1;

            setTimeout(() => {
                currentPage.value = page
                paginas.value = paginasCopia;
            }, 500);
        }

        return {
            encuesta,
            paginas,
            currentPage,
            preguntas,
            preguntasSimplePage1,
            preguntasSimplePage2,
            preguntasSimplePage3,
            preguntasRangoPage1,
            preguntasRangoPage2,
            preguntasRangoPage3,
            desarrollarEncuesta,
            changePage,
            preguntasSimplePage1PorFinalizar,
            preguntasRangoPage1PorFinalizar,
            preguntasSimplePage2PorFinalizar,
            preguntasRangoPage2PorFinalizar,
            preguntasSimplePage3PorFinalizar,
            preguntasRangoPage3PorFinalizar,
            encuestaPorFinalizar,
            buttonGuardarEncuestaIsDisabled,
            pagina1PorFinalizar,
            pagina2PorFinalizar,
            modalMessageIsVisible,
            messageLoading
        }
    },
})
</script>
