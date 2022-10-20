<template>
    <div>
        <Loading v-if="paginas == -1 || !successDataResultados" />
        <div class="o-resultados-container" v-else>
            <div class="a-title">Respuestas individuales</div>
            <div class="a-title--sm">{{ nombreEncuesta }}</div>
            <div class="u-align-end">
                <label class="u-margin-right-1">Respuestas totales: <b>{{ totalEncuestasCulminadas }}</b></label>
                <!-- <label>Descartada: <b>0</b></label> -->
            </div>
            <div class="a-divider"></div>
            <label>Resumen de resultados:</label>
            <table class="m-table-simple">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Guardadas</th>
                        <th>Edad</th>
                        <th>Género</th>
                        <th>Distrito</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(encuestaCulminada, index) in encuestasCulminadas" :key="index">
                        <td label="#">{{ encuestaCulminada.index }}</td>
                        <td label="Guardadas">{{ encuestaCulminada.getFechaHoraFin() }}</td>
                        <td label="Edad">{{ encuestaCulminada.edad }}</td>
                        <td label="Género">{{ encuestaCulminada.generoDescripcion }}</td>
                        <td label="Distrito">{{ encuestaCulminada.distrito }}</td>
                    </tr>
                </tbody>
            </table>

            <Paginator
                v-if="encuestasCulminadas.length > 0"
                :currentPage="currentPage"
                :pages="paginas"
                @onChangePage="onChangePage($event)"
                @prevPage="prevPage()"
                @nextPage="nextPage()"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue';
import Paginator from '@/components/Paginator.vue';
import { ServiceResponse } from '@/services/ServiceResponse';
import { useRoute } from 'vue-router';
import { defineComponent, inject, onMounted, Ref, ref } from 'vue'
import { EncuestaCulminada } from '../../types/EncuestaCulminada';
import { ListarEncuestaCulminadaService } from '@/services/estadisticas/ListarEncuestaCulminadaService';
// import { ValidatorVerEncuestaService } from '@/services/validator/ValidatorVerEncuestaService';
// import { UsuarioLogueado } from '@/types/UsuarioLogueado';
// import { Redirect } from '@/router/redirect';

export default defineComponent({

    components: {
        Loading,
        Paginator
    },

    setup() {

        const routeParam: Ref<string> = ref("");

        onMounted(async () => {

            routeParam.value = String(route.params.id);
            
            // const params = {
            //     encuestaId: routeParam.value,
            //     psicologoId: String(usuarioLogueado.usuarioId)
            // }

            // const isAutorizado = await validatorVerEncuestaService.validar(params);

            // if (!isAutorizado) {
            //     redirect.redirectToPrincipal(usuarioLogueado.rolId);
            //     return;
            // }
            
            await listarEncuestaCulminada()
        });

        const successDataResultados = inject('successDataResultados', ref(false));

        // const validatorVerEncuestaService: ValidatorVerEncuestaService = new ValidatorVerEncuestaService();
        // const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        // const redirect: Redirect = new Redirect();
        
        const route = useRoute();
        const listarEncuestaCulminadaService: ListarEncuestaCulminadaService = new ListarEncuestaCulminadaService();
        const encuestasCulminadas: Ref<EncuestaCulminada[]> = ref([]);

        const paginas : Ref<number> = ref(-1);
        const currentPage: Ref<number> = ref(1);
        const totalEncuestasCulminadas: Ref<number> = ref(0);
        const nombreEncuesta = inject('nombreEncuesta', ref(''));
        const $itemsPerPageEncuestasCulminadas = inject('$itemsPerPageEncuestasCulminadas', ref(10));

        async function listarEncuestaCulminada(): Promise<void>
        {
            const params = {
                encuestaId: routeParam.value,
                limit: String($itemsPerPageEncuestasCulminadas),
                pag: String(currentPage.value)
            }

            const serviceResponse: ServiceResponse = await listarEncuestaCulminadaService.listar(params);

            if (serviceResponse.exito())
            {
                encuestasCulminadas.value = [];

                const array: any[] = serviceResponse.data['encuestasCulminadas'];

                array.forEach((item: any, index: number) => {

                    const encuestaCulminada = new EncuestaCulminada();
                    encuestaCulminada.index = getIndice(index);
                    encuestaCulminada.encuestaId = item['encuestaId'];
                    encuestaCulminada.edad = item['edad'];
                    encuestaCulminada.estadoEncuestaIniciadaDescripcion = item['estadoEncuestaIniciadaDescripcion'];
                    encuestaCulminada.generoId = item['generoId'];
                    encuestaCulminada.generoDescripcion = item['generoDescripcion'];
                    encuestaCulminada.centroEducativo = item['centroEducativo'];
                    encuestaCulminada.distritoId = item['distritoId'];
                    encuestaCulminada.distrito = item['distrito'];
                    encuestaCulminada.fechaHoraInicio = item['fechaHoraInicio'];
                    encuestaCulminada.fechaHoraFin = item['fechaHoraFin'];
                    encuestaCulminada.estadoEncuestaIniciadaIdnumber = item['estadoEncuestaIniciadaIdnumber'];

                    encuestasCulminadas.value.push(encuestaCulminada);                    
                });

                paginas.value = serviceResponse.data['paginas'];
                totalEncuestasCulminadas.value = serviceResponse.data['totalEncuestasCulminadas'];
            }
        }

        function onChangePage(page: number): void 
        {
            currentPage.value = page;
            listarEncuestaCulminada();
        }

        function prevPage(): void 
        {
            currentPage.value--;
            listarEncuestaCulminada();
        }

        function nextPage(): void 
        {
            currentPage.value++;
            listarEncuestaCulminada();
        }

        function getIndice(index: number): number
        {
            return parseInt(String($itemsPerPageEncuestasCulminadas)) * ( currentPage.value - 1) + (index + 1);
        }

        return {
            encuestasCulminadas,
            paginas,
            onChangePage,
            prevPage,
            nextPage,
            currentPage,
            totalEncuestasCulminadas,
            nombreEncuesta,
            successDataResultados
        }
    },
})
</script>
