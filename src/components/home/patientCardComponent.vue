<template>
  <router-link :to="routeName">
    <div>
      <li class="bg-gray-700 py-3 px-5 my-3 rounded-lg flex flex-row gap-3">
        <p class="font-medium">{{ props.index + 1 }}</p>
        <p>{{ props.name }}</p>
        <p>{{ props.city }}</p>
      </li>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["username", "name", "city", "id", "index"]);
let routeName = computed(() => {
  return "/patient/" + props.username;
});
</script>
