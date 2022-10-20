<template>
    <div class="g-login u-align-end">
        <div class="g-login__img-container">
            <img src="/img/fondo-login.jpeg" alt="">
        </div>

        <div class="g-login__form-container">
            <div class="g-login__form">
                <div class="g-login__title">Iniciar Sesión</div>

                <Alert v-if="errorLogin" :message="errorLogin" />
                <br>

                <form action="">
                    <input type="text"
                        v-model="usuario"
                        placeholder="Usuario" 
                        @keyup="errorLogin = ''"/>

                    <input :type="showConfirmPassword ? 'text' : 'password'"
                        v-model="password"
                        autocomplete=""
                        placeholder="Contraseña" 
                        @keyup="errorLogin = ''"/>

                    <i :class="showConfirmPassword ? 'fas fa-eye a-icon-password' : 'fas fa-eye-slash a-icon-password'" 
                        @click="showConfirmPassword = !showConfirmPassword">
                    </i>

                    <div class="g-login__button-container">
                        <button
                            :class="buttonLoginIsDisabled || buttonIsDisabled ? 'g-login__button-container__button--disabled' : 'g-login__button-container__button'"
                            :disabled="buttonLoginIsDisabled || buttonIsDisabled"
                            type="button" 
                            @click="login()"
                        >
                            Acceder
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Alert from '@/components/Alert.vue';
import { LoginService } from '@/services/Login/LoginService';
import { ServiceResponse } from '@/services/ServiceResponse';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, ref, Ref } from 'vue';
import { Redirect } from '../../router/redirect';

export default defineComponent({

    components: {
        Alert
    },

    setup() {

        const loginService: LoginService = new LoginService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        const redirect: Redirect = new Redirect();
        const errorLogin: Ref<string> = ref("");
        const usuario: Ref<string> = ref("admin");
        const password: Ref<string> = ref("123456");
        const buttonLoginIsDisabled: Ref<boolean> = ref(false);
        const showPassword: Ref<boolean> = ref(false);
        const showConfirmPassword: Ref<boolean> = ref(false);

        const buttonIsDisabled = computed(() => usuario.value == "" || password.value == "");

        async function login(): Promise<void> {

            buttonLoginIsDisabled.value = true;

            const params = {
                usuario: usuario.value,
                password: password.value
            }

            const serviceResponse: ServiceResponse = await loginService.login(params);

            if (serviceResponse.exito()) 
            {            
                usuarioLogueado.setDataUsuarioLogueado(serviceResponse.data['usuarioLogueado']);
                usuarioLogueado.setToken(serviceResponse.data['token']);
                redirect.redirectToPrincipal(serviceResponse.data['usuarioLogueado']['rolId']);
            }

            if (serviceResponse.errorResponse())
            {
                errorLogin.value = serviceResponse.responseMessage;
                buttonLoginIsDisabled.value = false;
            }
        }

        return {
            usuario,
            password,
            errorLogin,
            login,
            buttonLoginIsDisabled,
            buttonIsDisabled,
            showPassword,
            showConfirmPassword
        }
    },
})
</script>