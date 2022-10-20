<template>
    <transition name="slide-fade">
        <div class="m-simple-modal" v-if="isVisible">
            <div :class="'m-simple-modal__body m-simple-modal--' + dimension">
                <i class="m-simple-modal__close fas fa-times" @click="$emit('closeModal')"></i>
                <slot name="header"></slot>
                <slot name="body"></slot>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        dimension: {
            type: String,
            default: "md"
        }
    },

    emits: ['closeModal']
})
</script>