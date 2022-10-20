<template>
<div>
    <Loading v-if="paginasEncuesta == -1" />
    <div class="g-dashboard" v-else>
        
        <div class="g-dashboard__sidebar">
            <div class="a-title--sm u-color-success">
                Páginas de encuesta
            </div>
            <ul class="m-menu">
                <li v-for="pagina in paginasEncuesta" :key="pagina">
                    <a @click="onChangePage(pagina)" 
                        :class="activePage(pagina) ? 'a-link-menu--active' : '' ">
                        <i class="fas fa-file-alt"></i> Página {{ pagina }}
                    </a>
                </li>
            </ul>
            <template v-if="encuesta.encuestaNoEstaCerrada()">
                <div
                    v-if="anadirPaginaIsVisible"
                    class="a-text-action" 
                    @click="paginasEncuesta++"
                >
                    <i class="fa fa-plus"></i> Añadir página
                </div>
            </template>
        </div>
        <div class="g-dashboard__main">
            <Loading v-if="!successPreguntas" />
            <div class="o-encuesta-container" v-else>
                <div class="a-title a-title--center">{{ encuesta.nombreEncuesta }}</div>
                <div class="a-divider"></div>
                <br>

                <template v-for="(pregunta, index) in preguntasPage" :key="index">
                    <PreguntaSimple 
                        v-if="pregunta.esTipoSimple()"
                        :index="numeroPreguntaTemporal + index" 
                        :pregunta="pregunta"
                        :encuestaNoEstaCerrada="encuesta.encuestaNoEstaCerrada()"
                        @successEditarPregunta="listarPreguntas()"
                        @successEliminarPregunta="postEliminarPregunta()"
                    />

                    <PreguntaRango 
                        v-if="pregunta.esTipoRango()"
                        :index="numeroPreguntaTemporal + index"  
                        :pregunta="pregunta"
                        :encuestaNoEstaCerrada="encuesta.encuestaNoEstaCerrada()"
                        @successEditarPregunta="listarPreguntas()"
                        @successEliminarPregunta="postEliminarPregunta()"
                    />
                    <br>
                </template>

                <ModalCrearPregunta
                    v-if="encuesta.encuestaNoEstaCerrada()"
                    @successCrearPregunta="listarPreguntas()"
                />
            </div>
        </div>
    </div>
</div>
</template>


<script lang="ts">
import Loading from '@/components/Loading.vue';
import PreguntaSimple from '@/views/Encuesta/PreguntaSimple.vue';
import PreguntaRango from '@/views/Encuesta/PreguntaRango.vue';
import ModalCrearPregunta from './ModalCrearPregunta.vue';
import { computed, defineComponent, onMounted, provide, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UsuarioLogueado } from '../../types/UsuarioLogueado';
import { ObtenerEncuestaService } from '@/services/encuesta/ObtenerEncuestaService';
import { Pregunta } from '@/types/Pregunta';
import { ListarPreguntaService } from '../../services/pregunta/ListarPreguntaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { Encuesta } from '@/types/Encuesta';
import { ValidatorVerEncuestaService } from '../../services/validator/ValidatorVerEncuestaService';
import { Redirect } from '@/router/redirect';

