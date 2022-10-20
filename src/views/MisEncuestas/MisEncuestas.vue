<template>
    <div>
        <Loading v-if="paginas === -1" />
        <div class="o-mis-encuestas-container" v-else>
            <div class="a-title">Mis encuestas</div>
            <div class="g-encuestas">
                <ModalCrearEncuesta 
                    @successCrearEncuesta="listarEncuestas()"
                />
                <BoxEncuesta 
                    v-for="(encuesta, index) in encuestas"
                    :key="index"
                    :encuesta="encuesta"
                    @successDuplicarEncuesta="listarEncuestas()"
                    @successEliminarEncuesta="listarEncuestas()"
                />
            </div>
                     
            <Paginator
                v-if="encuestas.length > 0"
                :currentPage="currentPage"
                :pages="paginas"
                @onChangePage="onChangePage($event)"
                @prevPage="prevPage()"
                @nextPage="nextPage()"
            />
        </div>
        <br>
    </div>
</template>

<script lang="ts">
import BoxEncuesta from './BoxEncuesta.vue';
import ModalCrearEncuesta from './ModalCrearEncuesta.vue';
import Loading from '@/components/Loading.vue';
import Paginator from '@/components/Paginator.vue';
import * as Rol from '@/definition/Rol';
import { defineComponent, inject, onMounted, provide, ref, Ref } from 'vue';
import { Encuesta } from '@/types/Encuesta';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { ListarEncuestaService } from '@/services/encuesta/ListarEncuestaService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { ListarPsicologoService } from '@/services/psicologo/ListarPsicologoService';
import { Usuario } from '@/types/Usuario';

export default defineComponent({
    components: {
        ModalCrearEncuesta,
        BoxEncuesta,
        Loading,
        Paginator
    },

    setup() {

        const listarEncuestaService: ListarEncuestaService = new ListarEncuestaService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

        const $itemsPerPageEncuestas = inject('$itemsPerPageEncuestas', ref(10));

        const encuestas: Ref<Encuesta[]> = ref([]);
        const paginas: Ref<number> = ref(-1);
        const currentPage: Ref<number> = ref(1);

        const listarPsicologoService: ListarPsicologoService = new ListarPsicologoService();
        const psicologos: Ref<Usuario[]> = ref([]);

        provide('psicologos', psicologos);

        onMounted(async () => {
            await listarEncuestas();
            await listarPsicologos();
        });

        async function listarEncuestas(): Promise<void>
        {
            const params = {
                idPsicologo: String(usuarioLogueado.usuarioId),
                limit: String($itemsPerPageEncuestas),
                pag: String(currentPage.value)
            }

            const serviceResponse: ServiceResponse = await listarEncuestaService.listar(params);

            if (serviceResponse.exito()) 
            {
                encuestas.value = [];
                paginas.value = -1;

                const array: any[] = serviceResponse.data['encuestas'];

                array.forEach((item: any) => {

                    const encuesta = new Encuesta();
                    encuesta.idEncuesta = item['idEncuesta'];
                    encuesta.idEstadoEncuesta = item['idEstadoEncuesta'];
                    encuesta.idPsicologo = item['idPsicologo'];
                    encuesta.idRol = item['idRol'];
                    encuesta.nombreEncuesta = item['nombreEncuesta'];
                    encuesta.nombrePsicologo = item['nombrePsicologo'];
                    encuesta.rolDescripcion = item['rolDescripcion'];
                    encuesta.visitas = item['visitas'];

                    encuestas.value.push(encuesta);
                });

                paginas.value = 1; //serviceResponse.data['paginas'];
            }
        }

        function onChangePage(page: number): void 
        {
            currentPage.value = page;
            listarEncuestas();
        }

        function prevPage(): void 
        {
            currentPage.value--;
            listarEncuestas();
        }

        function nextPage(): void 
        {
            currentPage.value++;
            listarEncuestas();
        }

        async function listarPsicologos(): Promise<void>
        {
            const params = {
                idRol: String(Rol.PSICOLOGO),
                pag: "1",
                limit: "1000"
            }

            const serviceResponse: ServiceResponse = await listarPsicologoService.listar(params);

            if (serviceResponse.exito()) 
            {
                const array: any[] = serviceResponse.data['usuarios'];

                array.forEach((item: any) => {
                    
                    if (item['idUsuario'] != usuarioLogueado.usuarioId)
                    {
                        const usuario = new Usuario();
                        usuario.idUsuario = item['idUsuario'];
                        usuario.usuario = item['usuario'];
                        usuario.idRol = item['idRol'];
                        usuario.rolDescripcion = item['rolDescripcion'];
                        usuario.nombres = item['nombres'];
                        usuario.paterno = item['paterno'];
                        usuario.materno = item['materno'];
                        usuario.nombreUsuario = item['nombreUsuario'];

                        psicologos.value.push(usuario);
                    }
                });
            }
        }

        return { 
            encuestas,
            paginas,
            currentPage,
            listarEncuestas,
            onChangePage,
            prevPage,
            nextPage
        }
    },
})
</script>