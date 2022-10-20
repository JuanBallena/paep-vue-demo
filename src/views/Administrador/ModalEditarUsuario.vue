<template>
    <div>
        <span class="a-icon">
            <i class="fas fa-pen" @click="openModal()"></i>
        </span>
        <SimpleModal
            dimension="lg"
            :isVisible="modalEditarUsuarioIsVisible"
            @closeModal="closeModal()"
        >
            <template #header>
                <div class="a-title--sm">Editar usuario</div>
                
                <Alert v-if="errorModificarUsuario" :message="errorModificarUsuario" />
            </template>

            <template #body>
                <form action="">
                    <div class="o-user-form-container">
                        <div>
                            <label>Nombres</label>
                            <input type="text"
                                v-model="nombres"
                                class="a-text-field"
                                @keyup="errorModificarUsuario = ''"
                                placeholder="Escriba nombres" />
                        </div>
                        <div>
                            <label>Ap. paterno</label>
                            <input type="text"
                                v-model="paterno"
                                class="a-text-field"
                                @keyup="errorModificarUsuario = ''"
                                placeholder="Escriba apellido paterno" />
                        </div>
                        <div>
                            <label>Ap. materno</label>
                            <input type="text"
                                v-model="materno"
                                class="a-text-field"
                                @keyup="errorModificarUsuario = ''"
                                placeholder="Escriba apellido materno" />
                        </div>
                    </div>
                    <br>
                    <div class="o-user-form-container">
                        <div>
                            <label>Contraseña</label>
                            <div class="u-align-center">
                                <input :type="showPassword ? 'text' : 'password'"
                                    v-model="password"
                                    :class="classPassword"
                                    :readonly="esSoloLectura"
                                    autocomplete=""
                                    @keyup="errorModificarUsuario = ''"
                                    :placeholder="placeholderPassword" />

                                <i v-if="!esSoloLectura"
                                    :class="showPassword ? 'fas fa-eye a-icon-password' : 'fas fa-eye-slash a-icon-password'" 
                                    @click="showPassword = !showPassword">
                                </i>
                            </div>
                            
                        </div>
                        <div>
                            <label>Confirmar contraseña</label>
                            <div class="u-align-center">
                                <input  :type="showConfirmPassword ? 'text' : 'password'"
                                    v-model="confirmPassword"
                                    :class="classPassword"
                                    :readonly="esSoloLectura"
                                    autocomplete=""
                                    @keyup="errorModificarUsuario = ''"
                                    :placeholder="placeholderPassword" />

                                <i v-if="!esSoloLectura"
                                    :class="showConfirmPassword ? 'fas fa-eye a-icon-password' : 'fas fa-eye-slash a-icon-password'" 
                                    @click="showConfirmPassword = !showConfirmPassword">
                                </i>
                            </div>
                        </div>
                    </div>
                    <div class="a-checkbox">
                        <div class="a-checkbox__icon">
                            <i @click="onChangeCheckbox()"
                                :class="checkboxPasswords 
                                ? 'far fa-check-square' 
                                : 'far fa-square'"
                            ></i>
                        </div>
                        <div class="a-checkbox__text" @click="onChangeCheckbox()">
                            Habilitar entradas de contraseña
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
                                :class="modificarButtonIsDisabled || buttonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                                :disabled="modificarButtonIsDisabled || buttonIsDisabled"
                                @click="modificarUsuario()"
                            >
                                Modificar
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
import { UsuarioLogueado } from '@/types/UsuarioLogueado';
import { computed, defineComponent, inject, reactive, ref, Ref } from 'vue';
import { Usuario } from '@/types/Usuario';
import { ModificarUsuarioService } from '@/services/usuario/ModificarUsuarioService';

