<template>
    <div>
        <div class="a-dotted-line">
            <i class="fas fa-plus-circle" aria-hidden="true" @click="openModal()"></i>
        </div>
        <SimpleModal
            :isVisible="modalCrearPreguntaIsVisible"
            @closeModal="modalCrearPreguntaIsVisible = false"
        >
            <template #header>
                <div class="a-title--sm">Crear nueva pregunta</div>
                <ul class="m-tabs">
                    <li :class="getClassNameTab(1)" 
                        @click="showPreguntaSimpleForm()"
                    >
                        <i class="fas fa-list"></i>
                        <!-- <span class="u-no-visible-sm">Opción Simple</span> -->
                        Simple
                    </li>
                    <li :class="getClassNameTab(2)" 
                        @click="showPreguntaRangoForm()"
                    >
                        <i class="fas fa-sort-amount-up-alt"></i>
                        <!-- <span class="u-no-visible-sm">Rango</span> -->
                        Rango
                    </li>
                </ul>
            </template>
            <template #body>
                <PreguntaSimpleForm v-show="preguntaSimpleFormIsVisible"
                    @closeModal="modalCrearPreguntaIsVisible = false"
                    @successCrearPregunta="successCrearPregunta()"
                />
                    
                <PreguntaRangoForm v-show="!preguntaSimpleFormIsVisible"
                    @closeModal="modalCrearPreguntaIsVisible = false"
                    @successCrearPregunta="successCrearPregunta()"
                />
            </template>                      
        </SimpleModal>
    </div>
</template>

<script lang="ts">
import SimpleModal from '@/components/SimpleModal.vue';
import PreguntaSimpleForm from './PreguntaSimpleForm.vue';
import PreguntaRangoForm from './PreguntaRangoForm.vue';
import { computed, defineComponent, ref, Ref } from 'vue';

export default defineComponent({

    components: {
        SimpleModal,
        PreguntaSimpleForm,
        PreguntaRangoForm
    },

    emits: ['successCrearPregunta'],

    setup(props, {emit}) {
        
        const modalCrearPreguntaIsVisible: Ref<boolean> = ref(false);
        const tabActive: Ref<number> = ref(1);
        const NUMBER_TAB_PREGUNTA_SIMPLE: number = 1;
        const NUMBER_TAB_PREGUNTA_RANGO: number = 2;

        const preguntaSimpleFormIsVisible = computed(() => tabActive.value == 1);

        function openModal(): void 
        {   
            tabActive.value = NUMBER_TAB_PREGUNTA_SIMPLE;
            modalCrearPreguntaIsVisible.value = true;
        }

        function showPreguntaSimpleForm(): void 
        {
            tabActive.value = NUMBER_TAB_PREGUNTA_SIMPLE;
        }

        function showPreguntaRangoForm(): void
        {
            tabActive.value = NUMBER_TAB_PREGUNTA_RANGO;
        }
        
        function getClassNameTab(numberTab: number)
        {
            return numberTab == tabActive.value ? 'm-tabs__tab m-tabs__tab--active' : 'm-tabs__tab';
        }

        function successCrearPregunta(): void
        {
            modalCrearPreguntaIsVisible.value = false;
            emit('successCrearPregunta');
        }

        return {
            modalCrearPreguntaIsVisible,
            openModal,
            preguntaSimpleFormIsVisible,
            getClassNameTab,
            showPreguntaSimpleForm,
            showPreguntaRangoForm,
            successCrearPregunta
        }
    },
})
</script>
