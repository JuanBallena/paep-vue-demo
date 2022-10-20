<template>
  <Login />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/views/Login/Login.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Login,
  },
});
</script>
