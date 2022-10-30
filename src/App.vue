<script setup></script>

<template>
  <div id="app" class="text-white bg-gray-900">
    <nav
      class="flex flex-row justify-center py-3 border-b-2 border-gray-700 bg-gray-900 sticky top-0 z-50"
    >
      <h3 class="text-2xl">AppName</h3>
    </nav>
    <RouterView />
    <footer
      class="flex flex-row justify-between px-16 py-3 border-t-2 border-gray-700 bg-gray-900 sticky bottom-0 z-50"
    >
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="cursor-pointer text-2xl hover:text-blue-700"
        @click="openLink('https://twitter.com/_manosanjay')"
      />
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="cursor-pointer text-2xl hover:text-blue-700"
        @click="openLink('https://twitter.com/_manosanjay')"
      />
      <font-awesome-icon
        icon="fa-brands fa-twitter"
        class="cursor-pointer text-2xl hover:text-blue-700"
        @click="openLink('https://twitter.com/_manosanjay')"
      />
    </footer>
  </div>
</template>

<style scoped></style>