export default defineComponent({

    components: {
        Loading,
        ModalCrearPregunta,
        PreguntaSimple,
        PreguntaRango,
    },

    setup() {

        const redirect: Redirect = new Redirect();
        const validatorVerEncuestaService: ValidatorVerEncuestaService = new ValidatorVerEncuestaService();
        
        const route = useRoute();
        const obtenerEncuestaService: ObtenerEncuestaService = new ObtenerEncuestaService();
        const listarPreguntaService: ListarPreguntaService = new ListarPreguntaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const numeroPreguntaTemporal: Ref<number> = ref(1);
        const encuesta: Ref<any> = ref({});

        const preguntas: Ref<Pregunta[]> = ref([]);
        const preguntasPage: Ref<Pregunta[]> = ref([]);
        const preguntasPage1: Ref<Pregunta[]> = ref([]);
        const preguntasPage2: Ref<Pregunta[]> = ref([]);
        const preguntasPage3: Ref<Pregunta[]> = ref([]);
        const paginasEncuesta: Ref<number> = ref(-1);
        const currentPage: Ref<number> = ref(1);
        const successPreguntas: Ref<boolean> = ref(false);

        provide('currentPage', currentPage);

        provide('preguntasPage1', preguntasPage1);
        provide('preguntasPage2', preguntasPage2);
        provide('preguntasPage3', preguntasPage3);

        const routeParam: Ref<string> = ref("");

        onMounted(async () =>  {

            routeParam.value = String(route.params.id);

            const params = {
                encuestaId: String(route.params.id),
                psicologoId: String(usuarioLogueado.usuarioId)
            }

            const isAutorizado: boolean = await validatorVerEncuestaService.validar(params);

            if (!isAutorizado) {
                redirect.redirectToPrincipal(usuarioLogueado.rolId);
                return;
            }

            await obtenerEncuesta();
            await listarPreguntas();
        });

        async function obtenerEncuesta(): Promise<void>
        {
            const params = {
                idEncuesta: routeParam.value,
                idPsicologo : String(usuarioLogueado.usuarioId),
                limit : "1",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await obtenerEncuestaService.obtener(params);

            if (serviceResponse.exito()) 
            {
                const item: any = serviceResponse.data['encuestas'][0];

                const encuestaResponse = new Encuesta();
                encuestaResponse.idEncuesta = item['idEncuesta'];
                encuestaResponse.idEstadoEncuesta = item['idEstadoEncuesta'];
                encuestaResponse.idPsicologo = item['idPsicologo'];
                encuestaResponse.idRol = item['idRol'];
                encuestaResponse.nombreEncuesta = item['nombreEncuesta'];
                encuestaResponse.nombrePsicologo = item['nombrePsicologo'];
                encuestaResponse.rolDescripcion = item['rolDescripcion'];
                encuestaResponse.visitas = item['visitas'];
            
                encuesta.value = encuestaResponse;

                const nombreEncuesta = encuesta.value.nombreEncuesta.split(' ').join('-').toLowerCase();
                
                if (usuarioLogueado.idEncuesta === 0) {
                    usuarioLogueado.setIdEncuesta(encuesta.value.idEncuesta);
                    usuarioLogueado.setNombreEncuesta(nombreEncuesta);
                }
            }
        }

        async function listarPreguntas(): Promise<void>
        {
            const params = {
                idEncuesta : routeParam.value,
                limit : "100",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await listarPreguntaService.listar(params);        

            if (serviceResponse.exito())
            {
                preguntas.value = [];

                const array: any[] = serviceResponse.data['preguntas'];
                var pagina1: number = 0;
                var pagina2: number = 0;
                var pagina3: number = 0;
                var paginasEncuestaResponse: number = 0;

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

                    if (item['pagina'] == 1) pagina1++;
                    if (item['pagina'] == 2) pagina2++;
                    if (item['pagina'] == 3) pagina3++;
                    
                });

                if (pagina1 > 0) paginasEncuestaResponse++;
                if (pagina2 > 0) paginasEncuestaResponse++;
                if (pagina3 > 0) paginasEncuestaResponse++;
                
                paginasEncuesta.value = paginasEncuestaResponse === 0 ? 1 : paginasEncuestaResponse;
                assignPreguntasToPage();
                filterPreguntas(currentPage.value);
            }    
            
            successPreguntas.value = true;
        }

        function assignPreguntasToPage(): void 
        {
            preguntasPage1.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 1);
            preguntasPage2.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 2);
            preguntasPage3.value = preguntas.value.filter((pregunta: Pregunta) => pregunta.pagina === 3);
        }

        function filterPreguntas(page: number): void
        {
            if (page === 1) {
                preguntasPage.value = preguntasPage1.value;
                numeroPreguntaTemporal.value = 1;
            }
            if (page === 2) {
                preguntasPage.value = preguntasPage2.value;
                numeroPreguntaTemporal.value = preguntasPage1.value.length + 1;
            }
            if (page === 3) {
                preguntasPage.value = preguntasPage3.value;
                numeroPreguntaTemporal.value = preguntasPage1.value.length + preguntasPage2.value.length + 1;
            }
        }

        function onChangePage(page: number): void 
        {
            if (page == currentPage.value) {
                return;
            }

            if (page == 1 && preguntasPage1.value.length == 0) {
                currentPage.value = page;
                filterPreguntas(page);
                return;
            }

            if (page == 2 && preguntasPage2.value.length == 0) {
                currentPage.value = page;
                filterPreguntas(page);
                return;
            }

            if (page == 3 && preguntasPage3.value.length == 0) {
                currentPage.value = page;
                filterPreguntas(page);
                return;
            }

            successPreguntas.value = false;

            currentPage.value = page;
            filterPreguntas(page);

            setTimeout(() => {
                successPreguntas.value = true;
            }, 500);
            
        }

        function activePage(page: number): boolean 
        {
            return currentPage.value == page;
        }

        async function postEliminarPregunta(): Promise<void> {

            if (currentPage.value === 3)
            {
                if ((preguntasPage3.value.length - 1) == 0)
                {
                    currentPage.value = 2;
                }
                await listarPreguntas();
                return;
            }

            if (currentPage.value === 2)
            {
                if ((preguntasPage2.value.length - 1) == 0)
                {
                    currentPage.value = 1;
                }
                await listarPreguntas();
                return;
            }

            await listarPreguntas();
        }

        const anadirPaginaIsVisible = computed(() => {
            if (currentPage.value === 1)
            {
                return preguntasPage1.value.length > 0 && paginasEncuesta.value === 1 || preguntasPage2.value.length > 0 && paginasEncuesta.value === 2;
            }

            if (currentPage.value === 2)
            {
                return preguntasPage2.value.length > 0 && paginasEncuesta.value === 2;
            }

            return false;
        });

        return {
            encuesta,
            preguntasPage,
            paginasEncuesta,
            onChangePage,
            activePage,
            listarPreguntas,
            anadirPaginaIsVisible,
            numeroPreguntaTemporal,
            successPreguntas,
            postEliminarPregunta
        }
    },
})
</script>
