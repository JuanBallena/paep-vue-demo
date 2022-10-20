<template>
    <div class="m-table-preguntas-rango">
        <table>
            <thead>
                <tr>
                    <th>Pregunta</th>
                    <th>Nunca</th>
                    <th>A veces</th>
                    <th>Con frecuencia</th>
                    <th>Con mucha frecuencia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pregunta, index) in preguntas" :key="index">
                    <td>
                        <span class="o-pregunta-encuesta__pregunta">
                            {{ pregunta.tituloPregunta }}
                        </span>
                    </td>
                    <td @click="setNumeroAlternativa(pregunta, 1)">
                        <div class="a-radio--only">
                            <input type="radio" value="1" v-model="pregunta.numeroAlternativa">
                            <label></label>
                        </div>
                    </td>
                    <td @click="setNumeroAlternativa(pregunta, 2)">
                        <div class="a-radio--only">
                            <input type="radio" value="2" v-model="pregunta.numeroAlternativa">
                            <label></label>
                        </div>
                    </td>
                    <td @click="setNumeroAlternativa(pregunta, 3)">
                        <div class="a-radio--only">
                            <input type="radio" value="3" v-model="pregunta.numeroAlternativa">
                            <label></label>
                        </div>
                    </td>
                    <td @click="setNumeroAlternativa(pregunta, 4)">
                        <div class="a-radio--only">
                            <input type="radio" value="4" v-model="pregunta.numeroAlternativa">
                            <label></label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Pregunta } from '@/types/Pregunta'
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        preguntas: {
            type: Array as () => Array<Pregunta>,
            default: () => {}
        }
    },

    emits: ['pressPreguntaCritica'],

    setup(props, {emit}) {
        
        function setNumeroAlternativa(pregunta: Pregunta, numeroAlternativa: number): void
        {
            pregunta.setNumeroAlternativa(numeroAlternativa);
            
            if (pregunta.indicadorCritico === 1 && numeroAlternativa > 2)
            {
                emit('pressPreguntaCritica');
            }
        }

        return {
            setNumeroAlternativa
        }
    },
})
</script>
