<template>
    <header>
        <section>
            <div>
                <label for="checkbox-icon-bars" v-if="isPsicologo">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
            <!-- <div>
                <p>Encuestas</p>
            </div> -->
            <div>
                <!-- dropdown user -->
                <span class="m-dropdown-left" @blur="dropdownUserIsVisible = false" tabindex="-1">
                    <div class="m-dropdown-left__text-container" 
                        @click="dropdownUserIsVisible = !dropdownUserIsVisible">
                        <i class="fas fa-user"></i>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="m-dropdown-left__box" v-if="dropdownUserIsVisible">
                        <ul>
                            <li>
                                <div class="a-user">
                                    <i class="fas fa-user"></i>
                                    <div>
                                        <b>{{ usuario }}</b> <br>
                                        {{ nombreCompleto }}
                                    </div>
                                </div>
                            </li>
                            <li @click="profile()">
                                <i class="fas fa-cog"></i> Mi cuenta
                            </li>
                            <li @click="logout()">
                                <i class="fas fa-sign-out-alt"></i> Salir
                            </li>
                        </ul>
                    </div>
                </span>
                <!-- end dropdown user -->
            </div>
        </section>
        <input type="checkbox" id="checkbox-icon-bars" v-model="menuCheckbox">
        <nav>
            <ul>
                <template v-if="isAdministrador">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </template>
                <template v-else>
                    <li>
                        <span>Menú</span>
                        <label v-if="isPsicologo" @click="closeMenu()">
                            <i class="fas fa-times"></i> Cerrar
                        </label>
                    </li>
                    <li @click="closeMenu()">
                        <router-link  active-class="a-link--active" :to="{ name: 'MisEncuestas' }">
                            <i class="fas fa-th-large"></i> Mis encuestas
                        </router-link>
                    </li>
                    <li @click="closeMenu()" v-if="tabIsVisible">
                        <router-link active-class="a-link--active" :to="{ name: 'Encuesta', params: { id: idEncuesta } }">
                            <i class="fas fa-pen"></i> Encuesta
                        </router-link>
                    </li>
                    <li v-else></li>
                    <li @click="closeMenu()" v-if="tabIsVisible">
                        <router-link active-class="a-link--active" :to="{ name: 'RecopilarRespuestas', params: { id: idEncuesta }  }">
                            <i class="fas fa-envelope"></i> Recopilar respuestas
                        </router-link>
                    </li>
                    <li v-else></li>
                    <li @click="closeMenu()" v-if="tabIsVisible">
                        <router-link active-class="a-link--active" :to="{ name: routeNameResultados, params: { id: idEncuesta }  }">
                            <i class="fas fa-chart-bar"></i> Resultados
                        </router-link>
                    </li>
                    <li v-else></li>
                </template>
                <li>
                    <!-- dropdown user -->
                    <span class="m-dropdown-left u-visible-only-lg" @blur="dropdownUserIsVisible = false" tabindex="-1">
                        <div class="m-dropdown-left__text-container" 
                            @click="dropdownUserIsVisible = !dropdownUserIsVisible">
                            <i class="fas fa-user"></i>
                            <i class="fas fa-chevron-down"></i>
                        </div>
                        <div class="m-dropdown-left__box" v-if="dropdownUserIsVisible">
                            <ul>
                                <li>
                                    <div class="a-user">
                                        <i class="fas fa-user"></i>
                                        <div>
                                            <b>{{ usuario }}</b> <br>
                                            {{ nombreCompleto }}
                                        </div>
                                    </div>
                                </li>
                                <li @click="profile()">
                                    <i class="fas fa-cog"></i> Mi cuenta
                                </li>
                                <li @click="logout()">
                                    <i class="fas fa-sign-out-alt"></i> Salir
                                </li>
                            </ul>
                        </div>
                    </span>
                    <!-- end dropdown user -->
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from 'vue';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
    setup() {

        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const route = useRoute();
        const router = useRouter();

        const dropdownUserIsVisible: Ref<boolean> = ref(false);
        const tabIsVisible: Ref<boolean> = ref(false);
        const idEncuesta: Ref<string> = ref('0');
        const menuCheckbox: Ref<boolean> = ref(false);

        const isAdministrador: Ref<boolean> = ref(false);
        const isPsicologo: Ref<boolean> = ref(false);

        onMounted(() => {
            onChangeRouteName();
            updateRouteResultados();
            isAdministrador.value = usuarioLogueado.isAdministrador();
            isPsicologo.value = usuarioLogueado.isPsicologo();
        });

        watch(() => route.params.id, () => onChangeRouteName());

        watch(() => route.name, () => updateRouteResultados());

        const routeNameResultados: Ref<string> = ref("AnalizarResultados");

        function updateRouteResultados(): void
        {
            const routes = ['AnalizarResultados','RespuestasIndividuales','Estadisticas'];

            if (routes.includes(String(route.name)))
            {
                routeNameResultados.value = String(route.name);
            } else {
                routeNameResultados.value = 'AnalizarResultados';
            }
        }

        function logout(): void
        {
            usuarioLogueado.logout();
            router.push({ name: 'Home' });
        }

        function profile(): void
        {
            dropdownUserIsVisible.value = false;
            if (usuarioLogueado.isAdministrador()) 
            {
                router.push({ name: 'MiPerfil' });
                return;
            } 
            router.push({ name: 'MiCuenta' });
        }

        function onChangeRouteName(): void
        {
            const routes = ['MisEncuestas', 'MiCuenta'];
            idEncuesta.value = String(route.params.id);
            tabIsVisible.value = routes.includes(String(route.name)) ? false : true;
        }

        function closeMenu(): void 
        {
            menuCheckbox.value = false;
        }

        return { 
            dropdownUserIsVisible,
            tabIsVisible,
            idEncuesta,
            usuario: usuarioLogueado.usuario,
            nombreCompleto: usuarioLogueado.nombreCompleto,
            profile,
            logout,
            isAdministrador,
            isPsicologo,
            closeMenu,
            menuCheckbox,
            routeNameResultados
        }
    },
})
</script>
