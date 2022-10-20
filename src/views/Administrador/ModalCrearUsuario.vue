<template>
    <div>
        <button class="a-btn a-btn--primary" @click="modalCrearUsuarioIsVisible = true">
            Añadir
        </button>
        <SimpleModal
            dimension="lg"
            :isVisible="modalCrearUsuarioIsVisible"
            @closeModal="closeModal()"
        >
            <template #header>
                <div class="a-title--sm">Crear nuevo usuario</div>
                <Alert v-if="errorCrearUsuario" :message="errorCrearUsuario" />
            </template>

            <template #body>
                <form action="">
                    <div class="o-user-form-container">
                        <div>
                            <label>Nombres</label>
                            <input type="text"
                                v-model="nombres"
                                class="a-text-field"
                                @keyup="errorCrearUsuario = ''"
                                placeholder="Escriba nombres" />
                        </div>
                        <div>
                            <label>Ap. paterno</label>
                            <input type="text"
                                v-model="paterno"
                                class="a-text-field"
                                @keyup="errorCrearUsuario = ''"
                                placeholder="Escriba apellido paterno" />
                        </div>
                        <div>
                            <label>Ap. materno</label>
                            <input type="text"
                                v-model="materno"
                                class="a-text-field"
                                @keyup="errorCrearUsuario = ''"
                                placeholder="Escriba apellido materno" />
                        </div>
                        <div>
                            <label>Usuario</label>
                            <input type="text"
                                v-model="usuario"
                                class="a-text-field"
                                @keyup="errorCrearUsuario = ''"
                                placeholder="Escriba nombre de usuario" />
                        </div>
                        <div>
                            <label>Contraseña</label>
                            <div class="u-align-center">
                                <input :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    class="a-text-field"
                                    autocomplete=""
                                    @keyup="errorCrearUsuario = ''"
                                    placeholder="Escriba contraseña" />
                                <i :class="showPassword ? 'fas fa-eye a-icon-password' : 'fas fa-eye-slash a-icon-password'" 
                                    @click="showPassword = !showPassword">
                                </i>
                            </div>
                        </div>
                        <div>
                            <label>Confirmar contraseña</label>
                            <div class="u-align-center">
                                <input :type="showConfirmPassword ? 'text' : 'password'"
                                    v-model="confirmPassword"
                                    class="a-text-field"
                                    autocomplete=""
                                    @keyup="errorCrearUsuario = ''"
                                    placeholder="Escriba contraseña" />
                                <i :class="showConfirmPassword ? 'fas fa-eye a-icon-password' : 'fas fa-eye-slash a-icon-password'" 
                                    @click="showConfirmPassword = !showConfirmPassword">
                                </i>
                            </div>
                        </div>
                        <div>
                            <label>Rol</label>
                            <div class="m-radios">
                                <div class="a-radio">
                                    <input type="radio" id="administrador" value="1" v-model="rolId">
                                    <label for="administrador">Administrador</label>
                                </div>
                                <div class="a-radio">
                                    <input type="radio" id="psicologo" value="2" v-model="rolId">
                                    <label for="psicologo">Psicólogo</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="o-button-container u-align-end">
                        <div>
                            <button class="a-btn a-btn--default" @click="closeModal()">
                                Cerrar
                            </button>
                        </div>
                        <div>
                            <button type="button" 
                                :class="crearButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                                :disabled="crearButtonIsDisabled || buttonIsDisabled"
                                @click="crearUsuario()"
                            >
                                Crear usuario
                            </button>
                        </div>
                    </div>
                </form>
            </template>
        </SimpleModal>
    </div>
</template>

<script lang="ts">
import SimpleModal from '@/components/SimpleModal.vue';
import Alert from '@/components/Alert.vue';
import { ServiceResponse } from '@/services/ServiceResponse';
import { CrearUsuarioService } from '@/services/usuario/CrearUsuarioService';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, inject, ref, Ref } from 'vue';

export default defineComponent({

    components: {
        SimpleModal,
        Alert
    },

    emits: ['successCrearUsaurio'],

    setup(props, {emit}) {

        const crearUsuarioService: CrearUsuarioService = new CrearUsuarioService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        
        const modalCrearUsuarioIsVisible: Ref<boolean> = ref(false);
        const errorCrearUsuario: Ref<string> = ref("");
        const usuario: Ref<string> = ref("");
        const password: Ref<string> = ref("");
        const confirmPassword: Ref<string> = ref("");
        const rolId: Ref<number> = ref(0);
        const nombres: Ref<string> = ref("");
        const paterno: Ref<string> = ref("");
        const materno: Ref<string> = ref("");
        const crearButtonIsDisabled: Ref<boolean> = ref(false);
        const showPassword: Ref<boolean> = ref(false);
        const showConfirmPassword: Ref<boolean> = ref(false);

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const buttonIsDisabled = computed(() => 
            nombres.value == "" ||
            paterno.value == "" ||
            materno.value == "" ||
            rolId.value == 0 ||
            usuario.value == "" ||
            password.value == "" || 
            confirmPassword.value == ""
        );

        function closeModal(): void
        {
            modalCrearUsuarioIsVisible.value = false;
            reset();
        }

        async function crearUsuario(): Promise<void>
        {
            crearButtonIsDisabled.value = true;

            if (password.value !== confirmPassword.value)
            {
                errorCrearUsuario.value = "Contraseñas no coinciden";
                crearButtonIsDisabled.value = false;
                return;
            }

            const params = {
                nombres: nombres.value,
                paterno: paterno.value,
                materno: materno.value,
                usuario: usuario.value,
                rolId: String(rolId.value),
                password: password.value,
                confirmPassword: confirmPassword.value,
                usuarioCreador: String(usuarioLogueado.usuarioId)
            }

            const serviceResponse: ServiceResponse = await crearUsuarioService.crear(params);

            if (serviceResponse.exito())
            {
                modalCrearUsuarioIsVisible.value = false;
                showSuccessNotification('Usuario de registró correctamente');
                reset();
                emit('successCrearUsaurio');
            }

            if (serviceResponse.errorResponse())
            {
                crearButtonIsDisabled.value = false;
                errorCrearUsuario.value = serviceResponse.responseMessage;
            }
        }

        function reset(): void
        {
            crearButtonIsDisabled.value = false;
            errorCrearUsuario.value = "";

            nombres.value = "";
            paterno.value = "";
            materno.value = "";
            rolId.value = 0;
            usuario.value = "";
            password.value = ""; 
            confirmPassword.value = "";
        }

        return {
            modalCrearUsuarioIsVisible,
            errorCrearUsuario,
            usuario,
            password,
            confirmPassword,
            rolId,
            nombres,
            paterno,
            materno,
            crearButtonIsDisabled,
            buttonIsDisabled,
            crearUsuario,
            closeModal,
            showPassword,
            showConfirmPassword
        }
    },
})
</script>
