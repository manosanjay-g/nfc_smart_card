<script setup>
import { onMounted } from "vue";
import { useAdminStore } from "../store/adminStore";
const adminStore = useAdminStore();

onMounted(() => {
  adminStore.getUsers();
});
</script>
<template>
  <div class="flex flex-col px-8 pb-8 my-4">
    <h3 class="text-2xl font-semibold">Branches</h3>
    <ul class="flex flex-col">
      <li
        v-for="(branch, index) in adminStore.branches"
        class="bg-gray-700 py-3 px-5 my-3 rounded-lg flex flex-row gap-3"
      >
        <p class="font-medium">{{ index + 1 }}</p>
        <p>{{ branch.name }}</p>
        <p>{{ branch.mobile }}</p>
      </li>
    </ul>
  </div>
</template>
