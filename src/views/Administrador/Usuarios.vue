<template>
    <div>
        <Loading v-if="paginas == -1" />
        <div class="o-usuarios-container" v-else>
            <div class="a-title">
                Usuarios
            </div>
            <div class="u-align-end">
                <label></label>
                <label>Usuarios totales: <b>{{ totalUsuarios }}</b></label>
            </div>
            <div class="a-divider"></div>
            <br>
            <ModalCrearUsuario 
                @successCrearUsaurio="listarUsuarios()"
            />
            <table class="m-table-simple">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(usuario, index) in usuarios" :key="index">
                        <td label="#">{{ usuario.index }}</td>
                        <td label="Nombre">{{ usuario.nombreUsuario }}</td>
                        <td label="Usuario">{{ usuario.usuario }}</td>
                        <td label="Rol">{{ usuario.rolDescripcion }}</td>
                        <td :label="usuario.esPsicologo() ? 'Acciones' : ''">
                            <div class="u-display-flex">
                                <ModalEditarUsuario
                                    v-if="usuario.esPsicologo()"
                                    :usuario="usuario"
                                    @successEditarUsuario="listarUsuarios()"
                                />
                                <ModalEliminarUsuario
                                    v-if="usuario.esPsicologo()"
                                    :idUsuario="usuario.idUsuario"
                                    @successEliminarUsuario="listarUsuarios()"
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br>
            <Paginator
                v-if="usuarios.length > 0"
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
import ModalCrearUsuario from './ModalCrearUsuario.vue';
import ModalEditarUsuario from './ModalEditarUsuario.vue';
import ModalEliminarUsuario from './ModalEliminarUsuario.vue';
import Paginator from '@/components/Paginator.vue';
import { ServiceResponse } from '@/services/ServiceResponse';
import { ListarUsuarioService } from '@/services/usuario/ListarUsuarioService';
import { Usuario } from '@/types/Usuario';
import { useRouter } from 'vue-router';
import { defineComponent, inject, onMounted, Ref, ref } from 'vue';

export default defineComponent({

    components: {
        Loading,
        ModalCrearUsuario,
        ModalEditarUsuario,
        ModalEliminarUsuario,
        Paginator
    },

    setup() {

        onMounted(async () => await listarUsuarios())
        
        const router = useRouter();
        const usuarios: Ref<Usuario[]> = ref([]);
        const listarUsuarioService: ListarUsuarioService = new ListarUsuarioService();

        const $itemsPerPageUsuarios = inject('$itemsPerPageUsuarios', ref(10));

        const paginas: Ref<number> = ref(-1);
        const currentPage: Ref<number> = ref(1);
        const totalUsuarios: Ref<number> = ref(0);

        async function listarUsuarios(): Promise<void>
        {
            const params = {
                limit: String($itemsPerPageUsuarios),
                pag: String(currentPage.value)
            }

            const serviceResponse: ServiceResponse = await listarUsuarioService.listar(params);

            if (serviceResponse.exito()) 
            {
                usuarios.value = [];
                paginas.value = -1;

                const array: any[] = serviceResponse.data['usuarios'];

                array.forEach((item: any, index: number) => {
                    
                    const usuario = new Usuario();
                    usuario.index = getIndice(index);
                    usuario.idUsuario = item['idUsuario'];
                    usuario.usuario = item['usuario'];
                    usuario.idRol = item['idRol'];
                    usuario.rolDescripcion = item['rolDescripcion'];
                    usuario.nombres = item['nombres'];
                    usuario.paterno = item['paterno'];
                    usuario.materno = item['materno'];
                    usuario.nombreUsuario = item['nombreUsuario'];

                    usuarios.value.push(usuario);
                });

                paginas.value = serviceResponse.data['paginas'];
                totalUsuarios.value = serviceResponse.data['totalUsuarios'];
            }
        }

        function getIndice(index: number): number
        {
            return parseInt(String($itemsPerPageUsuarios)) * ( currentPage.value - 1) + (index + 1);
        }

        function crearUsuario(): void
        {
            router.push({ name: 'CrearUsuario '});
        }

        function editarUsuario(idUsuario: number): void
        {
            router.push({ name: 'EditarUsuario', params: { id: idUsuario } });
        }

        function onChangePage(page: number): void 
        {
            currentPage.value = page;
            listarUsuarios();
        }

        function prevPage(): void 
        {
            currentPage.value--;
            listarUsuarios();
        }

        function nextPage(): void 
        {
            currentPage.value++;
            listarUsuarios();
        }

        return {
            usuarios,
            paginas,
            crearUsuario,
            editarUsuario,
            listarUsuarios,
            onChangePage,
            prevPage,
            nextPage,
            currentPage,
            totalUsuarios
        }
    },
})
</script>
