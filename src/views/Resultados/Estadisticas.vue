<template>
    <div>
        <Loading v-if="!successData || !successDataResultados" />
        <div class="o-resultados-container" v-else>
            <div class="a-title">Estadísticas</div>
            <div class="a-title--sm">{{ nombreEncuesta }}</div>
            <div class="a-divider"></div>

            <div class="g-estadisticas">
                <div class="g-estadisticas__grafica-1">
                     <div class="m-card">
                        <div class="m-card__body">
                            <div class="a-statics">
                                <div class="a-statics__text">Encuestas culminadas</div>
                                <div class="a-statics__number">{{ cantidadEncuestasCulminadas }}</div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div class="g-estadisticas__grafica-2">
                    <div class="m-card">
                        <div class="m-card__body">
                            <div class="a-statics">
                                <div class="a-statics__text">Encuestas totales</div>
                                <div class="a-statics__number">{{ cantidadEncuestasTotales }}</div>
                            </div>
                        </div>
                    </div> 
                </div>


                <div class="g-estadisticas__grafica-3">
                    <div class="m-card-statics" style="height: auto;">
                        <div class="m-card-statics__header">
                            Género
                        </div>
                        <div class="m-card-statics__body u-align-center">
                            <vue3-chart-js v-if="estadisticasGenero.data.labels.length > 0"
                                :id="estadisticasGenero.id"
                                :type="estadisticasGenero.type"
                                :data="estadisticasGenero.data"
                                :options="estadisticasGenero.options"
                            />
                            <div v-else class="a-box-no-data">
                                <p>No hay datos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-estadisticas__grafica-4">
                    <div class="m-card-statics">
                        <div class="m-card-statics__header">
                            Edad
                        </div>
                        <div class="m-card-statics__body" :style="'width: ' + widthEstadisticasEdad + 'px;'">
                            <div class="m-card-statics__content">
                                <vue3-chart-js v-if="estadisticasEdad.data.labels.length > 0"
                                    :id="estadisticasEdad.id"
                                    :type="estadisticasEdad.type"
                                    :data="estadisticasEdad.data"
                                    :options="estadisticasEdad.options"
                                />
                                <div v-else class="a-box-no-data">
                                    <p>No hay datos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-estadisticas__grafica-5">
                    <div class="m-card-statics">
                        <div class="m-card-statics__header">
                            Centro educativo
                        </div>
                        <div class="m-card-statics__body" :style="'width: ' + widthEstadisticasCentroEducativo + 'px;'">
                            <vue3-chart-js v-if="estadisticasCentroEducativo.data.labels.length > 0"
                                :id="estadisticasCentroEducativo.id"
                                :type="estadisticasCentroEducativo.type"
                                :data="estadisticasCentroEducativo.data"
                                :options="estadisticasCentroEducativo.options"
                            />
                            <div v-else class="a-box-no-data">
                                <p>No hay datos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-estadisticas__grafica-6">
                    <div class="m-card-statics">
                        <div class="m-card-statics__header">
                            Distrito
                        </div>
                        <div class="m-card-statics__body" :style="'width: ' + widthEstadisticasDistrito + 'px;'">
                
                            <vue3-chart-js v-if="estadisticasDistrito.data.labels.length > 0"
                                :id="estadisticasDistrito.id"
                                :type="estadisticasDistrito.type"
                                :data="estadisticasDistrito.data"
                                :options="estadisticasDistrito.options"
                            />
                            <div v-else class="a-box-no-data">
                                <p>No hay datos</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="g-estadisticas__grafica-7">
                    <div class="m-card-statics">
                        <div class="m-card-statics__header">
                            Respuestas críticas por género
                        </div>
                        <div class="m-card-statics__body">
            
                                <vue3-chart-js v-if="sumatoriaAlternativasCriticasPorGenero > 0"
                                    :id="estadisticasCriticasGenero.id"
                                    :type="estadisticasCriticasGenero.type"
                                    :data="estadisticasCriticasGenero.data"
                                    :options="estadisticasCriticasGenero.options"
                                />
                                <div v-else class="a-box-no-data">
                                    <p>No hay datos</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div class="m-card-statics">
                    <div class="m-card-statics__header">
                        Respuestas críticas por edad
                    </div>
                    <div class="m-card-statics__body" :style="'width: ' + widthEstadisticasEdadCriticas + 'px;'">                          

                        <vue3-chart-js v-if="estadisticasCriticasEdad.data.labels.length > 0"
                            :id="estadisticasCriticasEdad.id"
                            :type="estadisticasCriticasEdad.type"
                            :data="estadisticasCriticasEdad.data"
                            :options="estadisticasCriticasEdad.options"
                        />
                        <div v-else class="a-box-no-data">
                            <p>No hay datos</p>
                        </div>
                    </div>
                </div>

                <div class="m-card-statics">
                    <div class="m-card-statics__header">
                        Respuestas críticas por distrito
                    </div>
                    <div class="m-card-statics__body" :style="'width: ' + widthEstadisticasDistritoCriticas + 'px;'">

                        <vue3-chart-js v-if="estadisticasCriticasDistrito.data.labels.length > 0"
                            :id="estadisticasCriticasDistrito.id"
                            :type="estadisticasCriticasDistrito.type"
                            :data="estadisticasCriticasDistrito.data"
                            :options="estadisticasCriticasDistrito.options"
                        />
                        <div v-else class="a-box-no-data">
                            <p>No hay datos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
