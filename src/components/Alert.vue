<template>
    <div :class="getTypeAlert(type)">
        <div class="a-alert__content">
            <div class="a-alert__icon">
                <i :class="getIconAlert(type)"></i>
            </div>
            <div class="a-alert__message">
                {{ message }}
            </div>
            <div class="a-alert__clear" v-if="clear">
                <i class="fas fa-times-circle" @click="$emit('clear')"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        message: {
            type: String,
            default: "alert"
        },
        type: {
            type: String,
            default: "danger"
        },
        clear: {
            type: Boolean,
            default: false
        }
    },

    emits: ['clear'],

    setup() {
        
        function getTypeAlert(type: string): string 
        {
            return type == 'info' 
                ? 'a-alert a-alert--info' 
                : (type == 'success') ? 'a-alert a-alert--success' : 'a-alert a-alert--danger';
        }

        function getIconAlert(type: string): string 
        {
            return type == 'info' 
                ? 'fas fa-info-circle' 
                : (type == 'success') ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle';
        }

        return {
            getTypeAlert,
            getIconAlert
        }
    },
})
</script>
