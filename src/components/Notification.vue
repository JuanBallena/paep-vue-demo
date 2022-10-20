<template>
    <transition name="component-fade" mode="in-out">
        <div :class="getColorNotification()" v-if="isVisible">
            <div class="m-notification__icon">
                <i :class="getIconNotification()"></i>
            </div>
            <div class="m-notification__message">
                {{  message }}
            </div>
            <div class="m-notification__clear">
                <i class="fa fa-times-circle" @click="$emit('clear')"></i>
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
        message: {
            type: String,
            default: "message"
        },
        type: {
            type: String,
            default: "success"
        }
    },

    emits: ['clear'],

    setup(props) {
        
        function getColorNotification(type: string): string
        {
            return props.type === "success" ? 'm-notification m-notification--success' : 'm-notification m-notification--error';
        }

        function getIconNotification(type: string): string
        {
            return props.type === "success" ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle';
        }

        return {
            getColorNotification,
            getIconNotification
        }
    },
})
</script>
