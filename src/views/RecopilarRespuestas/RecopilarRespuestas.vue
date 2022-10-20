<template>
    <div>
        <Loading v-if="!successData" />
        <div class="o-recopilar-respuestas-container">
            <div class="a-title">Recopilar respuestas</div>
            <div class="a-title--sm">{{ nombreEncuesta }}</div>
            <br>
            <div class="m-card">
                <div class="m-card__header">
                    <div class="a-title--sm u-color-success">Enlace web de tu encuesta</div>
                    <label>Copia y envía por email este enlace a tus encuestados</label>
                </div>
                <div class="m-card__body">
                    
                    <div class="o-url-encuesta-container">
                        <input type="text" v-model="linkEncuesta" readonly>

                        <!-- <button class="a-btn a-btn--success"
                            v-clipboard:copy="linkEncuesta"
                        >
                            copiar
                        </button> -->

                        <button class="a-btn a-btn--success"
                            v-clipboard:copy="linkEncuesta"
                            v-clipboard:success="onSuccess"
                            v-clipboard:error="onError"
                        >
                            copiar
                        </button>
                    </div>
                    <Alert v-if="messageLinkCopy" type="success" :message="messageLinkCopy" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Alert from '@/components/Alert.vue';
import { ObtenerEncuestaService } from '@/services/encuesta/ObtenerEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { useRoute } from 'vue-router';
import { defineComponent, onMounted, ref, Ref } from 'vue';
import { Encuesta } from '@/types/Encuesta';
import { Redirect } from '@/router/redirect';
import { ValidatorVerEncuestaService } from '@/services/validator/ValidatorVerEncuestaService';
import Loading from '@/components/Loading.vue';

export default defineComponent({

    components: {
        Alert,
        Loading
    },

    setup() {

        const routeParam: Ref<string> = ref("");

        const redirect: Redirect = new Redirect();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const validatorVerEncuestaService: ValidatorVerEncuestaService = new ValidatorVerEncuestaService();

        onMounted(async () => {

            routeParam.value = String(route.params.id);

            const params = {
                encuestaId: routeParam.value,
                psicologoId: String(usuarioLogueado.usuarioId)
            }

            const isAutorizado: boolean = await validatorVerEncuestaService.validar(params);

            if (!isAutorizado) {
                redirect.redirectToPrincipal(usuarioLogueado.rolId);
                return;
            }

            if (usuarioLogueado.idEncuesta === 0 || usuarioLogueado.idEncuesta !== parseInt(routeParam.value))
            {
                await obtenerEncuesta();
            } 
            else
            {
                const nombreEncuestaUrl = usuarioLogueado.nombreEncuestaUrl;
                nombreEncuesta.value = usuarioLogueado.nombreEncuesta;
                
                linkEncuesta.value = `${window.location.host}/introduccion-encuesta/${nombreEncuestaUrl}`;
                successData.value = true;
            }           
        });
        
        const route = useRoute();
        const linkEncuesta: Ref<string> = ref("");
        const messageLinkCopy: Ref<string> = ref("");
        const nombreEncuesta: Ref<string> = ref("");
        const successData: Ref<boolean> = ref(false);

        const obtenerEncuestaService: ObtenerEncuestaService = new ObtenerEncuestaService();

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

                const encuesta = new Encuesta();
                encuesta.idEncuesta = item['idEncuesta'];
                encuesta.nombreEncuesta = item['nombreEncuesta'];
                
                usuarioLogueado.setIdEncuesta(encuesta.idEncuesta);
                usuarioLogueado.setNombreEncuesta(encuesta.nombreEncuesta);

                const nombreEncuestaUrl = encuesta.nombreEncuesta.split(' ').join('-').toLowerCase();
                nombreEncuesta.value = encuesta.nombreEncuesta;
                
                linkEncuesta.value = `${window.location.host}/introduccion-encuesta/${nombreEncuestaUrl}`;
                successData.value = true;
            }
        }

        const onSuccess = () => {
            messageLinkCopy.value = "Enlace de encuesta copiado";
        }

        const onError = () => {
            // console.log('error')
        }

        return {
            messageLinkCopy,
            onSuccess,
            onError,
            linkEncuesta,
            nombreEncuesta,
            successData
        }
    },
})
</script>
