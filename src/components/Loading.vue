<template>
    <div class="o-loading-container">
        <div class="o-loading-container__gif">
            <!-- <img src="/img/jar-loading.gif" alt=""> -->
            <div>{{ message }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        message: {
            type: String,
            default: 'Cargando...'
        }
    },

    setup() {
        
    },
})
</script>