import Loading from '@/components/Loading.vue';
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
import { defineComponent, ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';
import { ListarEstadisticasAgrupadasService } from '@/services/estadisticas/ListarEstadisticasAgupadasService';
import { ListarEstadisticasCriticasAgrupadasService } from '@/services/estadisticas/ListarEstadisticasCriticasAgrupadasService';
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

            const response1 = listarEstadisticasAgrupadasPorGenero();
            const response2 = listarEstadisticasAgrupadasPorEdad();
            const response3 = listarEstadisticasAgrupadasPorCentroEducativo();
            const response4 = listarEstadisticasAgrupadasPorDistrito();
            const response5 = listarEstadisticasCriticasAgrupadasPorGenero();
            const response6 = listarEstadisticasCriticasAgrupadasPorEdad();
            const response7 = listarEstadisticasCriticasAgrupadasPorDistrito();

            await Promise.all([response1, response2, response3, response4, response5, response6, response7]);
            successData.value = true;
        });

        const successDataResultados = inject('successDataResultados', ref(false));

        // const validatorVerEncuestaService = new ValidatorVerEncuestaService();
        // const usuarioLogueado = new UsuarioLogueado();
        // const redirect = new Redirect();

        const route = useRoute();
        const successData = ref(false);
        const listarEstadisticasAgrupadasService = new ListarEstadisticasAgrupadasService();
        const listarEstadisticasCriticasAgrupadasService = new ListarEstadisticasCriticasAgrupadasService();

        const estadisticasGenero = ref({});
        const estadisticasEdad = ref({});
        const estadisticasCentroEducativo = ref({});
        const estadisticasDistrito = ref({});
        const estadisticasCriticasGenero = ref({});
        const estadisticasCriticasEdad = ref({});
        const estadisticasCriticasDistrito = ref({});
        const sumatoriaAlternativasCriticasPorGenero = ref(0);

        const widthEstadisticasEdad = ref(450);
        const widthEstadisticasCentroEducativo = ref(450);
        const widthEstadisticasDistrito = ref(450);
        const widthEstadisticasEdadCriticas = ref(450);
        const widthEstadisticasDistritoCriticas = ref(450);

        const cantidadEncuestasCulminadas = inject('cantidadEncuestasCulminadas', ref(0));
        const cantidadEncuestasTotales = inject('cantidadEncuestasTotales', ref(0));
        const nombreEncuesta = inject('nombreEncuesta', ref(''));

        function obtenerAnchoCajaEstadistica(longitudArray, limiteArray)
        {
            if (longitudArray > limiteArray )
            {
                return (longitudArray - limiteArray) * 40;
            }
        }

        //ESTADISTICAS POR GENERO
        async function listarEstadisticasAgrupadasPorGenero()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "genero"
            }

            const serviceResponse = await listarEstadisticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data = [];

                array.forEach(item => {
                    labels.push(item['generoDescripcion']);
                    data.push(item['cantidad']);
                });

                estadisticasGenero.value = {
                    id: 'genero',
                    type: 'pie',
                    options: {
                        responsive: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    usePointStyle: true,
                                },
                            }
                        }
                    },
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                backgroundColor: [
                                    '#0B99A3', //
                                    '#FB6E65',
                                    '#FDCA5B'
                                ],
                                data: data
                            }
                        ]
                    }
                }
                
            }
        }

        // ESTADISTICAS POR EDAD
        async function listarEstadisticasAgrupadasPorEdad()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "edad"
            }

            const serviceResponse = await listarEstadisticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data = [];

                array.forEach(item => {
                    labels.push(item['edad']);
                    data.push(item['cantidad']);
                });

                widthEstadisticasEdad.value+= obtenerAnchoCajaEstadistica(array.length, 10);

                estadisticasEdad.value = {
                    id: 'edad',
                    type: 'bar',
                    options: {
                        responsive: true,
                        plugins: {
                            legend: false
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
                        labels: labels,
                        datasets: [
                            {
                                backgroundColor: [
                                    '#0B99A3'
                                ],
                                data: data
                            }
                        ]
                    }
                }
            }
        }

        // ESTADISTICAS POR CENTRO EDUCATIVO
        async function listarEstadisticasAgrupadasPorCentroEducativo()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "centroEducativo"
            }

            const serviceResponse = await listarEstadisticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data = [];

                array.forEach(item => {
                    labels.push(item['centroEducativo']);
                    data.push(item['cantidad']);
                });

                widthEstadisticasCentroEducativo.value+= obtenerAnchoCajaEstadistica(array.length, 10);

                estadisticasCentroEducativo.value = {
                    id: 'centroEducativo',
                    type: 'bar',
                    options: {
                        responsive: true,
                        plugins: {
                            legend: false
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
                        labels: labels,
                        datasets: [
                            {
                                backgroundColor: [
                                    '#FB6E65'
                                ],
                                data: data
                            }
                        ]
                    }
                }
            }
        }

        // ESTADISTICAS POR DISTRITO
        async function listarEstadisticasAgrupadasPorDistrito()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "distrito"
            }

            const serviceResponse = await listarEstadisticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data = [];

                array.forEach(item => {
                    labels.push(item['distritoNombre']);
                    data.push(item['cantidad']);
                });

                // if (item['cantidad'] > 20 )
                // {
                //     widthEstadisticasDistrito.value+= (item['cantidad'] - 20) * 30;
                // }

                widthEstadisticasDistrito.value+= obtenerAnchoCajaEstadistica(array.length, 5);

                estadisticasDistrito.value = {
                    id: 'distrito',
                    type: 'bar',
                    options: {
                        indexAxis: 'y',
                        // elements: {
                        //     bar: {
                        //         borderWidth: 2,
                        //     }
                        // },
                        responsive: true,
                        plugins: {
                            legend: false
                        },
                        scales: {
                            x: {
                                ticks: {
                                    stepSize: 1
                                }
                            },
                            y: {
                                display: true,
                                ticks: {
                                    stepSize: 1
                                }
                            }
                        }
                    },
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                backgroundColor: [
                                    '#FDCA5B'
                                ],
                                data: data
                            }
                        ]
                    }
                }
            }
        }

        //ESTADISTICAS CRITICAS POR GENERO
        async function listarEstadisticasCriticasAgrupadasPorGenero()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "genero"
            }

            const serviceResponse = await listarEstadisticasCriticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data1 = [];
                let data2 = [];

                array.forEach(item => {
                    labels.push(item['generoDescripcion']);
                    data1.push(item['alternativa3']);
                    data2.push(item['alternativa4']);

                    sumatoriaAlternativasCriticasPorGenero.value+= item['alternativa3'] + item['alternativa4'];
                });

                estadisticasCriticasGenero.value = {
                    id: 'generoCriticas',
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Con frecuencia',
                                data: data1,
                                backgroundColor: '#FB6E65',
                            },
                            {
                                label: 'Con mucha frecuencia',
                                data: data2,
                                backgroundColor: '#0B99A3',
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    usePointStyle: true,
                                },
                            },
                        },
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    stepSize: 1
                                }
                            }
                        }
                    }
                }
            }
        }

        //ESTADISTICAS CRITICAS POR EDAD
        async function listarEstadisticasCriticasAgrupadasPorEdad()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "edad"
            }

            const serviceResponse = await listarEstadisticasCriticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data1 = [];
                let data2 = [];

                array.forEach(item => {
                    labels.push(item['edad']);
                    data1.push(item['alternativa3']);
                    data2.push(item['alternativa4']);
                });

                widthEstadisticasEdadCriticas.value+= obtenerAnchoCajaEstadistica(array.length, 10);

                estadisticasCriticasEdad.value = {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Con frecuencia',
                                data: data1,
                                backgroundColor: '#FB6E65',
                            },
                            {
                                label: 'Con mucha frecuencia',
                                data: data2,
                                backgroundColor: '#0B99A3',
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    usePointStyle: true,
                                },
                            },
                        },
                        responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true,
                                ticks: {
                                    stepSize: 2
                                }
                            }
                        }
                    }
                }
            }
        }

        //ESTADISTICAS CRITICAS POR DISTRITO
        async function listarEstadisticasCriticasAgrupadasPorDistrito()
        {
            const params = {
                encuestaId: routeParam.value,
                groupBy: "distrito"
            }

            const serviceResponse = await listarEstadisticasCriticasAgrupadasService.listar(params);
            
            if (serviceResponse.exito())
            {
                const array = serviceResponse.data['estadisticas'];
                let labels = [];
                let data1 = [];
                let data2 = [];

                array.forEach(item => {
                    labels.push(item['distritoNombre']);
                    data1.push(item['alternativa3']);
                    data2.push(item['alternativa4'])
                });

                widthEstadisticasDistritoCriticas.value+= obtenerAnchoCajaEstadistica(array.length, 6);

                estadisticasCriticasDistrito.value = {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Con frecuencia',
                                data: data1,
                                backgroundColor: '#FB6E65',
                            },
                            {
                                label: 'Con mucha frecuencia',
                                data: data2,
                                backgroundColor: '#0B99A3',
                            }
                        ]
                    },
                    options: {
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    usePointStyle: true,
                                },
                            },
                        },
                        indexAxis: 'y',
                        elements: {
                            // bar: {
                            //     borderWidth: 2,
                            // }
                        },
                        // responsive: true,
                        scales: {
                            x: {
                                stacked: true,
                                ticks: {
                                    stepSize: 1
                                }
                            },
                            y: {
                                stacked: true
                            }
                        }
                    }
                }
            }
        }

        return {
            successData,
            estadisticasGenero,
            estadisticasEdad,
            estadisticasCentroEducativo,
            estadisticasDistrito,
            estadisticasCriticasGenero,
            estadisticasCriticasEdad,
            estadisticasCriticasDistrito,
            sumatoriaAlternativasCriticasPorGenero,
            widthEstadisticasEdad,
            widthEstadisticasDistrito,
            widthEstadisticasCentroEducativo,
            widthEstadisticasEdadCriticas,
            widthEstadisticasDistritoCriticas,
            nombreEncuesta,
            cantidadEncuestasCulminadas,
            cantidadEncuestasTotales,
            successDataResultados
        }
    },
})
</script>
