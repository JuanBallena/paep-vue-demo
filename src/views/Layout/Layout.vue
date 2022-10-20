<template>
    <Header />
    <router-view></router-view>
    <Notification
        :isVisible="notificationIsVisible"
        :type="typeNotification"
        :message="messageNotification"
        @clear="clearNotification()"
    />
</template>

<script lang="ts">
import Header from './Header.vue';
import Notification from '@/components/Notification.vue';
import SimpleModal from '@/components/SimpleModal.vue';
import { defineComponent, provide, ref, Ref } from 'vue';

export default defineComponent({

    components: {
        Header,
        Notification,
        SimpleModal
    },

    setup() {

        const notificationIsVisible: Ref<boolean> = ref(false);
        const typeNotification: Ref<string> = ref("");
        const messageNotification: Ref<string> = ref("");

        const showSuccessNotification = (message: string) =>
        {
            
            setTimeout(() => {
                typeNotification.value = "success";
                messageNotification.value = message;
                notificationIsVisible.value = true;
            }, 500);

            setTimeout(() => {
                notificationIsVisible.value = false;
                messageNotification.value = "";
                typeNotification.value = "";
            }, 3000);
        }

        const showErrorNotification = (message: string) =>
        {
            setTimeout(() => {
                typeNotification.value = "error";
                messageNotification.value = message || 'Ocurrió un error inesperado';
                notificationIsVisible.value = true;
            }, 500);
        }

        const clearNotification = () => 
        {
            notificationIsVisible.value = false;
            typeNotification.value = "";
            messageNotification.value = "";
        }

        provide('showSuccessNotification', showSuccessNotification);
        provide('showErrorNotification', showErrorNotification);

        return {
            notificationIsVisible,
            typeNotification,
            messageNotification,
            clearNotification
        }
    },
})
</script>
