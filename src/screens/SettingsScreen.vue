<template>
  <div id="settings-screen" class="flex justify-center items-center">
    <p class="bg-red-600" @click="authStore.logout">Log out</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/authStore";
const authStore = useAuthStore();
</script>
