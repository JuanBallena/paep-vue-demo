<template>
    <div class="m-box-encuesta">
        <div :class="encuesta.encuestaNoEstaCerrada() ? 'm-box-encuesta__status' : 'm-box-encuesta__status-close'">

            {{ encuesta.estadoEncuesta() }}
            <i :class="encuesta.iconoEstado()"></i>

        </div>
        <div class="m-box-encuesta__info-container">
            <div class="m-box-encuesta__info">
                <div class="m-box-encuesta__title">
                    <span @click="editarEncuesta()">{{ encuesta.nombreEncuesta }}</span>
                </div>
                <div class="u-align-between">
                    <div class="m-box-encuesta__answer">
                        {{ encuesta.visitas }} visitas
                    </div>
                    <div class="m-box-encuesta__actions">
                        <i class="fas fa-chart-bar" @click="verResultados()"></i>
                        
                        <span class="m-dropdown" @blur="dropdownAccionesIsVisible = false" tabindex="1">
                            <i class="fas fa-ellipsis-h" @click="dropdownAccionesIsVisible = !dropdownAccionesIsVisible"></i>
                            <transition name="slide-fade">
                                <div class="m-dropdown__box" v-if="dropdownAccionesIsVisible">
                                    <ul>
                                        <li @click="openModalDuplicarEncuesta()">
                                            Duplicar encuesta
                                        </li>
                                        <li v-if="encuesta.usuarioPuedeCompartir()"
                                            @click="openModalCompartirEncuesta()"
                                        >
                                            Compartir encuesta
                                        </li>
                                        <!-- {{ encuestaCerrada }} -->
                                        <template v-if="encuesta.encuestaNoEstaCerrada()">
                                            <li v-if="encuesta.usuarioPuedeEliminar()"
                                                @click="openModalEliminarEncuesta()"
                                            >
                                                <span class="u-color-danger">Eliminar encuesta</span>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </transition>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <ModalDuplicarEncuesta
            :idEncuesta="encuesta.idEncuesta"
            :isVisible="modalDuplicarEncuestaIsVisible"
            @closeModal="modalDuplicarEncuestaIsVisible = false"
            @successDuplicarEncuesta="successDuplicarEncuesta()"
        />

        <ModalCompartirEncuesta
            :idEncuesta="encuesta.idEncuesta"
            :isVisible="modalCompartirEncuestaIsVisible"
            @closeModal="modalCompartirEncuestaIsVisible = false"
            @successCompartirEncuesta="modalCompartirEncuestaIsVisible = false"
        />

        <ModalEliminarEncuesta
            :idEncuesta="encuesta.idEncuesta"
            :isVisible="modalEliminarEncuestaIsVisible"
            @closeModal="modalEliminarEncuestaIsVisible = false"
            @successEliminarEncuesta="successEliminarEncuesta()"
            @errorEliminarEncuesta="errorEliminarEncuesta()"
        />

    </div>
</template>

<script lang="ts">
import ModalDuplicarEncuesta from './ModalDuplicarEncuesta.vue';
import ModalCompartirEncuesta from './ModalCompartirEncuesta.vue';
import ModalEliminarEncuesta from './ModalEliminarEncuesta.vue';
import { defineComponent, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Encuesta } from '@/types/Encuesta';
import { UsuarioLogueado } from '@/types/UsuarioLogueado';

export default defineComponent({

    components: {
        ModalDuplicarEncuesta,
        ModalCompartirEncuesta,
        ModalEliminarEncuesta
    },

    props: {
        encuesta: {
            type: Encuesta,
            default: {}
        }
    },

    emits: ['successDuplicarEncuesta','successEliminarEncuesta'],

    setup(props, {emit}) {

        const router = useRouter();
        const usuarioLogueado: UsuarioLogueado = new UsuarioLogueado();

        const dropdownAccionesIsVisible: Ref<boolean> = ref(false);
        const modalDuplicarEncuestaIsVisible: Ref<boolean> = ref(false);
        const modalCompartirEncuestaIsVisible: Ref<boolean> = ref(false);
        const modalEliminarEncuestaIsVisible: Ref<boolean> = ref(false);

        function editarEncuesta(): void 
        {
            usuarioLogueado.setIdEncuesta(props.encuesta.idEncuesta);
            usuarioLogueado.setNombreEncuesta(props.encuesta.nombreEncuesta);

            router.push({ name: 'Encuesta', params: { id: props.encuesta.idEncuesta }});
        }

        function verResultados(): void
        {
            usuarioLogueado.setIdEncuesta(props.encuesta.idEncuesta);
            usuarioLogueado.setNombreEncuesta(props.encuesta.nombreEncuesta);
            
            router.push({ name: 'AnalizarResultados', params: { id: props.encuesta.idEncuesta } });
        }

        function openModalDuplicarEncuesta(): void
        {
            modalDuplicarEncuestaIsVisible.value = true;
            dropdownAccionesIsVisible.value = false;
        }

        function openModalCompartirEncuesta(): void
        {
            modalCompartirEncuestaIsVisible.value = true;
            dropdownAccionesIsVisible.value = false;
        }

        function openModalEliminarEncuesta(): void
        {
            modalEliminarEncuestaIsVisible.value = true;
            dropdownAccionesIsVisible.value = false;
        }

        function successDuplicarEncuesta() 
        {
            modalDuplicarEncuestaIsVisible.value = false;
            emit('successDuplicarEncuesta');
        }

        function successEliminarEncuesta() 
        {
            modalEliminarEncuestaIsVisible.value = false;
            emit('successEliminarEncuesta');
        }

        function errorEliminarEncuesta() 
        {
            modalEliminarEncuestaIsVisible.value = false;
        }

        return {
            editarEncuesta,
            dropdownAccionesIsVisible,
            modalDuplicarEncuestaIsVisible,
            modalCompartirEncuestaIsVisible,
            modalEliminarEncuestaIsVisible,
            successDuplicarEncuesta,
            successEliminarEncuesta,
            errorEliminarEncuesta,
            openModalDuplicarEncuesta,
            openModalCompartirEncuesta,
            openModalEliminarEncuesta,
            verResultados
        }
    },
})
</script>
