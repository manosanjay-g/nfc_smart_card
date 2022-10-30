<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

let currentRoute = computed(() => {
  return route.name;
});

const routePage = (pageName) => {
  router.push(pageName);
};
</script>

<template>
  <div id="main-app" class="text-white bg-gray-900">
    <nav
      class="flex flex-row justify-center py-3 border-b-2 border-gray-700 bg-gray-900 sticky top-0 z-50"
    >
      <h3 class="text-2xl">AppName</h3>
    </nav>
    <RouterView class="relative min-h-screen" />
    <footer
      v-if="currentRoute != 'login'"
      class="flex flex-row justify-between px-16 py-4 border-t-2 border-gray-700 bg-gray-900 sticky bottom-0 z-50"
    >
      <font-awesome-icon
        icon="fa-solid fa-home"
        class="cursor-pointer text-xl hover:text-blue-700"
        @click="routePage('/')"
      />
      <font-awesome-icon
        icon="fa-solid fa-add"
        class="cursor-pointer text-xl hover:text-blue-700"
        @click="routePage('/add')"
      />
      <font-awesome-icon
        icon="fa-solid fa-gear"
        class="cursor-pointer text-xl hover:text-blue-700"
        @click="routePage('/settings')"
      />
    </footer>
  </div>
</template>

<style scoped></style>
