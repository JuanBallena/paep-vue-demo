<template>
    <div class="o-pregunta-encuesta">
        <div class="o-pregunta-encuesta__pregunta">{{ pregunta.tituloPregunta }}</div>
        <div>
            <div class="o-pregunta-encuesta__alternativa" @click="pregunta.setNumeroAlternativa(1)">
                <div class="a-radio--only">
                    <input type="radio" value="1" v-model="pregunta.numeroAlternativa">
                    <label></label>
                </div>
                <div class="o-pregunta-encuesta__alternativa__text">
                    {{ pregunta.alternativa1 }}
                </div>
            </div>
            <div class="o-pregunta-encuesta__alternativa" @click="pregunta.setNumeroAlternativa(2)">
                <div class="a-radio--only">
                    <input type="radio" value="2" v-model="pregunta.numeroAlternativa">
                    <label></label>
                </div>
                <div class="o-pregunta-encuesta__alternativa__text">
                    {{ pregunta.alternativa2 }}
                </div>
            </div>
            <div class="o-pregunta-encuesta__alternativa" @click="pregunta.setNumeroAlternativa(3)">
                <div class="a-radio--only">
                    <input type="radio" value="3" v-model="pregunta.numeroAlternativa">
                    <label></label>
                </div>
                <div class="o-pregunta-encuesta__alternativa__text">
                    {{ pregunta.alternativa3 }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Pregunta } from '@/types/Pregunta';
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        pregunta: {
            type: Pregunta,
            default: {}
        }
    },

    setup(props) {

        return {
       
        }
    },
})
</script>