export default defineComponent({

    components: {
        SimpleModal,
        Alert
    },

    props: {
        usuario: {
            type: Usuario,
            default: {}
        }
    },

    emits: ['successEditarUsuario'],

    setup(props, {emit}) {

        const modificarUsuarioService: ModificarUsuarioService = new ModificarUsuarioService();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();
        
        const modalEditarUsuarioIsVisible: Ref<boolean> = ref(false);
        const errorModificarUsuario: Ref<string> = ref("");
        const password: Ref<string> = ref("");
        const confirmPassword: Ref<string> = ref("");
        const nombres: Ref<string> = ref("");
        const paterno: Ref<string> = ref("");
        const materno: Ref<string> = ref("");
        const modificarButtonIsDisabled: Ref<boolean> = ref(false);
        const checkboxPasswords: Ref<boolean> = ref(false);

        const showPassword: Ref<boolean> = ref(false);
        const showConfirmPassword: Ref<boolean> = ref(false);

        const showSuccessNotification = inject('showSuccessNotification', (message: string) => {});

        const esSoloLectura = computed(() => checkboxPasswords.value == false);
        const classPassword = computed(() => checkboxPasswords.value 
            ? 'a-text-field' 
            : 'a-text-field u-color-muted u-bg-color-accent'
        );

        const placeholderPassword = computed(() => checkboxPasswords.value == false 
            ? '**********'
            : 'Escriba contraseña'
        );

        const buttonIsDisabled = computed(() => 
            checkboxPasswords.value ? (nombres.value == "" || paterno.value == "" || materno.value == "" || 
                password.value == "" || confirmPassword.value == "") 
                : (nombres.value == "" || paterno.value == "" || materno.value == "")
        );

        function openModal(): void
        {
            nombres.value = props.usuario.nombres || "";
            paterno.value = props.usuario.paterno || "";
            materno.value = props.usuario.materno || "";
            password.value = "";
            confirmPassword.value = "";
            modalEditarUsuarioIsVisible.value = true
        }

        function closeModal(): void
        {
            modalEditarUsuarioIsVisible.value = false;
            reset();
        }

        function reset(): void
        {
            modificarButtonIsDisabled.value = false;
            errorModificarUsuario.value = "";
            nombres.value = "";
            paterno.value = "";
            materno.value = "";
            password.value = ""; 
            confirmPassword.value = "";
            checkboxPasswords.value = false;
        }

        async function modificarUsuario(): Promise<void>
        {
            modificarButtonIsDisabled.value = true;

            if (password.value !== confirmPassword.value)
            {
                errorModificarUsuario.value = "Contraseñas no coinciden";
                modificarButtonIsDisabled.value = false;
                return;
            }

            var params: any = {};

            if (password.value && confirmPassword.value)
            {
                params = {
                    idUsuario: String(props.usuario.idUsuario),
                    nombres: nombres.value,
                    paterno: paterno.value,
                    materno: materno.value,
                    usuarioModificador: String(usuarioLogueado.usuarioId),
                    password: password.value,
                    confirmPassword: confirmPassword.value
                }
            }

            if (!password.value && !confirmPassword.value)
            {
                params = {
                    idUsuario: String(props.usuario.idUsuario),
                    nombres: nombres.value,
                    paterno: paterno.value,
                    materno: materno.value,
                    usuarioModificador: String(usuarioLogueado.usuarioId)
                }
            }

            const serviceResponse: ServiceResponse = await modificarUsuarioService.modificar(params);

            if (serviceResponse.exito())
            {
                modalEditarUsuarioIsVisible.value = false;
                showSuccessNotification("Usuario se modificó correctamente");
                reset();
                emit('successEditarUsuario');
            }

            if (serviceResponse.errorResponse())
            {
                modificarButtonIsDisabled.value = true;
                errorModificarUsuario.value = serviceResponse.responseMessage;
            }
        }

        function onChangeCheckbox(): void 
        {
            checkboxPasswords.value = !checkboxPasswords.value;

            if (!checkboxPasswords.value) {
                password.value = "";
                confirmPassword.value = "";
            }
        }

        return {
            modalEditarUsuarioIsVisible,
            errorModificarUsuario,
            password,
            confirmPassword,
            nombres,
            paterno,
            materno,
            modificarButtonIsDisabled,
            buttonIsDisabled,
            modificarUsuario,
            closeModal,
            openModal,
            esSoloLectura,
            classPassword,
            onChangeCheckbox,
            checkboxPasswords,
            placeholderPassword,
            showPassword,
            showConfirmPassword
        }
    },
})
</script>
