<template>
    <div class="g-dashboard">
        <div class="g-dashboard__sidebar">
            <div class="a-title--sm u-color-success">Resultados</div>

            <ul class="m-menu">
                <li>
                    <router-link active-class="a-link-menu--active" :to="{ name: 'AnalizarResultados', params: { id: idEncuesta } }">
                        <i class="fas fa-chart-bar"></i> Analizar resultados
                    </router-link>
                </li>
                <li>
                    <router-link active-class="a-link-menu--active" :to="{ name: 'RespuestasIndividuales', params: { id: idEncuesta } }">
                        <i class="fas fa-users"></i> Respuestas individuales
                    </router-link>
                </li>
                <li>
                    <router-link active-class="a-link-menu--active" :to="{ name: 'Estadisticas', params: { id: idEncuesta } }">
                        <i class="fas fa-clipboard-list"></i> Estadísticas
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="g-dashboard__main">
            <router-view v-slot="{ Component }">
                <transition name="component-fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent, onMounted, provide, Ref, ref, watch } from 'vue';
import { ListarResumenEncuestasService } from '../../services/estadisticas/ListarResumenEncuestasService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { ObtenerEncuestaService } from '@/services/encuesta/ObtenerEncuestaService';
import { Encuesta } from '@/types/Encuesta';
import { ValidatorVerEncuestaService } from '@/services/validator/ValidatorVerEncuestaService';
import { Redirect } from '@/router/redirect';

export default defineComponent({

    setup() {
        
        const listarResumenEncuestasService: ListarResumenEncuestasService = new ListarResumenEncuestasService();
        const idEncuesta: Ref<String> = ref('0');
        const nombreEncuesta: Ref<String> = ref('');
        const route = useRoute();

        const cantidadEncuestasCulminadas: Ref<number> = ref(0);
        const cantidadEncuestasTotales: Ref<number> = ref(0);

        const successDataResultados: Ref<boolean> = ref(false);

        provide('cantidadEncuestasCulminadas', cantidadEncuestasCulminadas);
        provide('cantidadEncuestasTotales', cantidadEncuestasTotales);
        provide('nombreEncuesta', nombreEncuesta);
        provide('successDataResultados', successDataResultados);

        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const obtenerEncuestaService: ObtenerEncuestaService = new ObtenerEncuestaService();
        const validatorVerEncuestaService: ValidatorVerEncuestaService = new ValidatorVerEncuestaService();
        const redirect: Redirect = new Redirect();

        const routeParam: Ref<string> = ref("");

        onMounted(async () => {

            routeParam.value = String(route.params.id);
            idEncuesta.value = routeParam.value;

            const params = {
                encuestaId: routeParam.value,
                psicologoId: String(usuarioLogueado.usuarioId)
            }

            const isAutorizado = await validatorVerEncuestaService.validar(params);

            if (!isAutorizado) {
                redirect.redirectToPrincipal(usuarioLogueado.rolId);
                return;
            }

            await listarResumenEncuesta();

            if (usuarioLogueado.idEncuesta === 0 || usuarioLogueado.idEncuesta !== parseInt(routeParam.value))
            {
                await obtenerEncuesta();
            } 
            else
            {
                nombreEncuesta.value = usuarioLogueado.nombreEncuesta;
            }
            
            successDataResultados.value = true;
        });

        async function obtenerEncuesta(): Promise<void>
        {
            const params = {
                idEncuesta: routeParam.value || '1',
                idPsicologo : String(usuarioLogueado.usuarioId),
                limit : "1",
                pag: "1"
            }

            const serviceResponse: ServiceResponse = await obtenerEncuestaService.obtener(params);

            if (serviceResponse.exito()) 
            {
                const item: any = serviceResponse.data['encuestas'][0];

                const encuesta = new Encuesta();
                encuesta.idEncuesta = item['idEncuesta'];
                encuesta.nombreEncuesta = item['nombreEncuesta'];
                
                usuarioLogueado.setIdEncuesta(encuesta.idEncuesta);
                usuarioLogueado.setNombreEncuesta(encuesta.nombreEncuesta);

                nombreEncuesta.value = encuesta.nombreEncuesta;
            }
        }

        async function listarResumenEncuesta(): Promise<void>
        {
            const params = {
                encuestaId: routeParam.value || '1'
            }

            const serviceResponse: ServiceResponse = await listarResumenEncuestasService.listar(params);

            if (serviceResponse.exito())
            {
                cantidadEncuestasCulminadas.value = serviceResponse.data['cantidadEncuestasCulminadas'];
                cantidadEncuestasTotales.value = serviceResponse.data['cantidadEncuestasTotales'];
            }
        }

        return {
            idEncuesta
        }
    },
})
</script>
