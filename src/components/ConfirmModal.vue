<template>
    <transition name="slide-fade">
        <div class="m-simple-modal" v-if="isVisible">
            <div class="m-simple-modal__body m-simple-modal--md">
                <i class="m-simple-modal__close fas fa-times" @click="$emit('closeModal')"></i>
                <div class="a-title--sm">Confirmar</div>
                <div>
                    <label>{{ descripcion }}</label>
                </div>
                <br>
                <div class="u-align-end">
                    <div>
                        <button class="a-btn a-btn--default" @click="$emit('closeModal')">Cancelar</button>
                    </div>
                    <div>
                        <button 
                            :class="confirmButtonIsDisabled ? 'a-btn a-btn--muted' : 'a-btn a-btn--success'" 
                            @click="$emit('confirmar')"
                            :disabled="confirmButtonIsDisabled"
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        descripcion: {
          type: String,
          default: "Está seguro de continuar con esta acción?"
        },
        confirmButtonIsDisabled: {
            type: Boolean,
            default: false
        }
    },

    emits: ['closeModal','confirmar']
})
</script>

