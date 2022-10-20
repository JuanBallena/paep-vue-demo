<template>
    <div>
        <router-view />
        <div class="m-simple-modal" v-if="modalIsVisible">
            <div class="m-simple-modal__body m-simple-modal--sm">
                <div class="a-title--sm">
                    {{ message }}
                </div>
                <br>
                <div class="u-align-center">
                    <button class="a-btn a-btn--primary" @click="modalIsVisible = false">
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref, Ref } from 'vue';
import Alert from '@/components/Alert.vue';

export default defineComponent({

    components: {
      Alert
    },

    setup() {

        const modalIsVisible: Ref<boolean> = ref(false);
        const message: Ref<string> = ref("");

        const showModal = (text: string) =>
        {
            message.value = text;

            setTimeout(() => {
                modalIsVisible.value = true;
            }, 500);
        }

        provide('showModal', showModal);

        return {
            modalIsVisible,
            message
        }
    }
})
</script>
