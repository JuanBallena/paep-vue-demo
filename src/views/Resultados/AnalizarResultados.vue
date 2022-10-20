<template>
    <div>
        <Loading v-if="!successData || !successDataResultados" />
        <div class="o-resultados-container" v-else>
            <div class="a-title">Analizar resultados</div>
            <div class="a-title--sm">{{ nombreEncuesta }}</div>
            <div class="u-align-end">
                <label class="u-margin-right-1">Respuestas totales: <b>{{ cantidadEncuestasCulminadas }}</b></label>
            </div>
            
            <div class="a-divider"></div>

            <div class="g-analizar-resultados">

                <div v-for="(estadisticaPorPregunta, index) in estadisticasPorPreguntaList"
                    :key="index"
                    class="m-card"
                >
                    <div class="m-card-statics__header">
                        {{ estadisticaPorPregunta.pregunta }}
                    </div>
                    <div class="m-card__body">
                        <vue3-chart-js
                            :id="estadisticaPorPregunta.id"
                            :type="estadisticaPorPregunta.type"
                            :data="estadisticaPorPregunta.data"
                            :options="estadisticaPorPregunta.options"
                        >
                        </vue3-chart-js>

                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import Loading from '@/components/Loading.vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import * as TipoPregunta from '@/definition/TipoPregunta';
import { defineComponent, onMounted, ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import { ListarEstadisticasPorPreguntaService } from '@/services/estadisticas/ListarEstadisticasPorPreguntaService';
// import { ValidatorVerEncuestaService } from '@/services/validator/ValidatorVerEncuestaService';
// import { UsuarioLogueado } from '@/types/UsuarioLogueado';
// import { Redirect } from '@/router/redirect';

export default defineComponent({

    components: {
        Vue3ChartJs,
        Loading
    },
    
    setup() {

        const routeParam = ref("");
        
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

            await listarEstadisticasPorPregunta();
        });
        
        // const validatorVerEncuestaService = new ValidatorVerEncuestaService();
        // const usuarioLogueado = new UsuarioLogueado();
        // const redirect = new Redirect();

        const route = useRoute();
        const listarEstadisticasPorPreguntaService = new ListarEstadisticasPorPreguntaService();
        const estadisticasPorPreguntaList = ref([]);
        const successData = ref(false);

        const cantidadEncuestasCulminadas = inject('cantidadEncuestasCulminadas', ref(0));
        const nombreEncuesta = inject('nombreEncuesta', ref(''));

        const successDataResultados = inject('successDataResultados', ref(false));
        
        async function listarEstadisticasPorPregunta()
        {
            const params = {
                encuestaId: routeParam.value
            }

            const serviceResponse = await listarEstadisticasPorPreguntaService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                
                array.forEach((item, index) => {

                    const estadisticasPorPregunta = {
                        id: index,
                        pregunta: item['titulo'],
                        type: 'bar',
                        options: {
                            responsive: true,
                            plugins: {
                                legend: false,
                                tooltip: {
                                    enabled: true,
                                    position: 'nearest',
                                    callbacks: {
                                        footer: (tooltip) => getAlternativa(item, tooltip[0].dataIndex)
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        stepSize: 1
                                    }
                                }
                            }
                        },
                        data: {
                            labels: getLabels(item),
                            datasets: [
                                {
                                    label: "",
                                    backgroundColor: [
                                        '#0B99A3',
                                        '#0B99A3',
                                        '#0B99A3',
                                        '#0B99A3'
                                    ],
                                    data: [
                                        item['cantidadAlternativa1'],
                                        item['cantidadAlternativa2'],
                                        item['cantidadAlternativa3'],
                                        item['cantidadAlternativa4']
                                    ]
                                }
                            ]
                        }
                    }

                    getAlternativa(item);

                    estadisticasPorPreguntaList.value.push(estadisticasPorPregunta);
                });

                successData.value = true;
            }
        }

        function getLabels(item)
        {
            const labelsPreguntaSimple = ["Opción 1", "Opción 2", "Opción 3"];
            const labelsPreguntaRango = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];

            return item['tipoPreguntaId'] == TipoPregunta.SIMPLE ? labelsPreguntaSimple : labelsPreguntaRango;
        }

        function getAlternativa(item, index)
        {
            if (index === 0) return item['alternativa1'];
            if (index === 1) return item['alternativa2'];
            if (index === 2) return item['alternativa3'];
            return item['alternativa4'];
        }

        return {
            successData,
            estadisticasPorPreguntaList,
            nombreEncuesta,
            cantidadEncuestasCulminadas,
            successDataResultados
        }
    },
})
</script>
