<script setup></script>

<template>
  <div class="justify-center flex flex-col items-center h-screen w-full">
    <div class="text-3xl font-semibold">Login</div>
    <form class="flex flex-col my-3 w-full">
      <input
        class="my-3 py-2 px-4 rounded-lg mx-16 bg-gray-700"
        type="email"
        name=""
        id="emailInput"
        placeholder="Enter your email"
      />
      <input
        class="my-3 py-2 px-4 rounded-lg mx-16 bg-gray-700"
        type="password"
        name=""
        id="emailInput"
        placeholder="Enter your password"
      />
      <button
        class="bg-blue-600 my-3 py-2 px-4 rounded-lg mx-16 hover:bg-blue-800"
        type="submit"
      >
        Log In
      </button>
    </form>
    <p class="text-blue-600 cursor-pointer hover:text-blue-800">
      Forgot Password?
    </p>
  </div>
</template>

<style scoped></style>
