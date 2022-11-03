<template>
  <router-link :to="routeName">
    <div>
      <li class="bg-gray-700 py-3 px-5 my-3 rounded-lg flex flex-row gap-3">
        <p class="font-medium">{{ props.index + 1 }}</p>
        <p>{{ props.name }}</p>
        <p>{{ props.mobile }}</p>
      </li>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps([
  "username",
  "name",
  "city",
  "id",
  "index",
  "mobile",
]);
let routeName = computed(() => {
  return "/branches/:id" + props.username;
});
</script>
