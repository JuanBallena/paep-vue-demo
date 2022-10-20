<template>
    <div class="g-login u-align-center">
        <div class="g-login__img-container">
            <img src="/img/fondo-login-encuestado.jpeg" alt="">
        </div>

        <div class="g-login__form-container">
            <div class="g-login__form">
                <div class="a-title a-title--center">
                    Introducción
                </div>

                <div class="a-text-introduccion">
                    <p>
                        Queremos que tengas la seguridad que 
                        todas las preguntas serán anónimas si tu lo deseas,
                        puedes colocar tu nombre, seudónimo o apodo.
                   </p>
                   <p>
                        Es importante que contestes todas las preguntas
                        con sinceridad, ya que los resultados ayudarán a
                        desarrollar programas para generar espacios seguros.
                   </p>
                </div>

                <div class="g-login__button-container">
                    <button
                        type="button"
                        class="g-login__button-container__button"
                        @click="siguiente()"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
        const route = useRoute();
        const router = useRouter();

        function siguiente(): void 
        {
            router.push({ name: 'IniciarEncuesta', params: { nombreEncuesta: route.params.nombreEncuesta }})
        }

        return {
            siguiente
        }
    },
})
</script>
